import LocationLandingPage from "@/app/components/templates/LocationLandingPage";
import { kabupatenDummy } from "@/app/lib/data/kabupatenDummy.data";
import { kecamatanDummy } from "@/app/lib/data/kecamatanDummy.data";
import { kelurahanDummy } from "@/app/lib/data/kelurahanDummy.data"; // Pastikan file ini ada
import { kotaDummy } from "@/app/lib/data/kotaDummy.data";
import { generateLocationMetadata } from "@/app/lib/metadata-helper";
import { Kabupaten, Kecamatan, Kota } from "@/app/types/kota.types";

/** * 1. Menggunakan Helper Metadata
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{
    kotaSlug: string;
    kabupatenSlug: string;
    kecamatanSlug: string;
    kelurahanSlug: string;
  }>;
}) {
  const { kotaSlug, kabupatenSlug, kecamatanSlug, kelurahanSlug } =
    await params;
  return generateLocationMetadata(
    kelurahanSlug,
    `/bimbel-lesprivat-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`,
  );
}

/** * 2. Static Site Generation (SSG)
 * Memetakan jalur lengkap 4 level: /kota/kabupaten/kecamatan/kelurahan
 */
export async function generateStaticParams() {
  const paths = [];

  for (const kel of kelurahanDummy) {
    // Cari silsilah ke atas
    const parentKec = kecamatanDummy.find(
      (kec: Kecamatan) => kec.id === kel.kecamatan_id,
    );
    const parentKab = kabupatenDummy.find(
      (kab: Kabupaten) => kab.id === parentKec?.kota_kabupaten_id,
    );
    const parentKota = kotaDummy.find(
      (kota: Kota) => kota.id === parentKab?.kota_id,
    );

    if (parentKec && parentKab && parentKota) {
      paths.push({
        kotaSlug: parentKota.slug,
        kabupatenSlug: parentKab.slug,
        kecamatanSlug: parentKec.slug,
        kelurahanSlug: kel.slug,
      });
    }
  }

  return paths;
}

/** * 3. Tampilan Halaman
 */
export default async function KelurahanPage({
  params,
}: {
  params: Promise<{
    kotaSlug: string;
    kabupatenSlug: string;
    kecamatanSlug: string;
    kelurahanSlug: string;
  }>;
}) {
  const { kotaSlug, kabupatenSlug, kecamatanSlug, kelurahanSlug } =
    await params;

  return (
    <LocationLandingPage
      slug={kelurahanSlug}
      type="kelurahan"
      allSlugs={{
        kotaSlug,
        kabupatenSlug,
        kecamatanSlug,
      }}
    />
  );
}
