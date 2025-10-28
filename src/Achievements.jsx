import React from "react";
import { Trophy, Award, Code } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    title: "TechXplosion Volunteer",
    description:
      "Recognized for helping classmates with math assignments and teamwork.",
    certificateLink: "/certificates/techxplosion.pdf",
  },
  {
    icon: <Award className="w-8 h-8 text-blue-500" />,
    title: "Pradyot Participant",
    description:
      "Participated in Pradyot event, showcasing creativity and learning.",
    certificateLink: "/certificates/pradyot.pdf",
  },
  {
    icon: <Code className="w-8 h-8 text-green-500" />,
    title: "2 Fast 2 Hack – Hackathon",
    description:
      "Participated as Team ByteStorm in 2 Fast 2 Hack hackathon at SIT Pune.",
    certificateLink: "/certificates/2fast2hack.pdf",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">
          🏆 My Achievements
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {item.description}
              </p>
              <a
                href={item.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
