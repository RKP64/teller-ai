import StoryAPI, { GetAllStoriesWithFilterParams } from "@/interceptor/Story/Story";
import { IStory } from "@/interfaces/IStory";
import { useQuery } from "@tanstack/react-query";

const useStories = (filterParams?: GetAllStoriesWithFilterParams) => {
  const { data: stories, isLoading: storiesLoading } = useQuery<Array<IStory>, Error>({
    queryKey: ["stories"],
    queryFn: async () => {
      const { data } = await StoryAPI.getAllStories();
      return data;
    }
  });

  const { data: storiesWithFilters, isLoading: storiesWithFiltersLoading } = useQuery<Array<IStory>, Error>({
    queryKey: ["filtered_stories", filterParams],
    queryFn: async () => {
      const { data } = await StoryAPI.getAllStoriesWithFilter(filterParams);
      return data;
    },
    enabled: !!filterParams,
  });

  return {
    stories,
    storiesLoading,
    storiesWithFilters,
    storiesWithFiltersLoading
  };
};

export default useStories;
