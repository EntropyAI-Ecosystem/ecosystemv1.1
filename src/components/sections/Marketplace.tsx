import React from 'react';
import { motion } from 'framer-motion';
import { WhiteIcons } from './icons/WhiteIcons';
import Card from '../ui/Card';
import { fadeInUp, staggerChildren } from '../../utils/animations';

const features = [
  {
    icon: WhiteIcons.Store,
    title: 'AI Solutions Store',
    description: 'Browse and purchase ready-to-use AI solutions'
  },
  {
    icon: WhiteIcons.Tag,
    title: 'Competitive Pricing',
    description: 'Fair and transparent pricing for all solutions'
  },
  {
    icon: WhiteIcons.Shield,
    title: 'Verified Solutions',
    description: 'All solutions are vetted and secure'
  },
  {
    icon: WhiteIcons.Zap,
    title: 'Instant Deployment',
    description: 'Deploy purchased solutions immediately'
  }
];

export default function Marketplace() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-accent-blue/10">
      <div className="container mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4 text-white">
            AI Solutions Marketplace
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-300 max-w-2xl mx-auto">
            Discover and acquire production-ready AI solutions from our curated marketplace
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="p-6 h-full bg-gradient-to-br from-black/50 to-primary-blue/10 transition-all duration-300 group-hover:shadow-gold">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-primary-blue to-primary-blueLight p-4 rounded-lg mb-4">
                    <feature.icon />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}