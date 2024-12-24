import React from 'react';
import { motion } from 'framer-motion';

export default function Logo3D() {
  return (
    <motion.div
      className="relative w-12 h-12"
      animate={{ rotateY: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {/* 3D Triangle faces */}
      <div className="absolute inset-0 transform-gpu">
        {/* Front face */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#FDB931] transform-gpu rotate-y-0 shadow-lg" 
             style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        
        {/* Left face */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B] to-[#DAA520] transform-gpu -rotate-y-60 shadow-lg" 
             style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        
        {/* Right face */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520] to-[#FFD700] transform-gpu rotate-y-60 shadow-lg" 
             style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      </div>
    </motion.div>
  );
}