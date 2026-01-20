import { motion } from "motion/react";
import { containerVariantsV0 } from "@/motions";
import { links } from "@/info";

export default function Hero() {
  return (
    <motion.section
      initial="verticalHidden"
      whileInView="verticalVisible"
      viewport={{ once: true }}
      variants={containerVariantsV0}
      id="about"
      className="flex max-w-[45ch] flex-col gap-4"
    >
      <h1 className="place-self-start text-5xl font-bold">
        Tomas <span className="text-contrast">Oh</span>
      </h1>
      <p>
        Currently pursuing a bachelor&apos;s in{" "}
        <span className="font-semibold">Computer Science</span> at California
        State University, Fullerton , with a minor in Mathematics. I find joy in{" "}
        <span className="font-semibold">exploring</span> technologies and{" "}
        <span className="font-semibold">building</span> applications!
      </p>
      <p>
        In my free time, I like rock climbing, playing soccer, drawing, and
        hanging out with friends.
      </p>
      <p className="font-semibold">
        Reach out to me if you would like to talk! Thanks for taking a look at
        my portfolio :)
      </p>

      <div className="flex gap-3">
        {links(24).map((link) => (
          <a key={link.name} href={link.href} target="_blank">
            {link.icon}
          </a>
        ))}
      </div>
    </motion.section>
  );
}
