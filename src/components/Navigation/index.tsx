import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MenuItem } from './MenuItem';
import { MobileMenu } from './MobileMenu';
import { WalletButton } from './WalletButton';
import { menuItems } from './constants';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gold hover:text-gold/80"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>

        <WalletButton />
      </div>

      <MobileMenu
        isOpen={isOpen}
        items={menuItems}
        onItemClick={() => setIsOpen(false)}
      />
    </nav>
  );
}