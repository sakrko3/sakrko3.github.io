import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const sectionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.5 },
  };

  const imageVariants = {
    initial: { x: -200, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 1.2 },
    viewport: { once: true },
  };

  return (
    <motion.section
      initial={sectionVariants.initial}
      animate={sectionVariants.animate}
      transition={sectionVariants.transition}
      id="about"
      className="min-h-screen px-4 lg:max-w-7xl mx-auto text-center relative lg:text-left snap-center"
    >
      <SectionHeader name="About" />
      <div className="min-h-screen flex items-center justify-center gap-6 flex-col lg:flex-row">
        <motion.div
          initial={imageVariants.initial}
          whileInView={imageVariants.whileInView}
          transition={imageVariants.transition}
          viewport={imageVariants.viewport}
          className="basis-1/4 flex items-center justify-center"
        >
          <Image
            src="/Profile pic.jpeg"
            alt="Profile pic"
            width={200}
            height={200}
            className="rounded-lg h-52 w-52 lg:h-80 lg:w-80 object-cover"
            priority
          />
        </motion.div>
        <div className="basis-3/4 flex flex-col space-y-4 justify-content">
          <h4 className="text-xl lg:text-4xl font-semibold">
            Here is the{" "}
            <span className="underline decoration-indigo-500/50">little</span>{" "}
            background
          </h4>{" "}
          <p className="text-sm md:text-base">
            I&apos;m an aspiring developer with expertise in the design,
            developing, testing, and maintenance of multiple personal and
            professional projects. Equipped with a diverse and promising
            cutting-edge skill-set spanning numerous domains and technologies.
            Able to effectively self-manage during independent projects, as well
            as collaborate as part of a productive team. Always try to seek new
            challenges and love to explore new technologies.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
