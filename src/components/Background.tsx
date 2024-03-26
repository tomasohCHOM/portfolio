import React from "react";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <motion.svg>
      <motion.circle initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
    </motion.svg>
  );
}
