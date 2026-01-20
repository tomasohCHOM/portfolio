import { motion } from "motion/react";
import { containerVariantsV0 } from "@/motions";

const pics = ["iguazu", "me", "oss", "dtdisney", "drawing"];

export default function Extra() {
  return (
    <motion.section
      initial="verticalHidden"
      whileInView="verticalVisible"
      viewport={{ once: true }}
      variants={containerVariantsV0}
      id="extra"
    >
      <h2 className="mt-8 text-3xl font-semibold">Pics :)</h2>
      <div className="group relative mx-auto mt-6 flex max-w-max items-center justify-center overflow-x-visible saturate-0 transition hover:saturate-100">
        {pics.map((pic, i) => {
          let zIndex, rotation, translateFactor;
          switch (i) {
            case 0:
              zIndex = "z-30";
              rotation = "rotate-[0deg]";
              translateFactor =
                "group-hover:translate-x-10 group-hover:-translate-y-4";
              break;
            case 1:
              zIndex = "z-10";
              rotation = "rotate-[-4deg]";
              translateFactor =
                "group-hover:-translate-x-20 group-hover:-translate-y-2";
              break;
            case 2:
              zIndex = "z-50";
              rotation = "rotate-[0deg]";
              translateFactor =
                "group-hover:translate-x-32 group-hover:-translate-y-16 group-hover:rotate-[5deg]";
              break;
            case 3:
              zIndex = "z-40";
              rotation = "rotate-[5deg]";
              translateFactor =
                "group-hover:translate-x-28 group-hover:translate-y-8";
              break;
            default:
              zIndex = "z-20";
              rotation = "rotate-[7deg]";
              translateFactor =
                "group-hover:-translate-x-12 group-hover:translate-y-24";
          }
          const pos = i === 0 ? "" : "absolute";
          return (
            <img
              key={`${pic}-${i}`}
              src={`/pics/${pic}.webp`}
              alt={`${pic} picture`}
              width={500}
              height={500}
              className={`${zIndex} ${pos} ${rotation} ${translateFactor} max-w-52 rounded-lg border-4 border-white bg-gray-400 drop-shadow-sm transition`}
            />
          );
        })}
      </div>
    </motion.section>
  );
}
