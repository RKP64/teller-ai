import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Genres from "@/components/Genres";
import Step from "@/components/Step";
import { Footer } from "@/components/Footer";
import Popular from "@/components/Popular";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Genres />
      <Popular />
      <Step />
      <Footer />
    </div>
  );
}
