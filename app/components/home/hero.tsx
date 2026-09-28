"use client";

import { fallbackContact } from "@/app/lib/data/contactCSSingleDummy.data";
import { getDataContactCsDummy } from "@/app/lib/getDummyDataRequest/getContactCsDummy.request";
import { ContactCs } from "@/app/types/contact.type";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [contact, setContact] = useState<ContactCs>(fallbackContact);

  useEffect(() => {
    const fetchContact = async () => {
      const selectedContact = await getDataContactCsDummy();
      setContact(selectedContact);
    };
    fetchContact();
  }, []);

  const link = contact.link_cta || "/contact";

  // Cek apakah link cta mengandung wilayah Jabodetabek atau Yogyakarta (case-insensitive)
  // Atau kita bisa mengecek dari contact data jika ada properti wilayah/lokasi.
  // Karena ini komponen utama (Hero general landing page), kita sediakan pengecekan umum atau prop jika ada,
  // namun jika komponen ini independen, kita bisa cek dari teks atau URL/fallback, atau membuat kondisi fleksibel.
  // Berdasarkan pola sebelumnya, berikut implementasi fungsi pengecekannya:
  const isJabodetabekOrJogja = () => {
    // Mengecek string link atau properti contact lain jika mencakup wilayah offline
    const checkString = (link + JSON.stringify(contact)).toLowerCase();
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
    return keywords.some((keyword) => checkString.includes(keyword));
  };

  const showOfflineBadge = isJabodetabekOrJogja();

  const bounceTransition = {
    type: "spring" as const,
    stiffness: 160,
    damping: 12,
    mass: 1,
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: bounceTransition },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ...bounceTransition, delay: 0.2 },
    },
  };

  const popUp = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { ...bounceTransition, delay: 0.3 },
    },
  };

  return (
    <section className="relative bg-[#04397D] flex items-center justify-center overflow-hidden">
      <div className="py-24 px-4 lg:px-0 mt-10 text-white max-w-310 lg:min-h-[78vh] xl:min-h-[82vh] relative z-10">
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.h1
              className="text-[40px] uppercase font-bold leading-10 font-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}>
              Butuh persiapan lebih
            </motion.h1>

            <motion.h2
              className="uppercase text-[40px] font-bold font-title text-[#faae17] mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              variants={fadeInDown}>
              untuk OSN
            </motion.h2>

            {/* Badges Area */}
            <motion.div
              className="flex flex-wrap gap-3 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...bounceTransition, delay: 0.15 }}>
              {/* Badge Online Selalu Ada */}
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-400/60 bg-white/5 rounded-full w-fit backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-white text-[13px] md:text-[14px] font-medium tracking-wide">
                  🌐 Online — Seluruh Indonesia
                </span>
              </div>

              {/* Badge Offline Kondisional */}
              {showOfflineBadge && (
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#faae17]/80 bg-white/5 rounded-full w-fit backdrop-blur-sm shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#faae17] animate-pulse"></span>
                  <span className="text-[#faae17] text-[13px] md:text-[14px] font-medium tracking-wide">
                    📍 Offline — Tatap Muka Tersedia
                  </span>
                </div>
              )}
            </motion.div>

            <motion.p
              className="mb-8 font-desc text-[14px] md:text-[16px] leading-4.75 font-bold"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}>
              Akademi OSN bangga mendukung generasi muda Indonesia dalam meraih
              prestasi di Olimpiade Sains Nasional. Program kami dirancang untuk
              mempersiapkan siswa dengan pengetahuan mendalam dan keterampilan
              analitis yang tajam, memastikan mereka siap menghadapi tantangan
              kompetisi sains terbesar di tanah air.
              <br />
              Melalui bimbingan intensif dan metode belajar yang inovatif, kami
              membantu setiap peserta mencapai potensi maksimalnya, mengukir
              prestasi gemilang, dan membawa nama harum bagi sekolah dan bangsa.
              Bersama Akademi OSN, jadilah bagian dari perjalanan menuju puncak
              prestasi di OSN!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...bounceTransition, delay: 0.4 }}>
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full md:w-[50%] lg:w-[40%] h-14 items-center justify-center rounded-full bg-[#F68507] py-1 pl-6 pr-14 font-medium text-neutral-50 shadow-lg hover:scale-105 transition-transform duration-300">
                <span className="z-10 pr-2 font-bold font-title leading-relaxed">
                  Daftar Sekarang
                </span>
                <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-[#04397d] transition-[width] group-hover:w-[calc(100%-8px)]">
                  <div className="mr-3.5 flex items-center justify-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-neutral-50">
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <motion.div
              variants={popUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full h-full">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}>
                <Image
                  loading="eager"
                  priority
                  fetchPriority="high"
                  src="/images/image-preview-landing-page.webp"
                  alt="Bimbingan belajar les privat untuk persiapan OSN dan peningkatan prestasi akademik siswa SD SMP SMA"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -bottom-px xl:-bottom-10 left-0 w-full z-0 pointer-events-none"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,224L24,229.3C48,235,96,245,144,234.7C192,224,240,192,288,186.7C336,181,384,203,432,224C480,245,528,267,576,272C624,277,672,267,720,245.3C768,224,816,192,864,186.7C912,181,960,203,1008,208C1056,213,1104,203,1152,186.7C1200,171,1248,149,1296,154.7C1344,160,1392,192,1416,208L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          />
        </svg>
      </motion.div>
    </section>
  );
}
