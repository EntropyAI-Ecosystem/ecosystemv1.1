import { Brain, Beaker, Cpu, Database, Search, Download, Store, Tag, Shield, Zap } from 'lucide-react';

export const WhiteIcons = {
  // Laboratory Icons
  Brain: () => <Brain className="w-6 h-6 text-white" />,
  Beaker: () => <Beaker className="w-6 h-6 text-white" />,
  Cpu: () => <Cpu className="w-6 h-6 text-white" />,

  // Repository Icons
  Database: () => <Database className="w-6 h-6 text-white" />,
  Search: () => <Search className="w-6 h-6 text-white" />,
  Download: () => <Download className="w-6 h-6 text-white" />,

  // Marketplace Icons
  Store: () => <Store className="w-6 h-6 text-white" />,
  Tag: () => <Tag className="w-6 h-6 text-white" />,
  Shield: () => <Shield className="w-6 h-6 text-white" />,
  Zap: () => <Zap className="w-6 h-6 text-white" />
};