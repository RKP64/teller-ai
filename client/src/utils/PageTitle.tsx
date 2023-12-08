import React from "react";

interface PageTitleInterface {
  title: string;
  subtitle: string;
}

const PageTitle = ({ title, subtitle }: PageTitleInterface) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl text-primaryColor font-bold">{title}</h1>
      <p className="text-gray-400 max-w-[450px] mb-8">{subtitle}</p>
    </div>
  );
};

export default PageTitle;
