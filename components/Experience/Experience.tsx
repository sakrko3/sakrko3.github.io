import Image from "next/image";
import SectionHeader from "../SectionHeader";
import data from "./Experience.Data";
import { motion } from "framer-motion";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="experience"
      className="min-h-screen px-4 max-w-7xl mx-auto relative flex justify-center items-center snap-center"
    >
      <SectionHeader name="Experience" />
      <div className="flex space-x-5 overflow-x-scroll w-full rounded-lg py-4  scrollbar-thin scrollbar-track-slate-700/80  scrollbar-thumb-indigo-500/60 snap-x snap-mandatory">
        {data.map((item, i) => (
          <article
            key={i}
            className="flex-shrink-0 w-full md:w-[500px] rounded-lg bg-slate-800 cursor-pointer hover:opacity-70 snap-center"
          >
            <div className="flex flex-col justify-center items-center p-4 md:p-8 gap-2">
              <motion.div
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={item.url}
                  alt={item.alt}
                  width={140}
                  height={140}
                  className="rounded-full object-cover h-20 md:h-32 w-20 md:w-32"
                  priority
                />
              </motion.div>
              <div>
                <h4 className="text-xl md:text-3xl font-light">
                  {item.designation}
                </h4>
                <p className="font-bold mt-1 text-lg md:text-2xl ">
                  {item.company}
                </p>
                <div className="flex space-x-2 my-2">
                  {item.skills.map((skillItem, j) => (
                    <Image
                      src={skillItem.url}
                      alt={skillItem.alt}
                      width={140}
                      height={140}
                      className="rounded-full object-cover h-6 w-6"
                      priority
                      key={j}
                    />
                  ))}
                </div>
                <p className="uppercase py-5 text-slate-400 text-sm md:text-base">
                  Started {item.from} - {item.to}
                </p>
                <ul className="list-disc space-y-2 ml-5 text-sm md:text-base">
                  {item.summary.map((summaryItem, k) => (
                    <li key={k}>{summaryItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
