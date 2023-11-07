import Image from "next/image";
import SectionHeader from "../SectionHeader";
import data from "./Skills.Data";
import { motion } from "framer-motion";


const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      id="skills"
      className="min-h-screen px-4 mx-auto relative flex flex-col justify-center items-center text-center gap-4 max-w-xl snap-center"
    >
      <SectionHeader name="Skills" />
      <h4 className="text-xl lg:text-4xl font-semibold mb-5">
        Hover over a{" "}
        <span className="underline decoration-indigo-500/50">skill</span> for
        current profieciency
      </h4>
      <div className="flex flex-wrap gap-4 justify-center items-center ">
        {data.map((item, i) => (
          <div key={item.alt} className="group relative flex cursor-pointer">
            <Image
              src={item.url}
              width={200}
              height={200}
              className="rounded-full h-16 w-16 md:h-24 md:w-24 object-cover filter group-hover:grayscale transition duration-300 ease-in-out border border-slate-400 p-2"
              priority
              alt={item.alt}
            />
            <div className="rounded-full absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-slate-100 h-16 w-16 md:h-24 md:w-24">
              <div className="flex items-center justify-center h-full">
                <p className=" text-xl md:text-3xl font-bold text-slate-900 opacity-100">
                  {item.profieciency}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
