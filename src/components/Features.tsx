import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Shield, Cpu, Network, Zap } from 'lucide-react';
import Card from './ui/Card';

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Access state-of-the-art AI models optimized for blockchain deployment"
  },
  {
    icon: Database,
    title: "Secure Storage",
    description: "Decentralized storage for your AI models and training data"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption and blockchain-based security"
  },
  {
    icon: Cpu,
    title: "High Performance",
    description: "Optimized infrastructure for AI model training and inference"
  },
  {
    icon: Network,
    title: "Decentralized Network",
    description: "Distributed computing power across the Solana network"
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Deploy models to production in seconds with one click"
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Platform Features
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the most advanced AI platform built on Solana blockchain
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-gradient-to-br from-black/50 to-primary-blue/10">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-primary-blue to-primary-blueLight p-4 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
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