import Image from "next/image";
import SectionHeader from "../SectionHeader";
import data from "./Experience.Data";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ExperienceItem {
  url: string;
  alt: string;
  designation: string;
  company: string;
  skills: { url: string; alt: string }[];
  from: string;
  to: string;
  summary: string[];
}

interface ExperienceItemProps {
  item: ExperienceItem;
}

interface ExperienceSkillsProps {
  skills: { url: string; alt: string }[];
}

interface ExperienceSummaryProps {
  summary: string[];
}

const ExperienceImageComponent: React.FC<ExperienceItemProps> = ({ item }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
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
  );
};


const ExperienceSkillsComponent: React.FC<ExperienceSkillsProps> = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-2 my-2 justify-center md:justify-start">
      {skills.map((skillItem) => (
        <Image
          src={skillItem.url}
          alt={skillItem.alt}
          width={140}
          height={140}
          className="rounded-full object-cover h-6 w-6"
          priority
          key={skillItem.alt}
        />
      ))}
    </div>
  );
};


const ExperienceSummaryComponent: React.FC<ExperienceSummaryProps> = ({ summary }) => {
  return (
    <ul className="space-y-2 text-sm md:text-base">
      {summary.map((summaryItem) => (
        <li key={summaryItem}>{summaryItem}</li>
      ))}
    </ul>
  );
};

const ExperienceItemWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <article className="flex-shrink-0 w-full md:w-[500px] rounded-lg bg-slate-800 cursor-pointer hover:opacity-70 snap-center text-center md:text-left">
      <div className="flex flex-col justify-center items-stretch p-4 md:p-8 gap-2">
        {children}
      </div>
    </article>
  );
};


const ExperienceItemComponent: React.FC<ExperienceItemProps> = ({ item }) => {
  return (
    <ExperienceItemWrapper>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="basis-1/3">
          <ExperienceImageComponent item={item} />
        </div>
        <div className="basis-2/3">
          <h4 className="text-xl md:text-3xl font-light">{item.designation}</h4>
          <p className="font-bold mt-1 text-lg md:text-2xl ">{item.company}</p>
        </div>
      </div>
      <div>
        <ExperienceSkillsComponent skills={item.skills} />
        <p className="uppercase py-5 text-slate-400 text-sm md:text-base">
          Started {item.from} - {item.to}
        </p>
        <ExperienceSummaryComponent summary={item.summary} />
      </div>
    </ExperienceItemWrapper>
  );
};


const Experience = () => {
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
        {data.map((item) => (
          <ExperienceItemComponent key={item.alt} item={item} />
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
