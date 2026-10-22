import { getKelurahanDummyByKecamatanSlug } from "@/app/lib/getDummyDataRequest/getKelurahanDummy.reques";
import type { KelurahanResponse } from "@/app/types/kota.types";
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

export async function getKecamatanBySlug(
  slug: string,
): Promise<KelurahanResponse["data"]> {
  if (!slug?.trim()) return { kelurahans: [] };

  const normalizedSlug = normalizeWilayahSlug(slug);

  const fallback = (): KelurahanResponse["data"] => ({
    kelurahans: getKelurahanDummyByKecamatanSlug(normalizedSlug),
  });

  const url = `${baseUrlWilayah.replace(/\/+$/, "")}/kecamatans/slug/${encodeURIComponent(normalizedSlug)}`;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(10000),
    });

    if (response.status === 404) {
      console.warn(
        `[Wilayah API] Kecamatan tidak ditemukan: ${normalizedSlug}`,
      );
      return fallback();
    }

    if (!response.ok) {
      console.warn(
        `[Wilayah API] Kecamatan ${normalizedSlug}: HTTP ${response.status}`,
      );
      return fallback();
    }

    const contentType = response.headers.get("content-type") ?? "";

    if (!contentType.toLowerCase().includes("application/json")) {
      console.warn(
        `[Wilayah API] Respons kecamatan bukan JSON: ${normalizedSlug}`,
      );
      return fallback();
    }

    const result: KelurahanResponse = await response.json();

    if (!Array.isArray(result.data?.kelurahans)) {
      console.warn(
        `[Wilayah API] Data kelurahan tidak valid: ${normalizedSlug}`,
      );
      return fallback();
    }

    return {
      kelurahans: result.data.kelurahans,
    };
  } catch (error) {
    console.warn(
      `[Wilayah API] Gagal mengambil kecamatan ${normalizedSlug}:`,
      error,
    );
    return fallback();
  }
}
