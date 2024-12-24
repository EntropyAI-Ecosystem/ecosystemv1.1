import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { useWalletStore } from '../../store/walletStore';

export class SolanaService {
  private connection: Connection;

  constructor() {
    this.connection = new Connection(
      import.meta.env.VITE_SOLANA_RPC_URL,
      'confirmed'
    );
  }

  async getBalance(publicKey: string): Promise<number> {
    const balance = await this.connection.getBalance(new PublicKey(publicKey));
    return balance / 10 ** 9; // Convert lamports to SOL
  }

  async sendTransaction(transaction: Transaction): Promise<string> {
    const { publicKey, signTransaction } = useWalletStore.getState();
    
    if (!publicKey || !signTransaction) {
      throw new Error('Wallet not connected');
    }

    const signed = await signTransaction(transaction);
    const signature = await this.connection.sendRawTransaction(signed.serialize());
    
    await this.connection.confirmTransaction(signature);
    return signature;
  }
}