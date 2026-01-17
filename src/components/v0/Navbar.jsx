import { motion } from "motion/react";
import { motionVariant } from "@/motions";

const headerItems = [
  { title: "About", href: "about" },
  { title: "Experience", href: "experience" },
  { title: "Projects", href: "projects" },
  { title: "Extra", href: "extra" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={motionVariant}
      className="mx-auto flex items-center justify-center gap-2 border-b border-slate-300 p-2 text-[0.75rem] md:gap-3 md:text-[1rem]"
    >
      {headerItems.map((item, i) => (
        <a
          href={`#${item.href}`}
          duration={500}
          offset={-200}
          key={`header-item-${i}`}
          className={`cursor-pointer transition-all ease-in hover:text-[1.25rem] ${
            i === 0 ? "text-[1.25rem] font-semibold" : ""
          }`}
        >
          {item.title}
        </a>
      ))}
    </motion.nav>
  );
}
