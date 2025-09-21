<<<<<<< HEAD
'use client';
import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "../SpotlightCard";
=======
import React from 'react';
import { motion } from "framer-motion";
import SpotlightCard from '../SpotlightCard';
>>>>>>> b8704fa9059042500ecd7c1c6b89fb92e30215b6

const Info = () => {
  return (
    <motion.div
<<<<<<< HEAD
      className="w-full md:w-2/3 flex flex-wrap justify-center text-black text-center items-start gap-6 px-6 md:px-12 ml-[50em] -mt-[25em]"
=======
      className="flex flex-col md:flex-row w-full justify-center items-center text-black px-8 md:px-20 gap-8"
>>>>>>> b8704fa9059042500ecd7c1c6b89fb92e30215b6
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
<<<<<<< HEAD
      <SpotlightCard
        className="shadow-lg rounded-xl p-6 w-[300px] h-[200px] hover:scale-105 transition"
        spotlightColor="rgba(40, 234, 255, 0.4)"
      >
        <h4 className="text-lg font-semibold mb-2">Our Mission</h4>
        <p className="text-sm">
          To nurture and sustain academic excellence by imparting quality education.
        </p>
      </SpotlightCard>

      <SpotlightCard
        className="shadow-lg rounded-xl p-6 w-[300px] h-[200px] hover:scale-105 transition"
        spotlightColor="rgba(40, 234, 255, 0.4)"
      >
        <h4 className="text-lg font-semibold mb-2">Our Vision</h4>
        <p className="text-sm">
          To be a leading institution of higher education contributing to societal development.
        </p>
      </SpotlightCard>

      <SpotlightCard
        className="shadow-lg rounded-xl p-6 w-[300px] h-[200px] hover:scale-105 transition"
        spotlightColor="rgba(40, 234, 255, 0.4)"
      >
        <h4 className="text-lg font-semibold mb-2">Educational Policy</h4>
        <p className="text-sm">
          We are committed to fostering academic excellence, integrity and inclusivity.
        </p>
      </SpotlightCard>
=======
      <div className="w-full flex flex-wrap justify-center items-start gap-6 mt-20 relative">
        
        {/* Our Mission */}
        <SpotlightCard
          className="card-spotlight shadow-lg rounded-xl p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 w-[380px] h-[200px]"
          spotlightColor="rgba(40, 234, 255, 0.4)"
          data-color="cyan"
        >
          <h4 className="text-lg font-semibold mb-2">Our Mission</h4>
          <p className="text-sm">
            To nurture and sustain academic excellence by imparting quality education 
            to develop a community of intellectuals with professional skills and ethical values.
          </p>
        </SpotlightCard>

        {/* Our Vision */}
        <SpotlightCard
          className="card-spotlight shadow-lg rounded-xl p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 w-[380px] h-[200px]"
          spotlightColor="rgba(40, 234, 255, 0.4)"
          data-color="green"
        >
          <h4 className="text-lg font-semibold mb-2">Our Vision</h4>
          <p className="text-sm">
            To be a leading institution of higher education contributing to societal development 
            through holistic approach towards learning.
          </p>
        </SpotlightCard>

        {/* Educational Organizational Policy */}
        <SpotlightCard
          className="card-spotlight shadow-lg rounded-xl p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 w-[380px] h-[200px]"
          spotlightColor="rgba(40, 234, 255, 0.4)"
          data-color="blue"
        >
          <h4 className="text-lg font-semibold mb-2">Educational Organizational Policy</h4>
          <p className="text-sm">
            We are committed to fostering academic excellence, integrity, inclusivity, and 
            innovation in higher education through structured organizational practices.
          </p>
        </SpotlightCard>

      </div>
>>>>>>> b8704fa9059042500ecd7c1c6b89fb92e30215b6
    </motion.div>
  );
};

export default Info;
