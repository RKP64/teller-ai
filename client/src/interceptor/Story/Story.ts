import http from "../http";

export interface CreateStoryParams {
  ageRange: string;
  prompt: string;
  narrator:string;
  genre: string;
}

export interface GetAllStoriesWithFilterParams {
  genre?: string;
  ageRange?: string;
}

const StoryAPI = {
  getAllStories: async () => {
    const response = await http.get('/story');
    return response;
  }, 
  getAllStoriesWithFilter: async (params?: GetAllStoriesWithFilterParams) => {
    let queryParams = '';

    if (params) {
      const paramArray = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`);

      queryParams = `?${paramArray.join('&')}`;
    }

    const response = await http.get(`/story${queryParams}`);
    return response;
  },
  createStory: async ({ ageRange, prompt, narrator, genre }: CreateStoryParams) => {
    const response = await http.post('/story', { ageRange, prompt, narrator, genre });
    return response;
  },
  getStoryById: async (id: string) => {
    const response = await http.get(`/story/${id}`);
    return response;
  }, 
};

export default StoryAPI;
