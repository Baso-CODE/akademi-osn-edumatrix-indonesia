import * as motion from "motion/react-client";
import { cardsLearningMethod } from "../data/learningMethods";
import { TiltCard } from "./tiltCard";

const LearningMethod = async () => {
  // --- CONFIG ANIMASI BOUNCE ---
  const bounceTransition = {
    type: "spring" as const,
    stiffness: 160,
    damping: 12,
    mass: 1,
  };

  return (
    <section className="bg-white flex justify-center mt-12 items-center overflow-hidden">
      <div className="max-w-310 px-6">
        <div className="w-full">
          <div className="text-center">
            <motion.h1
              className="text-[32px] md:text-[48px] lg:text-[64px] font-bold mb-8 font-title text-[#133B79]"
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={bounceTransition}>
              Learning Method
            </motion.h1>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...bounceTransition, delay: 0.2 }}>
              <p className="text-lg font-bold text-[#131a7999] mb-8 mx-auto max-w-3xl text-center">
                Metode Belajar yang digunakan yaitu personal one on one (1 siswa
                1 mentor) dan juga tersedia Small Class. Program belajar
                didesain secara sistematis, terstruktur, terukur dan teruji.
                Pembelajaran Tematik berdasar Statistik Soal yang diujikan.
                Fokus menerapkan Pola Sukses yang sudah proven. Pastikan pilih
                partner terbaik untuk kesuksesan dan masa depanmu, AKADEMI OSN
                Indonesia!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
              {cardsLearningMethod.map((card, index) => {
                const startX = index < 2 ? -100 : 100;

                const delayAnim = index === 0 || index === 3 ? 0.6 : 0.3;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: startX, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ ...bounceTransition, delay: delayAnim }}>
                    <TiltCard
                      img={card.img}
                      title={card.title}
                      description={card.description}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningMethod;
