import { getKecamatanDummyByKabupatenSlug } from "@/app/lib/getDummyDataRequest/getKecamatanDummy.request";
import type { KecamatanResponse } from "@/app/types/kota.types";
import { baseUrlWilayah } from "@/app/utils/config";

function normalizeWilayahSlug(slug: string): string {
  let normalized = slug.trim();

  try {
    normalized = decodeURIComponent(normalized);
  } catch {
    return normalized.toLowerCase();
  }

  return normalized.trim().toLowerCase();
}

export async function getKabupatenBySlug(
  slug: string,
): Promise<KecamatanResponse["data"]> {
  if (!slug?.trim()) return { kecamatans: [] };

  const normalizedSlug = normalizeWilayahSlug(slug);

  const fallback = (): KecamatanResponse["data"] => ({
    kecamatans: getKecamatanDummyByKabupatenSlug(normalizedSlug),
  });

  const url = `${baseUrlWilayah.replace(/\/+$/, "")}/kabupatens/slug/${encodeURIComponent(normalizedSlug)}`;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(10000),
    });

    if (response.status === 404) {
      console.warn(
        `[Wilayah API] Kabupaten tidak ditemukan: ${normalizedSlug}`,
      );
      return fallback();
    }

    if (!response.ok) {
      console.warn(
        `[Wilayah API] Kabupaten ${normalizedSlug}: HTTP ${response.status}`,
      );
      return fallback();
    }

    const contentType = response.headers.get("content-type") ?? "";

    if (!contentType.toLowerCase().includes("application/json")) {
      console.warn(
        `[Wilayah API] Kabupaten ${normalizedSlug}: respons bukan JSON`,
      );
      return fallback();
    }

    const result: KecamatanResponse = await response.json();

    if (!Array.isArray(result.data?.kecamatans)) {
      console.warn(
        `[Wilayah API] Kabupaten ${normalizedSlug}: format data tidak valid`,
      );
      return fallback();
    }

    return result.data;
  } catch (error) {
    console.warn(
      `[Wilayah API] Gagal mengambil kabupaten ${normalizedSlug}:`,
      error,
    );
    return fallback();
  }
}
