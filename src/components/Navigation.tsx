import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useWalletStore } from '../store/walletStore';

const menuItems = [
  { name: 'Repository', href: '#repository' },
  { name: 'Laboratory', href: '#laboratory' },
  { name: 'Marketplace', href: '#marketplace' },
  { name: 'AI Agents', href: '#agents' },
  { name: 'Documentation', href: '#docs' },
];

// Rest of the Navigation component remains the same...