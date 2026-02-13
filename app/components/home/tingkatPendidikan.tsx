"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import detailContent from "./detailContentPendidikan";

const TingkatPendidikan = () => {
  const levels = [
    {
      key: "SD",
      image: "/images/tingkat-pendidikan/sd.webp",
      width: 497,
    },
    {
      key: "SMP",
      image: "/images/tingkat-pendidikan/smp.webp",
      width: 380,
    },
    {
      key: "SMA",
      image: "/images/tingkat-pendidikan/sma.webp",
      width: 532,
    },
  ];

  const bounceTransition = {
    type: "spring" as const,
    stiffness: 160,
    damping: 12,
    mass: 1,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: bounceTransition,
    },
  };

  return (
    <section className="flex flex-col py-8 items-center xl:min-h-[125vh] bg-white container mx-auto overflow-hidden">
      <div className="w-full px-2 md:px-0">
        <motion.div
          className="flex gap-6 mt-8 w-full flex-wrap xl:flex-nowrap justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}>
          {levels.map((item) => (
            <motion.div
              key={item.key}
              variants={cardVariants}
              className="flex flex-col items-center flex-1 min-w-75">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10">
                <Image
                  loading="lazy"
                  src={item.image}
                  alt={item.key}
                  className="w-66.5 h-88 object-contain drop-shadow-xl"
                  width={item.width}
                  height={704}
                />
              </motion.div>

              <motion.button
                className="bg-[#133B79] text-white font-bold font-title w-82 sm:w-95 text-[40px] py-2 rounded-[28px] shadow-lg -mt-5 relative z-20"
                whileHover={{ scale: 1.05, backgroundColor: "#1a4d99" }}
                whileTap={{ scale: 0.95 }}>
                {item.key}
              </motion.button>

              <motion.div
                className="mt-6 text-center px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}>
                {detailContent[item.key as keyof typeof detailContent]}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TingkatPendidikan;
