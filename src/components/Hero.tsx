import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at center, #FFD700 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-gold to-primary-goldLight text-transparent bg-clip-text"
        >
          The Future of AI on Solana
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gold/80 max-w-2xl mx-auto mb-8"
        >
          Build, train, and deploy cutting-edge AI models within a secure blockchain ecosystem.
          Experience the next generation of decentralized artificial intelligence.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            leftIcon={<ArrowRight className="w-5 h-5" />}
          >
            Launch Platform
          </Button>
          <Button
            size="lg"
            variant="outline"
          >
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}