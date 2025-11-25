import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold text-purple-400" >About Me</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr,1fr]">
          <div>
            <h3 className="text-xl font-semibold text-purple-400">
              Passionate About Technology &amp; Innovation
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              I&apos;m currently pursuing a Bachelor of Science in Information
              Technology at Central Philippine University in Iloilo City. My
              journey in tech has been driven by curiosity and a passion for
              solving real-world problems through technology.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              With hands-on experience in database management, SQL, and
              programming using Python, C++, Dart/Flutter, HTML, CSS, and
              JavaScript, I&apos;ve developed a strong foundation in both
              frontend and backend development. I&apos;m particularly
              interested in database design and UI/UX design using Figma.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              In 2025, I worked as a Database Designer and Developer at Kaye
              Salazar Store, where I developed and maintained an inventory
              tracking database, ensuring accurate data handling and processing.
              This experience strengthened my technical skills and professional
              mindset.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-indigo-50 px-4 py-1 text-xs font-medium text-indigo-700">
                Quick Learner
              </span>
              <span className="rounded-full bg-pink-50 px-4 py-1 text-xs font-medium text-pink-700">
                Problem Solver
              </span>
              <span className="rounded-full bg-purple-50 px-4 py-1 text-xs font-medium text-purple-700">
                Detail-Oriented
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative h-72 w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/work.jpg"
                alt="Workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
