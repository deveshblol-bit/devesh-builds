const projects = [
  {
    name: "workr",
    subtitle: "A thing Devesh is building.",
    href: "#",
    status: "Building",
  },
  {
    name: "sleepr",
    subtitle: "Another thing Devesh is building.",
    href: "#",
    status: "Building",
  },
  {
    name: "willigetburned.fun",
    subtitle: "A live project on the internet.",
    href: "https://www.willigetburned.fun/",
    status: "Live",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0D12] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10 sm:px-8 lg:px-10">
        <header className="mb-12">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            Devesh Builds
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">
            Internet things Devesh is building.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            A simple living page for products, experiments, and weird little corners of the internet. I can keep updating this whenever you add something new.
          </p>
        </header>

        <section className="grid gap-4">
          {projects.map((project) => {
            const isLive = project.href !== "#";
            return (
              <a
                key={project.name}
                href={project.href}
                target={isLive ? "_blank" : undefined}
                rel={isLive ? "noopener noreferrer" : undefined}
                className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                      {project.name}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/65 sm:text-base">
                      {project.subtitle}
                    </p>
                  </div>
                  <div
                    className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${
                      project.status === "Live"
                        ? "bg-[#12351C] text-[#86EFAC]"
                        : "bg-white/8 text-white/60"
                    }`}
                  >
                    {project.status}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/55">
                  <span>{isLive ? project.href.replace(/^https?:\/\//, "") : "Link coming soon"}</span>
                  <span className="font-semibold text-white/80 transition group-hover:translate-x-1">
                    {isLive ? "Open →" : "Coming soon"}
                  </span>
                </div>
              </a>
            );
          })}
        </section>
      </div>
    </main>
  );
}
