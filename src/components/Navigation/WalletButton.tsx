import React from 'react';
import { motion } from 'framer-motion';
import { useWalletStore } from '../../store/walletStore';

export function WalletButton() {
  const { connected, connect, disconnect } = useWalletStore();

  return (
    <motion.button
      onClick={connected ? disconnect : connect}
      className="bg-black/30 backdrop-blur-sm px-6 py-2 rounded-lg border border-gold/20 text-gold hover:bg-black/50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {connected ? 'Disconnect Wallet' : 'Connect Wallet'}
    </motion.button>
  );
}