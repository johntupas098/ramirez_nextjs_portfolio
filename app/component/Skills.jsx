const skills = [
  {
    title: "Python Programming",
    desc: "Python development, scripting, and automation",
    color: "bg-indigo-50 border-indigo-200 text-indigo-400",
  },
  {
    title: "Database Management",
    desc: "SQL, database design, data handling and optimization",
    color: "bg-purple-50 border-purple-200 text-purple-400",
  },
  {
    title: "UI/UX Design",
    desc: "Figma, user interface design, prototyping",
    color: "bg-pink-50 border-pink-200  text-pink-400",
  },
  {
    title: "C++ Programming",
    desc: "Object-oriented programming, algorithms",
    color: "bg-emerald-50 border-emerald-200 text-emerald-400",
  },
  {
    title: "Flutter Development",
    desc: "Dart/Flutter, mobile app development",
    color: "bg-orange-50 border-orange-200 text-orange-400",
  },
  {
    title: "Web Technologies",
    desc: "HTML, CSS, JavaScript, responsive design",
    color: "bg-yellow-50 border-yellow-200 text-yellow-400",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 px-4 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-semibold text-purple-400">Skills &amp; Expertise</h2>
        <p className="mt-3 text-sm text-slate-600">
          A diverse set of skills to bring your ideas to life
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className={`rounded-2xl border px-6 py-5 text-left shadow-sm ${skill.color}`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow">
                <span className="text-lg">💻</span>
              </div>
              <h3 className="text-sm font-semibold">{skill.title}</h3>
              <p className="mt-2 text-xs text-slate-600">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
