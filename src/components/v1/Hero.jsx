import { motion } from "motion/react";
import { motionVariant } from "@/motions";

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      animate={{ animationDelay: 1000 }}
      viewport={{ once: true }}
      variants={motionVariant}
      className="flex flex-col gap-4"
    >
      <h1 className="text-4xl font-bold">
        Tomas <span className="text-contrast">Oh</span>
      </h1>
      <p>I'm just a guy who loves programming and whatnot.</p>
    </motion.section>
  );
}
