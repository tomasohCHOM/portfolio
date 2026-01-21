import { motion } from "motion/react";
import { containerVariantsV1 } from "@/motions";
import { YEAR } from "@/year";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariantsV1}
      className="mt-auto px-8 pt-8 pb-12 md:pb-8 text-xs text-text lg:text-text-blur"
    >
      @{YEAR} Tomas Oh
    </motion.footer>
  );
}
