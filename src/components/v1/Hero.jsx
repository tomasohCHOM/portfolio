import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
      className="flex flex-col gap-8"
    >
      <h1 className="text-4xl font-bold">Tomas Oh</h1>
      <div className="flex flex-col gap-6 text-sm">
        <p>
          I'm a software engineer based in Southern California, graduated from
          California State University, Fullerton with a B.S. in Computer Science
          and a minor in Mathematics.
        </p>
        <p>
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
        </p>
        <p>
          Favorite Hobbies: rock climbing, playing soccer, Smash Bros, and
          drawing.
        </p>
        <p>Thank you for stopping by! Enjoy some ASCII art :D</p>
      </div>
      <div className="flex gap-3">
        <a target="_blank" href="https://github.com/tomasohCHOM">
          <FaGithub size={18} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/tomaasoh/">
          <FaLinkedin size={18} />
        </a>
        <a target="_blank" href="mailto:tomas021104@gmail.com">
          <FaPaperPlane size={18} />
        </a>
        <a
          target="_blank"
          href="https://github.com/tomasohCHOM/resume/blob/main/resume.pdf"
        >
          <IoIosPaper size={18} />
        </a>
      </div>
    </motion.section>
  );
}
