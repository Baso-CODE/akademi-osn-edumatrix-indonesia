import { isValidWilayah } from "@/app/lib/validateWilayah";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/app/components/templates/LocationLandingPage";
import { kabupatenDummy } from "@/app/lib/data/kabupatenDummy.data";
import { kecamatanDummy } from "@/app/lib/data/kecamatanDummy.data"; // Pastikan file ini ada
import { kotaDummy } from "@/app/lib/data/kotaDummy.data";
import { generateLocationMetadata } from "@/app/lib/metadata-helper";
import { Kabupaten, Kota } from "@/app/types/kota.types";

/** * 1. Menggunakan Helper Metadata
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{
    kotaSlug: string;
    kabupatenSlug: string;
    kecamatanSlug: string;
  }>;
}) {
  const { kotaSlug, kabupatenSlug, kecamatanSlug } = await params;
  return generateLocationMetadata(
    kecamatanSlug,
    `/persiapan-olimpiade/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`,
  );
}

/** * 2. Static Site Generation (SSG)
 * Memetakan jalur lengkap: /kota/kabupaten/kecamatan
 */
export async function generateStaticParams() {
  const paths = [];

  for (const kec of kecamatanDummy) {
    const parentKab = kabupatenDummy.find(
      (kab: Kabupaten) => kab.id === kec.kota_kabupaten_id,
    );
    // Cari Kota Induk
    const parentKota = kotaDummy.find(
      (kota: Kota) => kota.id === parentKab?.kota_id,
    );

    if (parentKab && parentKota) {
      paths.push({
        kotaSlug: parentKota.slug,
        kabupatenSlug: parentKab.slug,
        kecamatanSlug: kec.slug,
      });
    }
  }

  return paths;
}

/** * 3. Tampilan Halaman
 */
export default async function KecamatanPage({
  params,
}: {
  params: Promise<{
    kotaSlug: string;
    kabupatenSlug: string;
    kecamatanSlug: string;
  }>;
}) {
  const { kotaSlug, kabupatenSlug, kecamatanSlug } = await params;

  if (!isValidWilayah({ kotaSlug, kabupatenSlug, kecamatanSlug })) notFound();

  return (
    <LocationLandingPage
      slug={kecamatanSlug}
      type="kecamatan"
      allSlugs={{
        kotaSlug,
        kabupatenSlug,
        kecamatanSlug,
      }}
    />
  );
}
