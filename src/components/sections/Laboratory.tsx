import React from 'react';
import { motion } from 'framer-motion';
import { WhiteIcons } from './icons/WhiteIcons';
import Card from '../ui/Card';
import { fadeInUp, staggerChildren } from '../../utils/animations';
import { images } from '../../utils/theme';

const tools = [
  {
    icon: WhiteIcons.Brain,
    title: 'Neural Network Training',
    description: 'Train your AI models with advanced neural network architectures'
  },
  {
    icon: WhiteIcons.Beaker,
    title: 'Experiment Environment',
    description: 'Secure sandbox for testing and validating AI models'
  },
  {
    icon: WhiteIcons.Cpu,
    title: 'Hardware Acceleration',
    description: 'Optimized computing resources for faster training'
  }
];

export default function Laboratory() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mb-6 text-white"
            >
              Private AI Laboratory
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-300 mb-8"
            >
              Access state-of-the-art tools and environments for AI model development
              and training in a secure, private laboratory setting.
            </motion.p>
            
            <div className="grid gap-6">
              {tools.map((tool, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 bg-gradient-to-br from-black/50 to-primary-blue/10">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-primary-blue to-primary-blueLight p-3 rounded-lg">
                        <tool.icon />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">{tool.title}</h3>
                        <p className="text-gray-300">{tool.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={images.lab}
                alt="AI Laboratory"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-black p-6 rounded-lg shadow-gold">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-blue rounded-full animate-pulse" />
                <span className="font-semibold text-white">Laboratory Active</span>
              </div>
              <p className="text-gray-300 mt-1">Resources Available</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}