import { getKotaDummyBySlug } from "@/app/lib/getDummyDataRequest/getImageKotaDummy.data";
import { getKabupatenDummyByKotaSlug } from "@/app/lib/getDummyDataRequest/getKabupatenDummy.request";
import { GetKotaBySlugResponse } from "@/app/types/kota.types";
import { baseUrlGambarWilayah, baseUrlWilayah } from "@/app/utils/config";

export async function getKotaBySlug(
  slug?: string,
): Promise<GetKotaBySlugResponse> {
  if (!slug) {
    return {
      status: 400,
      data: { kota: null, kabupatens: [] },
      message: "Missing slug",
    };
  }

  const fallback = (
    status: number,
    message: string,
  ): GetKotaBySlugResponse => ({
    status,
    data: {
      kota: getKotaDummyBySlug(slug),
      kabupatens: getKabupatenDummyByKotaSlug(slug),
    },
    message,
  });

  try {
    const res = await fetch(
      `${baseUrlWilayah}/kotas/slug/${encodeURIComponent(slug)}`,
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 300 },
        signal: AbortSignal.timeout(10000),
      },
    );

    if (!res.ok) {
      return fallback(res.status, "API gagal - menggunakan data cadangan");
    }

    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return fallback(502, "Respons API bukan JSON");
    }

    const json = await res.json();
    const kota = json.data?.kota ?? json.data;

    if (!kota || typeof kota.nama_kota !== "string") {
      return fallback(502, "Data kota tidak valid");
    }

    const kabupatens = json.data?.kabupatens ?? json.data?.kotakabupatens ?? [];

    return {
      status: res.status,
      data: {
        kota: {
          ...kota,
          foto_kota: kota.foto_kota
            ? new URL(kota.foto_kota, baseUrlGambarWilayah).href
            : null,
        },
        kabupatens: Array.isArray(kabupatens) ? kabupatens : [],
      },
      message: json.message ?? "Wilayah ditemukan",
    };
  } catch (error) {
    console.error("getKotaBySlug error:", error);
    return fallback(503, "API tidak tersedia - menggunakan data cadangan");
  }
}
