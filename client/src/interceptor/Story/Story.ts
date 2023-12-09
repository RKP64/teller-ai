import http from "../http";

export interface CreateStoryParams {
  ageRange: string;
  prompt: string;
  genre: string;
}

const StoryAPI = {
  getAllStories: async () => {
    const response = await http.get('/story');
    return response;
  },
  createStory: async ({ ageRange, prompt, genre }: CreateStoryParams) => {
    const response = await http.post('/story', { ageRange, prompt, genre });
    return response;
  }
};

export default StoryAPI;
