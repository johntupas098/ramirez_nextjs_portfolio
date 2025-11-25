import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center bg-gradient-to-br from-[#4f46e5] via-[#7c3aed] to-[#ec4899] px-4"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center text-white">
       <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-white/40 bg-white/10 shadow-lg overflow-hidden">
  <Image
    src="/profilepic.JPG"
    width={128}
    height={128}
    alt="profile"
    className="object-cover"
  />
</div>

        <p className="text-sm uppercase tracking-[0.3em] text-white/80">
          Hi, I&apos;m
        </p>
        <h1 className="mt-3 text-4xl font-bold md:text-6xl">
          John Wayne T. Ramirez
        </h1>
        <p className="mt-3 text-lg md:text-xl text-white/90">
          BS Information Technology Student &amp; Database Developer
        </p>

        <p className="mt-5 max-w-2xl text-sm md:text-base text-white/90">
          A dedicated IT student with hands-on experience in database
          management, SQL, and programming using Python, C++, Dart/Flutter,
          HTML, CSS, and JavaScript. Eager to apply technical skills in a
          professional environment.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-2 text-sm font-medium text-purple-700 shadow hover:bg-slate-100"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white px-6 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-10 flex items-center gap-6 text-xl">
          <a
            href="https://github.com/johntupas098"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          >
           <Image src="/icons/git.svg" width={24} height={24} alt="Github" />
          </a>
          <a
            href="www.linkedin.com/in/john-wayne-ramirez-05984a392"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          >
           <Image src="/icons/linked.svg" width={24} height={24} alt="LinkedIn" />
          </a>
          <a
            href="mailto:johnwayne.ramirez-23@cpu.edu.ph"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <Image src="/icons/mail.svg" width={24} height={24} alt="Email" />
          </a>
        </div>

        <a href="#about" className="mt-10 text-white/80 text-2xl">
          ↓
        </a>
      </div>
    </section>
  );
}
