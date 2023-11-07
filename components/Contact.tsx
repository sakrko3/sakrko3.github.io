import React from "react";
import SectionHeader from "./SectionHeader";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      id="contact"
      className="min-h-screen px-4 mx-auto relative flex flex-col justify-center items-center text-center snap-center"
    >
      <SectionHeader name="Contact" />
      <h4 className="text-xl lg:text-4xl font-semibold mb-5">
        I have got just what you need.{" "}
        <span className="underline decoration-indigo-500/50">Lets Talk.</span>
      </h4>
      <div className="space-y-5">
        <div className="flex items-center space-x-2 justify-center">
          <EnvelopeIcon className="text-indigo-500 h-7 w-7 animate-pulse" />
          <p>skkonda39@gmail.com</p>
        </div>
        <div className="flex items-center space-x-2 justify-center">
          <MapPinIcon className="text-indigo-500 h-7 w-7 animate-pulse" />
          <p>Hyderabad, India</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
