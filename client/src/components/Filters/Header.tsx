"use client";

interface HeaderProps {
  genre: boolean;
  ageRange: boolean;
  prompt: boolean;
  narrator: boolean; // Add new prop for the narrator
}

const Header = ({ genre, ageRange, prompt, narrator }: HeaderProps) => {
  return (
    <div className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-4 gap-x-12">
      <div>
        <div
          className={`flex items-center justify-center w-16 h-16 mx-auto ${
            genre
              ? "bg-primaryColor border-2 border-primaryColor shadow-md shadow-primaryColor"
              : "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"
          } rounded-full shadow`}
        >
          <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            1
          </span>
        </div>
        <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
          Genre
        </h3>
        <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
          Choose the genre for your story.
        </p>
      </div>
      <div>
        <div
          className={`flex items-center justify-center w-16 h-16 mx-auto ${
            ageRange
              ? "bg-primaryColor border-2 border-primaryColor shadow-md shadow-primaryColor"
              : "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"
          } rounded-full shadow`}
        >
          <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            2
          </span>
        </div>
        <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
          Age range
        </h3>
        <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
          Choose the desired age range for your story.
        </p>
      </div>
      <div>
        <div
          className={`flex items-center justify-center w-16 h-16 mx-auto ${
            narrator
              ? "bg-primaryColor border-2 border-primaryColor shadow-md shadow-primaryColor"
              : "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"
          } rounded-full shadow`}
        >
          <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            3
          </span>
        </div>
        <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
          Narrator
        </h3>
        <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
          Choose the narrator for your story.
        </p>
      </div>
      <div>
        <div
          className={`flex items-center justify-center w-16 h-16 mx-auto ${
            prompt
              ? "bg-primaryColor border-2 border-primaryColor shadow-md shadow-primaryColor"
              : "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"
          } rounded-full shadow`}
        >
          <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            4
          </span>
        </div>
        <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
          Prompt
        </h3>
        <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
          Insert text for your story.
        </p>
      </div>
    </div>
  );
};

export default Header;
