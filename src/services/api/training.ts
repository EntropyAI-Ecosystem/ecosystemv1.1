import { createClient } from '@supabase/supabase-js';
import { TrainingJob } from './types';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const trainingApi = {
  async startTraining(modelId: string): Promise<TrainingJob> {
    const { data, error } = await supabase
      .from('training_jobs')
      .insert([{ model_id: modelId, status: 'pending' }])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getTrainingStatus(jobId: string): Promise<TrainingJob> {
    const { data, error } = await supabase
      .from('training_jobs')
      .select('*')
      .eq('id', jobId)
      .single();

    if (error) throw error;
    return data;
  },

  async updateTrainingProgress(
    jobId: string, 
    progress: number, 
    metrics: { loss: number; accuracy: number }
  ): Promise<void> {
    const { error } = await supabase
      .from('training_jobs')
      .update({ 
        progress, 
        metrics,
        status: progress === 100 ? 'completed' : 'running'
      })
      .eq('id', jobId);

    if (error) throw error;
  }
};