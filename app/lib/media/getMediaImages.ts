export interface MediaImage {
  src: string;
  alt: string;
}

export async function getMediaImages(): Promise<MediaImage[]> {
  // 100% SSR — data diproses di server
  return [
    {
      src: "/images/media/kompas.webp",
      alt: "Kompas meliput layanan bimbingan belajar dan les privat unggulan dari Akademi OSN.",
    },
    {
      src: "/images/media/krjogja.webp",
      alt: "KR Jogja menyoroti inovasi program les privat dan bimbel dari Akademi OSN di Yogyakarta.",
    },
    {
      src: "/images/media/idn.webp",
      alt: "IDN Times memberikan ulasan tentang layanan les privat Olimpiade Sains Nasional (OSN) oleh Akademi OSN.",
    },
    {
      src: "/images/media/kumparan.webp",
      alt: "Kumparan membahas layanan bimbel online dan les privat dari Akademi OSN dengan tutor profesional.",
    },
    {
      src: "/images/media/liputan.webp",
      alt: "Liputan6 menyoroti program bimbingan belajar Akademi OSN yang membantu siswa meraih prestasi akademis.",
    },
    {
      src: "/images/media/jogja-aja.webp",
      alt: "Jogja Aja meliput layanan les privat profesional dari Akademi OSN untuk siswa di Yogyakarta.",
    },
    {
      src: "/images/media/tribunjogja.webp",
      alt: "Tribun Jogja mengulas program bimbingan belajar unggulan Akademi OSN.",
    },
  ];
}
