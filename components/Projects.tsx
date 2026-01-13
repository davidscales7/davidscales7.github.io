"use client";


import React from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  summary: string;
  points: string[];
  tech: string[];
  url?: string;
};

const projects: Project[] = [
  {
    title: "Language Learning Application",
    summary:
      "A full-stack application designed to help users learn new languages through lessons, quizzes, and practice.",
    points: [
      "Implemented user authentication and progress tracking",
      "Built lesson, quiz, and flashcard flows for long-term learning",
      "Integrated frontend and backend to persist user data securely",
    ],
    tech: ["React", "Next.js", "TypeScript", "MongoDB"],
  },
  {
    title: "Topman Rugby Charity Website",
    url: "https://topmanrugby.com",
    summary:
      "A website built to promote a rugby charity and support community engagement.",
    points: [
      "Worked directly with the charity director to define requirements",
      "Built admin functionality for creating and managing content",
      "Handled backend integration for sign-ups and user management",
    ],
    tech: ["React", "PostgreSQL"],
  },
  {
    title: "Self-Hosted Home Server",
    summary:
      "A personal Linux server used to host media and manage services locally.",
    points: [
      "Set up and maintained a Linux-based home server",
      "Hosted media services such as Jellyfin for local streaming",
      "Managed storage, permissions, and system configuration manually",
      "Gained hands-on experience with system administration and troubleshooting",
    ],
    tech: ["Linux", "Self-hosting", "System administration", "Networking"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <motion.div
        className="max-w-5xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-semibold mb-6">Selected projects</h2>

        <p className="text-neutral-400 mb-16 max-w-xl">
          A selection of projects that reflect how I approach problem-solving,
          system design, and building reliable software.
        </p>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.05,
              }}
            >
              <h3 className="text-xl font-medium mb-3">{project.title}</h3>

              <p className="text-neutral-400 mb-6 max-w-xl">
                {project.summary}
              </p>

              <ul className="space-y-2 mb-6 text-neutral-300">
                {project.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 text-sm text-neutral-400 mb-4">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-neutral-200 hover:text-cyan-400 underline underline-offset-4"
                >
                  Visit live site →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
