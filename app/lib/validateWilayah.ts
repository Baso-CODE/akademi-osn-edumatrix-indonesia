import { kabupatenDummy } from "@/app/lib/data/kabupatenDummy.data";
import { kecamatanDummy } from "@/app/lib/data/kecamatanDummy.data";
import { kelurahanDummy } from "@/app/lib/data/kelurahanDummy.data";
import { kotaDummy } from "@/app/lib/data/kotaDummy.data";

type WilayahParams = {
  kotaSlug: string;
  kabupatenSlug?: string;
  kecamatanSlug?: string;
  kelurahanSlug?: string;
};

export function isValidWilayah(params: WilayahParams): boolean {
  const { kotaSlug, kabupatenSlug, kecamatanSlug, kelurahanSlug } = params;

  const kota = kotaDummy.find((item) => item.slug === kotaSlug);
  if (!kota) return false;

  if (kabupatenSlug === undefined) {
    return kecamatanSlug === undefined && kelurahanSlug === undefined;
  }

  const kabupaten = kabupatenDummy.find(
    (item) => item.slug === kabupatenSlug && item.kota_id === kota.id,
  );
  if (!kabupaten) return false;

  if (kecamatanSlug === undefined) {
    return kelurahanSlug === undefined;
  }

  const kecamatan = kecamatanDummy.find(
    (item) =>
      item.slug === kecamatanSlug && item.kota_kabupaten_id === kabupaten.id,
  );
  if (!kecamatan) return false;

  if (kelurahanSlug === undefined) return true;

  return kelurahanDummy.some(
    (item) => item.slug === kelurahanSlug && item.kecamatan_id === kecamatan.id,
  );
}
