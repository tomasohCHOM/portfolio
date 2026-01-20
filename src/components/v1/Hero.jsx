import { motion } from "motion/react";
import { childVariantsV1, containerVariantsV1 } from "@/motions";
import { links } from "../../info.jsx";

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={containerVariantsV1}
      viewport={{ once: true }}
      className="flex flex-col gap-8"
    >
      <h1 className="text-4xl font-bold">Tomas Oh</h1>
      <div className="flex flex-col gap-6 text-sm">
        <motion.p variants={childVariantsV1}>
          I'm a software engineer based in Southern California, graduated from
          California State University, Fullerton with a B.S. in Computer Science
          and a minor in Mathematics.
        </motion.p>
        <motion.p variants={childVariantsV1}>
          I enjoy learning new technologies whenever I can, building things from
          scratch for the sake of learning, and contributing to open source. You
          can find many of the projects I'm working on over on my{" "}
          <a
            target="_blank"
            href="https://github.com/tomasohCHOM/"
            className="underline underline-offset-2 decoration-text-blur
              hover:decoration-text transition"
          >
            GitHub
          </a>
          !
        </motion.p>
        <motion.p variants={childVariantsV1}>
          Favorite Hobbies: rock climbing, playing soccer, Smash Bros, and
          drawing.
        </motion.p>
        <motion.p variants={childVariantsV1}>
          Thank you for stopping by! Enjoy some ASCII art :D
        </motion.p>
      </div>
      <motion.div variants={childVariantsV1} className="flex gap-3">
        {links(18).map((link) => (
          <a key={link.name} href={link.href} target="_blank">
            {link.icon}
          </a>
        ))}
      </motion.div>
    </motion.section>
  );
}
