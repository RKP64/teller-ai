"use client";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Genres from "@/components/Genres";
import Step from "@/components/Step";
import { Footer } from "@/components/Footer";
import Popular from "@/components/Popular";
import useStories from "./hooks/useStory";

export default function Home() {
  const { stories, storiesLoading } = useStories();
  return (
    <>
      <Navbar />
      <Header />
      <Genres stories={stories} />
      <Popular stories={stories} />
      <Step />
      <Footer />
    </>
  );
}
