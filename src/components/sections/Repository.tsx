import React from 'react';
import { motion } from 'framer-motion';
import { WhiteIcons } from './icons/WhiteIcons';
import Card from '../ui/Card';
import { fadeInUp, staggerChildren } from '../../utils/animations';
import { images } from '../../utils/theme';

const features = [
  {
    icon: WhiteIcons.Database,
    title: 'Model Repository',
    description: 'Access a vast collection of pre-trained AI models'
  },
  {
    icon: WhiteIcons.Search,
    title: 'Smart Search',
    description: 'Find the perfect model for your use case'
  },
  {
    icon: WhiteIcons.Download,
    title: 'Easy Deployment',
    description: 'Deploy models with just a few clicks'
  }
];

export default function Repository() {
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
              AI Model Repository
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-300 mb-8"
            >
              Browse and access our curated collection of state-of-the-art AI models,
              ready for deployment on the Solana blockchain.
            </motion.p>
            
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 bg-gradient-to-br from-black/50 to-primary-blue/10">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-primary-blue to-primary-blueLight p-3 rounded-lg">
                        <feature.icon />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
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
                src={images.repository}
                alt="AI Model Repository"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-black p-6 rounded-lg shadow-gold">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-blue rounded-full animate-pulse" />
                <span className="font-semibold text-white">Models Available</span>
              </div>
              <p className="text-gray-300 mt-1">Ready for Deployment</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}