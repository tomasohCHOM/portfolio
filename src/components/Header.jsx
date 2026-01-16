import { motion } from "motion/react";
import { motionVariant } from "@/app/motions";

export default function Header() {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={motionVariant}
      className="relative flex items-center justify-between px-8 py-8 md:py-4"
    >
      <a href="/" className="italic">
        Tomas Oh
      </a>
    </motion.header>
  );
}
