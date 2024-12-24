import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { MenuItems } from './types';

interface MobileMenuProps {
  isOpen: boolean;
  items: MenuItems;
  onItemClick: () => void;
}

export function MobileMenu({ isOpen, items, onItemClick }: MobileMenuProps) {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      className={`${
        isOpen ? 'block' : 'hidden'
      } lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg mt-2 rounded-lg p-4 border border-gold/20`}
    >
      <div className="flex flex-col space-y-4">
        {items.map((item) => (
          <MenuItem
            key={item.name}
            {...item}
            onClick={onItemClick}
            className="text-lg"
          />
        ))}
      </div>
    </motion.div>
  );
}