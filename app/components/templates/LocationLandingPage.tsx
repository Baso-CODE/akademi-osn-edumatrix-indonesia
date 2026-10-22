import { getKotaDummyBySlug } from "@/app/lib/getDummyDataRequest/getImageKotaDummy.data";
import { getSingleContactCsIsDeleted } from "@/app/request/contacts/getSingleIsDeletedContactCs";
import { formatSlugToTitle } from "@/app/utils/formatSlugName";
import Accordion from "../faq/Accordion";
import Features from "../features";
import GoldenTicketShowcase from "../goldenTicket";
import HeroKabupaten from "../heroKabupaten";
import HeroKecamatan from "../heroKecamatan";
import HeroKelurahan from "../heroKelurahan";
import HeroKota from "../heroKota";
import AsalSekolahSiswaEdumatrix from "../home/asalSekolahSiswaEdumatrix";
import Contact from "../home/contact";
import Gallery from "../home/gallery";
import JumlahSiswa from "../home/jumlahSiswa";
import ListSiswa from "../home/listSiswa";
import MengapaHarusEdumatrix from "../home/mengapaHarusEdumatrix";
import OsnFlowComponent from "../home/osnFlowComponent";
import OSNSampleQuestion from "../home/osnSampleQuestion";
import PaketBelajarOSN from "../home/paketBelajarOSN";
import Pengajar from "../home/pengajar";
import Pilihan from "../home/pilihan";
import Program from "../home/programBelajar";
import SekolahSiswa from "../home/sekolahSiswa";
import SuccessStoryGrid from "../home/successStoryNotSlider";
import TestimoniGrid from "../home/testimoniNotSlider";
import TingkatPendidikan from "../home/tingkatPendidikan";
import ListKabupaten from "../lisKabupaten";
import ListKecamatan from "../listKecamatan";
import ListKelurahan from "../listKelurahan";
import MediaMassa from "../mediaMassa/mediaMassa";
import Promo from "../promo";
import SliderDescktop from "../slider/sliderDescktop";
import SliderMobile from "../slider/sliderMobile";
import ImpactStatisticsOSN from "../statisticOSNEdumatrix/statisticOSNEDM";
import TransformationOSN from "../TransformationOSN";
import YouTubeShortEmbed from "../YouTubeShortEmbed";

interface LocationLandingPageProps {
  slug: string;
  type: "kota" | "kabupaten" | "kecamatan" | "kelurahan";
  allSlugs: {
    kotaSlug: string;
    kabupatenSlug?: string;
    kecamatanSlug?: string;
    kelurahanSlug?: string;
  };
}

export default async function LocationLandingPage({
  slug,
  type,
  allSlugs,
}: LocationLandingPageProps) {
  const { kotaSlug, kabupatenSlug, kecamatanSlug, kelurahanSlug } = allSlugs;

  // 1. Bangun Base URL Path secara dinamis
  let urlPath = `/persiapan-olimpiade/${kotaSlug}`;
  if (kabupatenSlug) urlPath += `/${kabupatenSlug}`;
  if (kecamatanSlug) urlPath += `/${kecamatanSlug}`;
  if (kelurahanSlug) urlPath += `/${kelurahanSlug}`;

  // Canonical URL yang akurat (termasuk slug saat ini)
  const baseUrl = "https://akademiosn.com";
  const canonicalUrl = `${baseUrl}${urlPath}`;

  // 1. Fetch Contact (Async - butuh await)
  const contactData = await getSingleContactCsIsDeleted().catch(() => null);

  const kotaData = type === "kota" ? getKotaDummyBySlug(slug) : null;

  const link = contactData?.link_cta || "/contact";
  const formattedName = formatSlugToTitle(slug);

  // 3. Tentukan Image URL
  const fallbackImage =
    "https://akademiosn.com/images/image-preview-landing-page.webp";

  const imageUrl = kotaData?.foto_kota
    ? `https://akademiosn.com${kotaData.foto_kota}`
    : fallbackImage;
  const basePath = `${baseUrl}/persiapan-olimpiade`;

  type BreadcrumbItem = {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  };

  const breadcrumbItems: BreadcrumbItem[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: baseUrl,
    },
  ];

  const segments = [
    { slug: kotaSlug, name: formatSlugToTitle(kotaSlug) },
    ...(kabupatenSlug
      ? [{ slug: kabupatenSlug, name: formatSlugToTitle(kabupatenSlug) }]
      : []),
    ...(kecamatanSlug
      ? [{ slug: kecamatanSlug, name: formatSlugToTitle(kecamatanSlug) }]
      : []),
    ...(kelurahanSlug
      ? [{ slug: kelurahanSlug, name: formatSlugToTitle(kelurahanSlug) }]
      : []),
  ];

  let currentPath = "/persiapan-olimpiade";

  for (const segment of segments) {
    currentPath += `/${segment.slug}`;

    breadcrumbItems.push({
      "@type": "ListItem",
      position: breadcrumbItems.length + 1,
      name: segment.name,
      item: `${baseUrl}${currentPath}`,
    });
  }

  // 3. Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: breadcrumbItems,
      },
      {
        "@type": "EducationalOrganization",
        "@id": `${canonicalUrl}#organization`,
        name: "Akademi OSN",
        description: `Akademi OSN adalah penyedia Les Privat Olimpiade terbaik di ${formattedName}.`,
        url: baseUrl,
        areaServed: formattedName,
        brand: {
          "@type": "Brand",
          name: "Akademi OSN",
          logo: `${baseUrl}/images/logo.webp`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+62-812-1552-3902",
          contactType: "Customer Service",
          areaServed: "ID",
          availableLanguage: ["Indonesian", "English"],
        },
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Les Privat Olimpiade di ${formattedName}`,
        inLanguage: "id-ID",
        description: `Les Privat & Bimbel Olimpiade terbaik di ${formattedName}.`,
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `Siapa pengajar OSN di ${formattedName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pengajar kami adalah peraih medali OSN dan alumni PTN terbaik.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* JSON-LD untuk SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {type === "kota" && (
        <HeroKota kotaName={formattedName} linkCta={link} fotoKota={imageUrl} />
      )}

      {type === "kabupaten" && (
        <HeroKabupaten KabupatenName={formattedName} linkCta={link} />
      )}

      {type === "kecamatan" && (
        <HeroKecamatan kecamatanName={formattedName} linkCta={link} />
      )}

      {type === "kelurahan" && (
        <HeroKelurahan kelurahanName={formattedName} linkCta={link} />
      )}
      <JumlahSiswa />
      <ListSiswa />
      <Program />
      <OsnFlowComponent />
      <Features />
      <YouTubeShortEmbed />
      <PaketBelajarOSN />
      <SliderMobile />
      <SliderDescktop />
      <TingkatPendidikan />
      <Pilihan />
      <MengapaHarusEdumatrix />
      <Pengajar />
      <OSNSampleQuestion />
      <Gallery />
      <SuccessStoryGrid />
      <TestimoniGrid />
      <TransformationOSN />
      <GoldenTicketShowcase />
      <AsalSekolahSiswaEdumatrix />
      <SekolahSiswa />
      {type === "kota" && (
        <ListKabupaten kotaName={formattedName} kotaSlug={slug} />
      )}

      {type === "kabupaten" && (
        <ListKecamatan
          kotaSlug={kotaSlug}
          kabupatenName={formattedName}
          kabupatenSlug={slug}
        />
      )}

      {type === "kecamatan" && (
        <ListKelurahan
          kotaSlug={kotaSlug}
          kecamatanName={formattedName}
          kabupatenSlug={kabupatenSlug!}
          kecamatanSlug={slug}
        />
      )}
      <ImpactStatisticsOSN />
      <Accordion />
      <Promo />
      <Contact />
      <MediaMassa />
    </>
  );
}
