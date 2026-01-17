import { motion } from "motion/react";
import { motionVariant } from "@/motions";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "v1", href: "/" },
  { label: "v0", href: "/v0" },
];

export default function Header() {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={motionVariant}
      className="relative flex items-center justify-between px-8 py-8 md:py-4"
    >
      <Link to="/">Tomas Oh</Link>
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="relative inline-block after:absolute after:left-0 
              after:bottom-0 after:h-0.5 after:w-0 after:bg-current
              after:transition-all after:duration-500 hover:after:w-full"
            activeProps={{ className: "after:w-full" }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.header>
  );
}
