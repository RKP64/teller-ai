"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface UserPromptProps {
  userPrompt: string;
  setUserPrompt: Dispatch<SetStateAction<string>>;
}

const UserPrompt = ({ userPrompt, setUserPrompt }: UserPromptProps) => {
  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserPrompt(e.target.value);
  };
  return (
    <div className="mt-40">
      <h1 className="text-white text-5xl font-bold mb-8">Your Prompt</h1>
      <div className="gap-x-16 flex flex-wrap gap-y-4">
        <textarea
          className="bg-gray-700/80 w-full resize-none rounded-lg p-10 text-2xl text-white"
          placeholder="Write your short story..."
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            handlePromptChange(e)
          }
          value={userPrompt}
          rows={8}
          maxLength={300}
        />
      </div>
    </div>
  );
};

export default UserPrompt;
