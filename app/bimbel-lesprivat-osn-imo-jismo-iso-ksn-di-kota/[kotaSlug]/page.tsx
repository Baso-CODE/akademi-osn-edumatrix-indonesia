import LocationLandingPage from "@/app/components/templates/LocationLandingPage";
import { kotaDummy } from "@/app/lib/data/kotaDummy.data";
import { generateLocationMetadata } from "@/app/lib/metadata-helper";
import { Kota } from "@/app/types/kota.types";

/** * 1. Menggunakan Helper Metadata
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ kotaSlug: string }>;
}) {
  const { kotaSlug } = await params;
  return generateLocationMetadata(kotaSlug);
}

/** * 2. Static Site Generation (SSG)
 */
export async function generateStaticParams() {
  return kotaDummy.map((city: Kota) => ({
    kotaSlug: city.slug,
  }));
}

/** * 3. Tampilan Halaman
 */
export default async function KotaPage({
  params,
}: {
  params: Promise<{ kotaSlug: string }>;
}) {
  const { kotaSlug } = await params;

  return (
    <LocationLandingPage slug={kotaSlug} type="kota" allSlugs={{ kotaSlug }} />
  );
}
