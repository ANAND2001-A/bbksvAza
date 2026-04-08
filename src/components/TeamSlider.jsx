import React, { useState } from "react";
import { motion } from "framer-motion";

const teamData = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Marketing Head",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Rahul Singh",
    role: "Operations Manager",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "HR Manager",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "Vikas Yadav",
    role: "Sales Head",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const TeamSlider = () => {
  const [active, setActive] = useState(teamData[0]);

  return (
    <section className="bg-[#272861] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Meet Our <span className="text-green-400">Team</span>
        </h2>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:grid grid-cols-2 gap-16 items-center">

          {/* LEFT - FEATURED MEMBER */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
          >
            <img
              src={active.image}
              alt={active.name}
              className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-green-400"
            />

            <h3 className="text-2xl font-bold text-center mt-6">
              {active.name}
            </h3>

            <p className="text-green-400 text-center mb-4">
              {active.role}
            </p>

            <p className="text-gray-300 text-center text-sm">
              Passionate professional dedicated to driving growth and
              delivering impactful results for the organization.
            </p>
          </motion.div>

          {/* RIGHT - LIST */}
          <div className="space-y-4">
            {teamData.map((member) => (
              <div
                key={member.id}
                onClick={() => setActive(member)}
                className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition
                  ${
                    active.id === member.id
                      ? "bg-green-500/20 border border-green-400"
                      : "bg-white/5 hover:bg-white/10 border border-white/10"
                  }
                `}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden space-y-6">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-green-400"
              />

              <h3 className="mt-4 text-lg font-semibold">
                {member.name}
              </h3>

              <p className="text-green-400 text-sm">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSlider;