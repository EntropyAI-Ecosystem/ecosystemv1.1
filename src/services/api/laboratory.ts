import axios from 'axios';
import { TrainingJob, TrainingParams } from '../../types/api';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const laboratoryApi = {
  startTraining: async (params: TrainingParams): Promise<TrainingJob> => {
    const response = await axios.post(`${API_BASE_URL}/laboratory/train`, params);
    return response.data;
  },

  getTrainingStatus: async (jobId: string): Promise<TrainingJob> => {
    const response = await axios.get(`${API_BASE_URL}/laboratory/jobs/${jobId}`);
    return response.data;
  },

  stopTraining: async (jobId: string): Promise<void> => {
    await axios.post(`${API_BASE_URL}/laboratory/jobs/${jobId}/stop`);
  }
};