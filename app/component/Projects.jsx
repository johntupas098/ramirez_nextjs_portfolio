const projects = [
  {
    title: "Inventory Tracking Database",
    desc: "Developed and maintained a comprehensive inventory tracking database for Kaye Salazar Store. Ensured accurate data handling and processing, implementing efficient database design patterns.",
    tags: ["SQL", "Database Design", "Data Management"],
  },
  {
    title: "Flutter Mobile App",
    desc: "Cross-platform mobile application built with Flutter and Dart, featuring responsive UI and seamless user experience across iOS and Android devices.",
    tags: ["Dart", "Flutter", "Mobile Dev"],
  },
  {
    title: "UI/UX Design Projects",
    desc: "Collection of user interface and user experience designs created in Figma, focusing on intuitive navigation and modern aesthetics.",
    tags: ["Figma", "UI/UX", "Design"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold">Featured Projects</h2>
        <p className="mt-3 text-center text-sm text-slate-600">
          Here are some of my recent works that showcase my skills and passion
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {/* fake image area */}
              <div className="h-40 w-full bg-slate-900/90" />

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-sm font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">
                  {project.desc}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-[11px] text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-4 text-xs text-indigo-600">
                  <a href="#" className="flex items-center gap-1">
                    <span>🔗</span> <span>Live Demo</span>
                  </a>
                  <a href="#" className="flex items-center gap-1 text-slate-600">
                    <span>💻</span> <span>Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
