import { createClient } from '@supabase/supabase-js';
import { DeploymentConfig } from './types';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const deploymentsApi = {
  async deployModel(config: DeploymentConfig): Promise<void> {
    const { error } = await supabase
      .from('deployments')
      .insert([{
        model_id: config.modelId,
        environment: config.environment,
        resources: config.resources
      }]);

    if (error) throw error;
  },

  async getDeploymentStatus(modelId: string): Promise<string> {
    const { data, error } = await supabase
      .from('deployments')
      .select('status')
      .eq('model_id', modelId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error) throw error;
    return data.status;
  }
};