'use client';
<<<<<<< HEAD
import React, { useEffect, useRef } from "react";

const events = [
  { id: 1, title: "Tech Fest 2025", date: "Oct 21, 2025" },
  { id: 2, title: "Cultural Night", date: "Nov 10, 2025" },
  { id: 3, title: "Entrepreneurship Summit", date: "Dec 05, 2025" },
  { id: 4, title: "Hackathon 2025", date: "Jan 15, 2026" },
  { id: 5, title: "Sports Week", date: "Feb 02, 2026" },
];

const UpcomingEvents = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef({ y: 0 });

  useEffect(() => {
    const container = containerRef.current;

    // Duplicate the content to create seamless loop
    const clone = container.innerHTML;
    container.innerHTML += clone;

    let animationFrame;

    const scroll = () => {
      scrollRef.current.y += 0.3; // speed
      if (scrollRef.current.y >= container.scrollHeight / 2) {
        scrollRef.current.y = 0;
      }
      container.scrollTop = scrollRef.current.y;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    // Pause auto-scroll on hover to allow manual scrolling
    container.addEventListener("mouseenter", () => cancelAnimationFrame(animationFrame));
    container.addEventListener("mouseleave", () => {
      animationFrame = requestAnimationFrame(scroll);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full md:w-1/3 h-[420px] bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden -ml-[50em] mt-10">
      <h3 className="text-center text-xl font-bold text-gray-800 py-4 border-b">
        Upcoming Events
      </h3>
      <div
        ref={containerRef}
        className="flex flex-col gap-4 overflow-y-auto h-[360px] px-6 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400"
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="border-b border-gray-100 pb-3 hover:bg-gray-50 transition-colors rounded-md px-2"
          >
            <p className="font-medium text-gray-800">{event.title}</p>
            <span className="text-xs text-gray-500">{event.date}</span>
          </div>
        ))}
      </div>
    </div>
=======
import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Tech Fest 2025",
    date: "Oct 21, 2025",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=800&q=80",
    desc: "A grand celebration of technology, innovation, and creativity with competitions and keynote sessions.",
  },
  {
    id: 2,
    title: "Cultural Night",
    date: "Nov 10, 2025",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    desc: "An evening of music, dance, and performances that celebrate diversity and talent across campus.",
  },
  {
    id: 3,
    title: "Entrepreneurship Summit",
    date: "Dec 05, 2025",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80",
    desc: "Join industry leaders and startup founders for an insightful day of talks, panels, and networking.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 80, damping: 15 },
  }),
};

const UpcomingEvents = () => {
  return (
    <section className="relative w-full py-20 px-6 ">
      {/* Heading */}
      <h3 className="text-center text-black text-4xl mb-10">
        Upcoming Events
      </h3>

      {/* Events Grid */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(255,107,53,0.3)] transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
          >
            {/* Event Image */}
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Date Badge */}
              <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {event.date}
              </span>
            </div>

            {/* Event Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
>>>>>>> b8704fa9059042500ecd7c1c6b89fb92e30215b6
  );
};

export default UpcomingEvents;
