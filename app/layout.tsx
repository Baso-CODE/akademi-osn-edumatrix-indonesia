import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Oswald, Poppins, Roboto } from "next/font/google";
import localFont from "next/font/local";
import FloatingCTA from "./components/floatingCTA";
import FooterEduMatrix from "./components/footerEdumatrix";
import BottomNavigationBarOSN from "./components/navbar/BottomNavigationBarOSN";
import { navLinks } from "./components/navbar/NavLink";
import ResponsiveNav from "./components/navbar/ResponsiveNav";
import "./globals.css";

const SITE_URL = "https://akademiosn.com";
const SITE_NAME = "Akademi OSN";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

const superPencil = localFont({
  src: "./assets/font/Super-Pencil.ttf",
  variable: "--font-super-pencil",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Akademi OSN | Bimbel Olimpiade SD, SMP & SMA",
    template: "%s | Akademi OSN",
  },
  description:
    "Program persiapan OSN dan bimbel olimpiade untuk siswa SD, SMP, dan SMA. Belajar Matematika, IPA, Fisika, Kimia, Biologi, dan Informatika bersama tutor berpengalaman.",
  applicationName: SITE_NAME,
  verification: {
    google: "ncf5z6mALpNAHbm3jTHIruiz162Yq7rFS4DhNhuuo90",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: SITE_NAME,
    title: "Akademi OSN | Bimbel Olimpiade SD, SMP & SMA",
    description:
      "Persiapan Olimpiade Sains Nasional untuk siswa SD, SMP, dan SMA melalui pembelajaran terarah bersama Akademi OSN.",
    images: [
      {
        url: `${SITE_URL}/images/images-cta.webp`,
        width: 1200,
        height: 630,
        alt: "Bimbel Olimpiade dan Persiapan OSN Akademi OSN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akademi OSN | Bimbel Olimpiade SD, SMP & SMA",
    description:
      "Program persiapan OSN dan bimbel olimpiade untuk siswa SD, SMP, dan SMA.",
    images: [`${SITE_URL}/images/images-cta.webp`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${poppins.variable} ${roboto.variable} ${oswald.variable} ${superPencil.variable} antialiased`}>
        <ResponsiveNav />
        <main>{children}</main>
        <FloatingCTA />
        <BottomNavigationBarOSN navLinksData={navLinks} />
        <FooterEduMatrix />
        <GoogleAnalytics gaId="G-826HX59SVQ" />
      </body>
    </html>
  );
}
