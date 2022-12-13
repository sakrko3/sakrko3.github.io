import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact";
import StickyFooter from "../components/StickyFooter";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <Head>
        <title>sakrko3</title>
        <meta name="description" content="Sai Krishna's Portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="bg-slate-900 text-slate-50 h-screen scrollbar-thin scrollbar-track-slate-400/20 scrollbar-thumb-indigo-500/80 snap-y snap-mandatory">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <StickyFooter />
      </div>
    </div>
  );
};

export default index;
