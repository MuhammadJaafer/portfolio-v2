"use client";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import { analytics } from "@/firebase/config";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    analytics;
    logEvent(getAnalytics(), "Home Page");
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
