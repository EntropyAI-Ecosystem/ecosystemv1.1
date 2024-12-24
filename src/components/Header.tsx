import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './Navigation/index';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-black border-b border-gold/20 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <Logo />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-gold to-primary-goldLight text-transparent bg-clip-text">
            EntropyAI
          </h1>
        </motion.div>
        
        <Navigation />
      </div>
    </header>
  );
}