"use client";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Genres from "@/components/Genres";
import Step from "@/components/Step";
import { Footer } from "@/components/Footer";
import Popular from "@/components/Popular";
import useStories from "./hooks/useStory";
import { useEffect, useState } from "react";
import Spinner from "@/utils/Spinner";

export default function Home() {
  const { stories, storiesLoading } = useStories();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Header stories={stories} />
      <Genres stories={stories} />
      <Popular stories={stories} />
      <Step />
      <Footer />
    </>
  );
}
