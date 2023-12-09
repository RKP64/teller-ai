  
import StoryAPI from "@/interceptor/Story/Story";
import { IStory } from "@/interfaces/IStory";
import { useQuery } from "@tanstack/react-query";

const useStories = () => { 

    const { data: stories, isLoading: storiesLoading } = useQuery<Array<IStory>, Error>({
        queryKey: ["stories"],
        queryFn: async () => {
            const { data } = await StoryAPI.getAllStories();
            return data;
        }
    });

    return {
        stories,
        storiesLoading, 
    }
}

export default useStories;