"use client";

import { motion } from "framer-motion";
import React from "react";
import clsx from "clsx";

export const RadarSweepIcon: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx("text-green-600 w-20 h-20", className)}
    >
      {/* Outer Circle */}
      <circle cx="12" cy="12" r="10" />

      {/* Rotating Sweep Arm */}
      <motion.line
        x1="12"
        y1="12"
        x2="20"
        y2="4"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
        style={{ originX: "12px", originY: "12px" }}
      />
    </svg>
  );
};
 