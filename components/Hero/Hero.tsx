import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hi, I'm Sai Krishna", "And, I caught fire Coding"],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden text-center space-y-8 snap-center"
    >
      <BackgroundCircles />
      <Image
        src="/Profile pic.jpeg"
        alt="Profile pic"
        width={140}
        height={140}
        className="relative rounded-full object-cover"
        priority
      />
      <div className="z-20 ">
        <h2 className="text-xs md:text-sm uppercase text-slate-400 pb-2 tracking-[10px] md:tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-xl md:text-4xl font-semibold px-10">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#6366f1" />
        </h1>
        <nav className="pt-5">
          <Link href="#about" className="heroButton">
            About
          </Link>
          <Link href="#experience" className="heroButton">
            Experience
          </Link>
          <Link href="#skills" className="heroButton">
            Skills
          </Link>
          <Link href="#projects" className="heroButton">
            Projects
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
