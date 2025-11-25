import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <h3 className="text-lg font-semibold">Portfolio</h3>
          <p className="mt-3 text-sm text-slate-400">
            Building digital experiences that matter. Let&apos;s create
            something amazing together.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-1 text-sm text-slate-400">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Connect</h4>
          <div className="mt-3 flex gap-3">
            <a
              href="https://github.com/johntupas098"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-sm hover:bg-slate-700"
            >
              <Image src="/icons/git.svg" width={24} height={24} alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-wayne-ramirez-05984a392/"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-sm hover:bg-slate-700"
            >
              in
            </a>
            <a
              href="mailto:johnwayne.ramirez-23@cpu.edu.ph"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-sm hover:bg-slate-700"
            >
              ✉️
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        Made with by John Wayne T.
        Ramirez © 2025
      </div>
    </footer>
  );
}
