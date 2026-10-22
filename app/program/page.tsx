import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Program Bimbel Olimpiade dan Persiapan OSN',
  description: 'Temukan program bimbingan belajar olimpiade dan persiapan OSN SD, SMP, SMA bersama Akademi OSN.',
  alternates: {
    canonical: "https://akademiosn.com/program",
  },
};

import Accordion from "../components/faq/Accordion";
import Contact from "../components/home/contact";
import MediaMassa from "../components/mediaMassa/mediaMassa";
import Promo from "../components/promo";
import HeroProgram from "./components/heroProgram";

const Program = () => {
  return (
    <>
      <HeroProgram />
      <Accordion />
      <Promo />
      <Contact />
      <MediaMassa />
    </>
  );
};

export default Program;
