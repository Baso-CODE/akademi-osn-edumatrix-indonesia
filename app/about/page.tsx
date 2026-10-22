import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tentang Akademi OSN | Tim dan Metode Belajar',
  description: 'Kenali Akademi OSN, tim pengajar, dan metode pembelajaran untuk membantu siswa mempersiapkan Olimpiade Sains Nasional.',
  alternates: {
    canonical: "https://akademiosn.com/about",
  },
};

import HeroAbout from "../components/about/heroAbout";
import LearningMethod from "../components/learnhinMethod/learningMethod";
import MediaMassa from "../components/mediaMassa/mediaMassa";
import ProfessionalTeam from "../components/profesionalTeam";
import Promo from "../components/promo";

const About = () => {
  return (
    <>
      <HeroAbout />
      <LearningMethod />
      <ProfessionalTeam />
      <Promo />
      <MediaMassa />
    </>
  );
};

export default About;
