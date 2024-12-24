export interface AIModel {
  id: string;
  name: string;
  description: string;
  version: string;
  type: 'classification' | 'regression' | 'nlp' | 'computer-vision';
  parameters: number;
  accuracy: number;
  created_at: string;
}

export interface Repository {
  models: AIModel[];
  total: number;
  page: number;
  limit: number;
}

export interface TrainingParams {
  modelId: string;
  datasetUrl: string;
  hyperparameters: {
    learningRate: number;
    batchSize: number;
    epochs: number;
  };
}

export interface TrainingJob {
  id: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  progress: number;
  metrics: {
    loss: number;
    accuracy: number;
  };
  created_at: string;
  updated_at: string;
}

export interface WalletState {
  connected: boolean;
  publicKey: string | null;
  balance: number;
  signTransaction?: (transaction: any) => Promise<any>;
}