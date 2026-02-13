import * as motion from "motion/react-client";
import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";

const Features = () => {
  const bounceTransition = {
    type: "spring" as const,
    stiffness: 160,
    damping: 12,
  };

  return (
    <div className="md:pt-17 md:pb-17 pt-7 pb-7 mx-auto px-2 max-w-310">
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-full mx-auto">
        {/* --- LEFT: IMAGE --- */}

        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={bounceTransition}>
          <Image
            src={"/images/pengalaman-belajar-premium.webp"}
            alt="Ilustrasi fitur bimbingan belajar premium, menawarkan kursus online dan offline dengan pendekatan pembelajaran interaktif dan dukungan pengajaran profesional."
            width="835"
            loading="lazy"
            height="710"
            className="drop-shadow-xl"
          />
        </motion.div>

        {/* --- RIGHT: TEXT CONTENT --- */}
        <div>
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...bounceTransition, delay: 0.1 }}>
            <div className="w-12 h-12 bg-[#F68507] rounded-full flex items-center justify-center flex-col shadow-md">
              <FaBriefcase className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-semibold font-title text-gray-800">
              Pengalaman belajar premium
            </h2>
          </motion.div>

          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-title mt-8 font-bold md:leading-8 lg:leading-12 xl:leading-12 text-[#00317e]"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...bounceTransition, delay: 0.2 }}>
            Belajar Jadi Lebih Mudah, Baik Online Maupun Tatap Muka
          </motion.h3>

          <motion.div
            className="mt-8 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...bounceTransition, delay: 0.3 }}>
            <h2 className="text-lg md:text-2xl text-[#374151] font-semibold font-title">
              Kelebihan Cara Belajar di Akademi OSN
            </h2>
            <p className="text-sm md:text-base text-[#374151] mt-2 font-desc">
              Di Akademi OSN, kami tahu setiap orang punya cara belajar yang
              berbeda. Karena itu, kami menghadirkan kelas online dan offline
              dengan pendekatan yang fleksibel, interaktif, dan bisa disesuaikan
              dengan kebutuhan kamu. Mau belajar lewat sesi langsung bareng
              pengajar atau akses materi kapan aja lewat platform digital —
              semuanya bisa. Tujuannya satu: biar kamu bisa belajar lebih cepat,
              paham lebih dalam, dan hasilnya benar-benar terasa.
            </p>
          </motion.div>

          {/* Paragraph 2: Masuk dari kiri pendek (Menggantikan fade-right) */}
          <motion.div
            className="mt-8 mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...bounceTransition, delay: 0.4 }}>
            <h2 className="text-lg md:text-2xl text-[#374151] font-semibold font-title">
              Pengajar Berpengalaman dan Siap Bantu Kamu Sukses
            </h2>
            <p className="text-sm md:text-base text-[#374151] mt-2 font-desc">
              Belajar bareng pengajar profesional yang sudah terbukti membantu
              banyak siswa mencapai prestasi akademik terbaik. Mereka bukan cuma
              mengajar, tapi juga jadi mentor yang ngerti ritme belajar kamu.
              Dengan dukungan penuh dan bimbingan yang sabar, kami pastikan kamu
              bisa menguasai materi pelajaran dengan percaya diri— baik untuk
              ujian sekolah, OSN, atau seleksi masuk universitas impianmu.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
