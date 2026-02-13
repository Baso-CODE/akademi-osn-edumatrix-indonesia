import { getDataProgramDummy } from "@/app/lib/getDummyDataRequest/getProgramDummy.request";
import * as motion from "motion/react-client";
import Image from "next/image";
import {
  AiOutlineBulb,
  AiOutlineCheckCircle,
  AiOutlineCheckSquare,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai";
import { TbMessageCircleQuestion } from "react-icons/tb";

const iconComponents = [
  { Icon: AiOutlineBulb, color: "text-blue-900" },
  { Icon: AiOutlineCheckCircle, color: "text-orange-500" },
  { Icon: AiOutlineStar, color: "text-blue-900" },
  { Icon: AiOutlineUser, color: "text-orange-500" },
  { Icon: AiOutlineCheckSquare, color: "text-blue-900" },
  { Icon: TbMessageCircleQuestion, color: "text-orange-500" },
];

const colors = ["bg-[#04397D]", "bg-orange-500"];

export default async function Program() {
  const programData = await getDataProgramDummy();

  const bounceTransition = {
    type: "spring" as const,
    stiffness: 160,
    damping: 12,
    mass: 1,
  };
  const getInitialState = (index: number) => {
    const modIndex = index % 6;

    const y = modIndex < 3 ? -50 : 50;

    const col = modIndex % 3;
    const x = col === 0 ? -50 : col === 1 ? 0 : 50;

    return { opacity: 0, x, y, scale: 0.9 };
  };

  return (
    <section className="bg-white flex justify-center my-28 items-center overflow-hidden">
      <div className="max-w-310 px-2 md:px-0 w-full">
        <div className="container mx-auto">
          <motion.div
            className="flex justify-center items-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={bounceTransition}>
            <h2 className="text-[40px] font-bold font-title text-center text-blue-900">
              Fitur Program
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {programData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`${colors[index % 2]} rounded-3xl p-8 text-white`}
                initial={getInitialState(index)}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  ...bounceTransition,
                  delay: (index % 3) * 0.15,
                }}>
                <div className="flex items-center mb-2">
                  <div className="bg-white p-1 rounded-full flex items-center justify-center">
                    {(() => {
                      const { Icon, color } =
                        iconComponents[index % iconComponents.length];
                      return <Icon className={`bg-transparent ${color}`} />;
                    })()}
                  </div>
                  <h3 className="ml-2 font-medium md:text-lg text-2xl font-title">
                    {item.judul_fitur}
                  </h3>
                </div>

                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row gap-3">
                    <Image
                      src={`${item.foto_icon}`}
                      alt={item.judul_fitur}
                      className="w-28 h-28 shrink-0 self-center object-contain"
                      width={112}
                      height={112}
                      loading="lazy"
                    />
                    <p className="text-sm font-desc leading-5 font-medium opacity-90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {programData.length === 0 && (
            <p className="text-center text-gray-600 mt-8 font-desc">
              Data asli tidak tersedia. Menampilkan konten placeholder.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
