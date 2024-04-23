import React from "react";
import { motion } from "framer-motion";
import { motionVariant } from "@/app/motions";
import Image from "next/image";

const pics = ["iguazu"];

export default function Extra() {
  return (
    <motion.section
      initial="verticalHidden"
      whileInView="verticalVisible"
      viewport={{ once: true }}
      variants={motionVariant}
      id="extra"
    >
      <h2 className="mt-8 text-3xl font-semibold">Extra</h2>
      <div className="relative mt-6 flex items-center justify-center">
        {[...pics, ...pics, ...pics, ...pics].map((pic, i) => {
          let zIndex = `z-${40 - (i + 1) * 10}`;
          let pos = i === 0 ? "" : "absolute";
          return (
            <Image
              key={`${pic}-${i}`}
              src={`/assets/pics/${pic}.png`}
              alt={`${pic} picture`}
              width={500}
              height={500}
              className={`${zIndex} ${pos} max-w-52 rounded-lg drop-shadow-sm`}
            />
          );
        })}
      </div>
    </motion.section>
  );
}
