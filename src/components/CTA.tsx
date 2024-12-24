import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-black border-t border-gold/20">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-gold to-primary-goldLight text-transparent bg-clip-text">
            Ready to Transform AI Development?
          </h2>
          <p className="text-xl mb-8 text-gold/80">
            Join the next generation of AI innovation on the Solana blockchain.
            Start building your decentralized AI solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              leftIcon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
            >
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}