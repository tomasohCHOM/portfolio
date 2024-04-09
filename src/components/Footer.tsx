import React from "react";
import { motion } from "framer-motion";
import { motionVariant } from "@/app/motions";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={motionVariant}
      className="mt-8 flex items-center justify-around gap-8 px-4 pb-16 pt-10 sm:justify-center"
    >
      <div className="text-[0.75rem] font-semibold sm:text-sm">
        @ 2024 - Present
      </div>
      <div className="text-right text-[0.75rem] sm:text-sm">
        Developed with 🔥 by
        <br className="sm:hidden" />{" "}
        <span className="font-semibold">Tomas Oh</span>
      </div>
    </motion.footer>
  );
}
