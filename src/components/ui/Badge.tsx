import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
}

const variants = {
  default: 'bg-gold/20 text-gold',
  success: 'bg-green-500/20 text-green-500',
  warning: 'bg-yellow-500/20 text-yellow-500',
  error: 'bg-red-500/20 text-red-500'
};

export default function Badge({ 
  children, 
  variant = 'default',
  className 
}: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </motion.span>
  );
}