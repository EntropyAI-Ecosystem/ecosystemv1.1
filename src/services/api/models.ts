import { createClient } from '@supabase/supabase-js';
import { cacheService } from '../cache';
import { AIModel } from './types';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const modelsApi = {
  async getModels(): Promise<AIModel[]> {
    return cacheService.get('models', async () => {
      const { data, error } = await supabase
        .from('ai_models')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    });
  },

  async getModelById(id: string): Promise<AIModel> {
    return cacheService.get(`model:${id}`, async () => {
      const { data, error } = await supabase
        .from('ai_models')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    });
  },

  async createModel(model: Omit<AIModel, 'id' | 'created_at' | 'updated_at'>): Promise<AIModel> {
    const { data, error } = await supabase
      .from('ai_models')
      .insert([model])
      .select()
      .single();

    if (error) throw error;
    cacheService.invalidate('models');
    return data;
  },

  async updateModel(id: string, updates: Partial<AIModel>): Promise<AIModel> {
    const { data, error } = await supabase
      .from('ai_models')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    cacheService.invalidate('models');
    cacheService.invalidate(`model:${id}`);
    return data;
  }
};