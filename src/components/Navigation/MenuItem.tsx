import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface MenuItemProps {
  name: string;
  href: string;
  onClick?: () => void;
  className?: string;
}

export function MenuItem({ name, href, onClick, className }: MenuItemProps) {
  return (
    <motion.a
      href={href}
      className={cn(
        "text-gold/80 hover:text-gold transition-colors",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {name}
    </motion.a>
  );
}