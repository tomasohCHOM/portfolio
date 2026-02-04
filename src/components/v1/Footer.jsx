import { motion } from "motion/react";
import { containerVariantsV1 } from "@/motions";
import { YEAR } from "@/year";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariantsV1}
      className="mt-auto px-8 pt-8 pb-12 md:pb-8 text-text lg:text-text-blur"
    >
      <div className="max-w-max flex items-center gap-2">
        <a
          href="https://webring-1.vercel.app/?from=tomasohCHOM&dir=prev"
          rel="noopener noreferrer"
        >
          <BiChevronLeft size={20} className="hover:text-text transition" />
        </a>
        <span className="text-xs">© {YEAR} Tomas Oh</span>
        <a
          href="https://webring-1.vercel.app/?from=tomasohCHOM&dir=next"
          rel="noopener noreferrer"
        >
          <BiChevronRight size={20} className="hover:text-text transition" />
        </a>
      </div>
    </motion.footer>
  );
}
