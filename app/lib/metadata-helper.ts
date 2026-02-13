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
  // 4. Definisi Konten SEO
  const ogTitle = `Les Privat OSN ${formattedName} SD SMP SMA | Bimbel Olimpiade Matematika, Fisika, Kimia Terbaik`;

  const ogDescription = `Les Privat & Bimbel Olimpiade SD, SMP, SMA di ${formattedName} untuk OSN, KSN, IMO, JISMO, dan ISO. Program Matematika, Fisika, Kimia, Biologi, IPA, Astronomi dengan mentor berpengalaman, kelas intensif, tryout rutin, dan pendampingan hingga tingkat nasional. Daftar sekarang!`;

  // 5. Return Object Metadata
  return {
    metadataBase: new URL(baseUrl),
    title: ogTitle,
    description: ogDescription,
    keywords: [
      `bimbel les privat osn ${formattedName}`,
      `bimbel olimpiade sd ${formattedName}`,
      `bimbel olimpiade smp ${formattedName}`,
      `bimbel olimpiade sma ${formattedName}`,
      `les privat sd ${formattedName}`,
      `les privat smp ${formattedName}`,
      `les privat sma ${formattedName}`,
      `bimbel ksn ${formattedName}`,
      `les privat imo ${formattedName}`,
      `bimbel jismo ${formattedName}`,
      `bimbel iso ${formattedName}`,
      `osn matematika ${formattedName}`,
      `osn fisika ${formattedName}`,
      `osn kimia ${formattedName}`,
      `osn biologi ${formattedName}`,
      `osn ipa ${formattedName}`,
      `osn astronomi ${formattedName}`,
      `program persiapan osn ${formattedName}`,
      `guru privat olimpiade ${formattedName}`,
      `akademi osn ${formattedName}`,
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
