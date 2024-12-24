import { modelsApi } from './models';
import { laboratoryApi } from './laboratory';
import { deploymentsApi } from './deployments';
import { trainingApi } from './training';

export const api = {
  models: modelsApi,
  laboratory: laboratoryApi,
  deployments: deploymentsApi,
  training: trainingApi
};