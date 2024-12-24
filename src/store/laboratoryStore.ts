import { create } from 'zustand';
import { laboratoryApi } from '../services/api/laboratory';
import { TrainingJob, TrainingParams } from '../types/api';

interface LaboratoryStore {
  activeJobs: TrainingJob[];
  isTraining: boolean;
  startTraining: (params: TrainingParams) => Promise<void>;
  stopTraining: (jobId: string) => Promise<void>;
  updateJobStatus: (jobId: string) => Promise<void>;
}

export const useLaboratoryStore = create<LaboratoryStore>((set, get) => ({
  activeJobs: [],
  isTraining: false,

  startTraining: async (params) => {
    set({ isTraining: true });
    try {
      const job = await laboratoryApi.startTraining(params);
      set(state => ({
        activeJobs: [...state.activeJobs, job]
      }));
    } finally {
      set({ isTraining: false });
    }
  },

  stopTraining: async (jobId) => {
    await laboratoryApi.stopTraining(jobId);
    set(state => ({
      activeJobs: state.activeJobs.filter(job => job.id !== jobId)
    }));
  },

  updateJobStatus: async (jobId) => {
    const job = await laboratoryApi.getTrainingStatus(jobId);
    set(state => ({
      activeJobs: state.activeJobs.map(j => 
        j.id === jobId ? job : j
      )
    }));
  }
}));