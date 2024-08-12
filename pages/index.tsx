import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll
    z-0">

    <Head>
      <title>Rohan's Portfolio</title>
    </Head>
    <Header/>

    <section id = 'hero' className=" snap-start">

      <Hero/>

    </section>

    <section id = 'about' className=" snap-center">
      <About/>
    </section>

    <section id = 'workexperience' className="snap-center">
      <WorkExperience/>
    </section>

    <section id = 'skills' className=" snap-center">
      <Skills/>
    </section>
    <section id = 'skills' className=" snap-center">
      <Projects/>
    </section>

   </div>
  );
}
