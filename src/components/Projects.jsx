import React from 'react'
import { SpicyDiceGitHubURL, SpicyDiceLiveURL } from '../constants';

const projects = [
  {
    id: 1,
    title: "Team Pulse - Task Tracker",
    tags: ["React", ".NET", "SQL Server"],
    desc: "Minimal JIRA-like tracker with lightweight UI and collaboration features.",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Spicy Dice (AI features)",
    tags: ["React JS","AWS Lambda", "Python", "OpenAI"],
    desc: "Party game with AI-backed suggestions and mood decks.",
    github: SpicyDiceGitHubURL,
    demo: SpicyDiceLiveURL,
  }
  
];

const Projects = () => {
  return (
    <div>
      {/* Projects - compact */}
      <section id="projects" className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold">Projects</h3>
          <a href="/projects" className="text-indigo-600 text-sm sm:text-base">View all</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((p) => (
            <article key={p.id} className="rounded-2xl bg-white p-4 sm:p-6 shadow hover:shadow-md transition">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <h4 className="font-semibold text-base sm:text-lg">{p.title}</h4>
                  <p className="mt-1 sm:mt-2 text-slate-500 text-sm sm:text-base">{p.desc}</p>
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 sm:px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col items-end gap-2 mt-2 sm:mt-0">
                  <a href={p.github} target='_blank' className="text-xs sm:text-sm text-slate-500 hover:text-slate-800">GitHub</a>
                  <a href={p.demo} target='_blank' className="text-xs sm:text-sm text-indigo-600">Live</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects
