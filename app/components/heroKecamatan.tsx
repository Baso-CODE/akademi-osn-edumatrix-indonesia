import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

interface HeroKecamatanProps {
  kecamatanName: string;
  linkCta: string;
}

export default function HeroKecamatan({
  kecamatanName,
  linkCta,
}: HeroKecamatanProps) {
  // --- CONFIG ANIMASI BOUNCE ---
  const bounceTransition = {
    type: "spring" as const,
    stiffness: 160, // Tarikan per kencang
    damping: 12, // Pengereman agar membal kenyal
  };

  // Cek apakah kecamatan termasuk wilayah Jabodetabek atau Yogyakarta (case-insensitive)
  const isJabodetabekOrJogja = () => {
    if (!kecamatanName) return false;
    const lowerKecamatan = kecamatanName.toLowerCase();
    const keywords = [
      "jakarta",
      "bogor",
      "depok",
      "tangerang",
      "bekasi",
      "yogyakarta",
      "jogja",
      "sleman",
      "bantul",
      "kulon progo",
      "gunungkidul",
    ];
    return keywords.some((keyword) => lowerKecamatan.includes(keyword));
  };

  const showOfflineBadge = isJabodetabekOrJogja();

  return (
    <section className="relative bg-[#04397D] flex items-center justify-center overflow-hidden">
      <div className="py-24 px-2 mt-10 text-white max-w-310 lg:min-h-[78vh] xl:min-h-[82vh] relative z-10">
        <div className="flex flex-col lg:flex-row gap-14">
          {/* --- KOLOM KIRI (TEKS & TOMBOL) --- */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            {/* JUDUL: Jatuh dari atas (Menggantikan fade-down) */}
            <motion.h1
              className="text-[36px] uppercase font-bold leading-10 font-title mb-6"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={bounceTransition}>
              BIMBEL & LES PRIVAT OSN KSN IMO SD SMP SMA Di{" "}
              <span className="text-[#faae17] ">{kecamatanName}</span> TERBAIK
              #1
            </motion.h1>

            {/* Badges Area */}
            <motion.div
              className="flex flex-wrap gap-3 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...bounceTransition, delay: 0.1 }}>
              {/* Badge Online Selalu Ada */}
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-400/60 bg-white/5 rounded-full w-fit backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-white text-[13px] md:text-[14px] font-medium tracking-wide">
                  🌐 Online — Seluruh Indonesia
                </span>
              </div>

              {/* Badge Offline Hanya Tampil untuk Jabodetabek & Yogyakarta */}
              {showOfflineBadge && (
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#faae17]/80 bg-white/5 rounded-full w-fit backdrop-blur-sm shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#faae17] animate-pulse"></span>
                  <span className="text-[#faae17] text-[13px] md:text-[14px] font-medium tracking-wide">
                    📍 Offline — Tatap Muka di {kecamatanName}
                  </span>
                </div>
              )}
            </motion.div>

            {/* DESKRIPSI: Masuk dari kiri (Menggantikan fade-right) */}
            <motion.p
              className="mb-4 font-desc text-[1rem] leading-4.75 font-medium"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...bounceTransition, delay: 0.2 }}>
              Akademi OSN merupakan{" "}
              <strong>bimbel OSN (Olimpiade Sains Nasional)</strong> dan{" "}
              <strong>les privat KSN–IMO</strong> terpercaya di{" "}
              <span className="text-[#faae17] font-extrabold uppercase">
                {kecamatanName}
              </span>
              . Kami menghadirkan program pembelajaran komprehensif untuk{" "}
              <strong>siswa SD, SMP, dan SMA</strong> yang ingin berprestasi di
              bidang
              <strong>
                {" "}
                Matematika, Fisika, Kimia, Biologi, Astronomi, dan Informatika
              </strong>
              . Dengan metode belajar yang terstruktur, bimbingan dari{" "}
              <strong>pengajar berpengalaman OSN</strong>, serta materi yang
              selalu diperbarui sesuai kurikulum terbaru, kami membantu
              siswa-siswi di{" "}
              <span className="text-[#faae17] font-extrabold uppercase">
                {kecamatanName}
              </span>{" "}
              untuk <strong>lolos seleksi Olimpiade Sains Nasional</strong> dan
              meraih medali di tingkat provinsi maupun nasional.
            </motion.p>

            {/* TOMBOL: Naik dari bawah (Menggantikan fade-up) */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...bounceTransition, delay: 0.4 }}>
              <Link
                href={linkCta}
                className="group relative inline-flex w-full md:w-[50%] lg:w-[40%] h-14 items-center justify-center rounded-full bg-[#F68507] py-1 pl-6 pr-14 font-medium text-neutral-50">
                <span className="z-10 pr-2"> Daftar Sekarang</span>
                <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-[#04397d] transition-[width] group-hover:w-[calc(100%-8px)]">
                  <div className="mr-3.5 flex items-center justify-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-neutral-50">
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* --- KOLOM KANAN (GAMBAR) --- */}
          <motion.div
            className="lg:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...bounceTransition, delay: 0.3 }}>
            <Image
              width={1000}
              height={1000}
              src="/images/hero-image-kecamatan-page.webp"
              alt={`Les privat dan bimbingan belajar OSN terbaik di ${kecamatanName}. Akademi OSN membantu siswa SD, SMP, dan SMA meraih prestasi Olimpiade Sains Nasional (OSN) dengan pengajar profesional dan metode belajar interaktif di ${kecamatanName}.`}
              className="w-full h-full object-contain drop-shadow-2xl"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>

      {/* --- WAVE SVG BAWAH --- */}
      <motion.div
        className="absolute -bottom-px xl:-bottom-22.5 left-0 w-full pointer-events-none"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.5 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,176C672,181,768,235,864,229.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>
    </section>
  );
}
