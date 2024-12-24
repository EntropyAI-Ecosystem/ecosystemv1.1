import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { colors, gradients } from '../../utils/theme';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'gradient' | 'outlined';
}

export default function Card({ 
  children, 
  className, 
  hover = true,
  variant = 'default' 
}: CardProps) {
  const baseStyles = 'rounded-xl backdrop-blur-sm transition-all duration-300';
  
  const variants = {
    default: 'bg-black/50 border border-gold/20',
    gradient: gradients.card + ' border border-gold/20',
    outlined: 'border-2 border-gold/30 bg-transparent'
  };

  return (
    <motion.div
      whileHover={hover ? { 
        y: -5,
        boxShadow: '0 0 20px rgba(255,215,0,0.2)'
      } : undefined}
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );
}