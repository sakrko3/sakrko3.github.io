import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import SectionHeader from "../SectionHeader";
import data from "./Projects.Data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      id="projects"
      className="min-h-screen px-4 relative snap-center"
    >
      <SectionHeader name="Projects" />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full flex overflow-x-scroll rounded-lg z-20 scrollbar-thin scrollbar-track-slate-700/80  scrollbar-thumb-indigo-500/60 snap-x snap-mandatory">
          {data.map((item, i) => (
            <article
              key={item.name}
              className="flex-shrink-0 w-full flex justify-center items-center h-screen flex-col space-y-5 snap-center"
            >
              <Image
                src={item.url}
                alt={item.name}
                width={500}
                height={400}
                className="rounded-lg h-44 w-auto md:h-80  object-cover"
                priority
              />
              <div className="space-y-5 md:space-y-10 px-4 max-w-6xl">
                <h4 className="text-xl md:text-4xl font-semibold text-center">
                  <span className="underline decoration-indigo-500/50">
                    Case Study {i + 1} of {data.length}:
                  </span>{" "}
                  {item.name}
                </h4>

                <p className="text-center text-base md:text-lg">
                  {item.description}
                </p>
                <div className="flex justify-center items-center gap-4">
                  {item.repository ? (
                    <SocialIcon
                      url={item.repository}
                      fgColor="#94a3b8"
                      bgColor="transparent"
                    />
                  ) : (
                    ""
                  )}
                  {item.livelink ? (
                    <SocialIcon
                      url={item.livelink}
                      fgColor="#94a3b8"
                      bgColor="transparent"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="w-full absolute top-[50%] -translate-y-[50%] bg-indigo-500/10 left-0 h-[500px] -skew-y-12" />
    </motion.section>
  );
};

export default Projects;
