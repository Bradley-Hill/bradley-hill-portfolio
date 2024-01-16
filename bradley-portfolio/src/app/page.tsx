"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import LegalMentions from "@/components/legalMentions";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <LegalMentions />
    </div>
  );
}
