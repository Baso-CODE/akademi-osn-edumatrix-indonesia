import LocationLandingPage from "@/app/components/templates/LocationLandingPage";
import { kabupatenDummy } from "@/app/lib/data/kabupatenDummy.data";
import { kotaDummy } from "@/app/lib/data/kotaDummy.data";
import { generateLocationMetadata } from "@/app/lib/metadata-helper";
import { Kabupaten, Kota } from "@/app/types/kota.types";

/** * 1. Menggunakan Helper Metadata
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ kotaSlug: string; kabupatenSlug: string }>;
}) {
  const { kotaSlug, kabupatenSlug } = await params;
  return generateLocationMetadata(
    kabupatenSlug,
    `/bimbel-lesprivat-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}/${kabupatenSlug}`,
  );
}

/** * 2. Static Site Generation (SSG)
 * Membuat path statis untuk kombinasi [kotaSlug]/[kabupatenSlug]
 */
export async function generateStaticParams() {
  return kabupatenDummy.map((kab: Kabupaten) => {
    const parentKota = kotaDummy.find((k: Kota) => k.id === kab.kota_id);

    return {
      kotaSlug: parentKota?.slug || "nasional",
      kabupatenSlug: kab.slug,
    };
  });
}

/** * 3. Tampilan Halaman
 */
export default async function KabupatenPage({
  params,
}: {
  params: Promise<{ kotaSlug: string; kabupatenSlug: string }>;
}) {
  const { kotaSlug, kabupatenSlug } = await params;

  return (
    <LocationLandingPage
      slug={kabupatenSlug}
      type="kabupaten"
      allSlugs={{
        kotaSlug: kotaSlug,
        kabupatenSlug: kabupatenSlug,
      }}
    />
  );
}
