import React from 'react';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      className="text-[#FFD700]"
      whileHover={{ scale: 1.05 }}
    >
      <motion.path
        d="M50 10 L90 90 L10 90 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path
        d="M50 30 L75 75 L25 75 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
      />
      <motion.path
        d="M50 50 L60 60 L40 60 Z"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
    </motion.svg>
  );
}