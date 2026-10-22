import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Kontak Akademi OSN | Konsultasi Program Olimpiade',
  description: 'Hubungi Akademi OSN untuk konsultasi program bimbel olimpiade dan persiapan OSN bagi siswa SD, SMP, dan SMA.',
  alternates: {
    canonical: "https://akademiosn.com/contact",
  },
};

import AllContactCS from "./components/allContactCS";
import HeroContactCS from "./components/heroContactCs";

const ContactPage = () => {
  return (
    <>
      <HeroContactCS />
      <AllContactCS />
    </>
  );
};

export default ContactPage;
