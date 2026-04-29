"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = { size?: number; className?: string };

export default function BouncingRobot({ size = 60, className }: Props) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src="/robots/robot-pointing.png"
        alt="Loading"
        width={size}
        height={Math.round((size * 72) / 60)}
      />
    </motion.div>
  );
}
