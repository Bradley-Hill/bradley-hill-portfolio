"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}
