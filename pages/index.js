import Head from "next/head";
import styles from "../styles/Home.module.scss";

// Components
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />
    </>
  );
}
