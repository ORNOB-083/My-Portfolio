"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";



export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="education"><Education /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}