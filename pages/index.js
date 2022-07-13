import Head from "next/head";
import styles from "../styles/Home.module.scss";

// Components
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import VideoContent from "../components/VideoContent/VideoContent";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Section 3 */}
      <VideoContent />

      {/* footer */}
      <Footer />
    </>
  );
}
