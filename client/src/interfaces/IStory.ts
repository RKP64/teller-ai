export interface IStory {
    _id: string;
    name: string;
    summary: string;
    ageRange: string;
    prompt: string;
    genre: string;
    scenarios: IScenario[];
    createdAt: string;
    __v: number;
  };
  
export interface IScenario {
    text: string;
    image: string;
    voice:string;
    _id: string;
  };