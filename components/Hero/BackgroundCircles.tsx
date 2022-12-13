import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex items-center justify-center "
    >
      <div className="border rounded-full border-indigo-300 h-[200px] w-[200px] absolute animate-ping mt-52" />
      <div className="border rounded-full border-slate-700 h-[320px] w-[320px] absolute mt-52" />
      <div className="border rounded-full border-indigo-300 h-[500px] w-[500px] md:h-[650px] md:w-[650px] absolute animate-pulse mt-52" />
      <div className="border rounded-full border-slate-700 h-[600px] w-[600px] md:h-[750px] md:w-[750px] absolute mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
