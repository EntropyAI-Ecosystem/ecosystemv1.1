import { create } from 'zustand';
import { modelsApi } from '../services/api/models';
import { AIModel, Repository } from '../types/api';

interface ModelStore {
  models: AIModel[];
  totalModels: number;
  currentPage: number;
  isLoading: boolean;
  fetchModels: (page?: number) => Promise<void>;
  deployModel: (modelId: string, params: any) => Promise<void>;
}

export const useModelStore = create<ModelStore>((set, get) => ({
  models: [],
  totalModels: 0,
  currentPage: 1,
  isLoading: false,

  fetchModels: async (page = 1) => {
    set({ isLoading: true });
    try {
      const repository: Repository = await modelsApi.getModels(page);
      set({
        models: repository.models,
        totalModels: repository.total,
        currentPage: page
      });
    } finally {
      set({ isLoading: false });
    }
  },

  deployModel: async (modelId, params) => {
    await modelsApi.deployModel(modelId, params);
  }
})); import { motion } from 'framer-motion';
    image: 'https://t4.ftcdn.net/jpg/05/09/36/07/360_F_509360741_Gbtb6JFeWSGmETnMYUt6TUg3sIDM15EM.jpg'
  }
];

export function Repository() {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredModels,
  } = useModelFiltering(SAMPLE_MODELS);

  const handleDownload = (modelId: string) => {
    console.log('Downloading model:', modelId);
  };

  const handleFilter = () => {
    const categories: AIModel['category'][] = ['computer-vision', 'nlp', 'reinforcement-learning', 'blockchain', 'quantum'];
    const nextIndex = categories.indexOf(selectedCategory || '') + 1;
    setSelectedCategory(nextIndex >= categories.length ? null : categories[nextIndex]);
  };

  return (
    <section className="py-16">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
            AI Model Repository
          </h2>
          <div className="flex space-x-4">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
            />
            <FilterButton onClick={handleFilter} />
          </div>
        </div>

        <ModelGrid
          models={filteredModels}
          onDownload={handleDownload}
        />
      </motion.div>
    </section>
  );
}