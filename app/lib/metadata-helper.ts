import { getKotaDummyBySlug } from "@/app/lib/getDummyDataRequest/getImageKotaDummy.data";
import { Metadata } from "next";

export function generateLocationMetadata(
  slug: string,
  canonicalPath?: string,
): Metadata {
  const formattedName = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const baseUrl = "https://akademiosn.com";

  const finalCanonicalUrl = canonicalPath
    ? `${baseUrl}${canonicalPath}`
    : `${baseUrl}/bimbel-lesprivat-osn-imo-jismo-iso-ksn-di-kota/${slug}`;

  const kotaData = getKotaDummyBySlug(slug);

  const imageUrl = kotaData?.foto_kota
    ? `https://akademiosn.com${kotaData.foto_kota}`
    : `${baseUrl}/images/images-cta.webp`;

  // 4. Definisi Konten SEO
  const ogTitle = `📚 Les Privat Olimpiade ${formattedName} • OSN IMO ISO Unggulan`;
  const ogDescription = `Kursus Les Privat Olimpiade ${formattedName} Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Peraih Lisensi OSN ✔️ Garansi REPORT CARD ✍️ Daftar? Segera kunjungi situs kami...`;

  // 5. Return Object Metadata
  return {
    metadataBase: new URL(baseUrl),
    title: ogTitle,
    description: ogDescription,
    keywords: [
      `bimbel di ${formattedName}`,
      `les privat OSN ${formattedName}`,
      "osn",
      "imo",
      "iso",
      "kompetisi sains",
      "ksn",
      "guru privat",
      "Akademi OSN",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: finalCanonicalUrl,
    },
    openGraph: {
      type: "article",
      locale: "id_ID",
      url: finalCanonicalUrl,
      siteName: "Akademi OSN",
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `les privat olimpiade ${formattedName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [imageUrl],
    },
  };
}
