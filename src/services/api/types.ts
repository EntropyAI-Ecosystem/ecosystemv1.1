export interface AIModel {
  id: string;
  name: string;
  description: string;
  type: 'classification' | 'regression' | 'nlp';
  parameters: number;
  accuracy: number;
  created_at: string;
  updated_at: string;
}

export interface TrainingJob {
  id: string;
  modelId: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  progress: number;
  metrics: {
    loss: number;
    accuracy: number;
  };
  created_at: string;
  updated_at: string;
}

export interface DeploymentConfig {
  modelId: string;
  environment: 'development' | 'staging' | 'production';
  resources: {
    cpu: number;
    memory: number;
    gpu?: boolean;
  };
}