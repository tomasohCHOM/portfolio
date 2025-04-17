import { motion } from "motion/react";
import { motionVariant } from "@/app/motions";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={motionVariant}
      className="relative flex items-center justify-between px-8 py-8 md:py-4"
    >
      <Link href="/" className="italic">
        Tomas Oh
      </Link>
    </motion.header>
  );
}
