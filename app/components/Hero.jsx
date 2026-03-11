import Image from "next/image";

const Hero = () => {
  const techStack = [
    { icon: "code_blocks", hoverColor: "hover:text-green-400" },
    { icon: "dns", hoverColor: "hover:text-blue-400" },
    { icon: "javascript", hoverColor: "hover:text-yellow-400" },
    { icon: "css", hoverColor: "hover:text-blue-400" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/imsadman90",
      icon: "code",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sadman-sami-dev/",
      icon: "work",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/iamsadmansami",
      icon: "alternate_email",
    },
  ];

  return (
    <main
      id="home"
      className="flex-grow flex items-center justify-center py-12 lg:py-20"
    >
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-20">
          {/* Left Content: Text & CTAs */}
          <div className="flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left animate-[fadeInLeft_0.7s_ease-out_0.1s_both]">
            <div className="space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10/10 border border-primary/20 w-fit mx-auto lg:mx-0 animate-[fadeInUp_0.5s_ease-out_0.2s_both]">
                <span className="text-md font-light text-slate-300">
                  MERN Stack Developer | Frontend Developer
                </span>
              </div>

              {/* Name */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white/90 leading-[0.9] text-glow animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
                SADMAN <br />
                <span className="text-sky-500">
                  SAMI
                </span>
              </h1>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-light text-slate-300 ">
                Frontend Developer & MERN Stack Engineer
              </h2>

              {/* Description */}
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0 font-light">
                Hi, I&apos;m{" "}
                <strong className="text-white/70 font-light">
                  Sadman Sami
                </strong>{" "}
                 , a frontend-first developer crafting responsive, accessible,
                and performant web experiences. I specialize in React, Next.js,
                and the MERN stack, bridging product goals with polished UI
                engineering.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 ">
              <a
                href="#work"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-light text-white/70 bg-white/10 hover:scale-[1.09] active:scale-[0.98] transition-all duration-300"
              >
                View Projects
              </a>

              <a
                href="https://drive.google.com/file/d/1AsKUvO0driyxsX8fWhJnR4d-njFHM8YU/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-transparent px-8 py-4 text-base font-light text-white/70 hover:scale-[1.09] active:scale-[0.98] transition-all duration-300"
              >
                Download Resume
              </a>
            </div>

            {/* Tech Stack */}
            <div className="flex gap-6 items-center justify-center lg:justify-start pt-8 border-t border-white/5 mt-4 animate-[fadeIn_0.5s_ease-out_0.7s_both]">
              <span className="text-md text-slate-500 uppercase tracking-widest font-light">
                Tech Stack
              </span>
              <div className="flex gap-4">
                {techStack.map((tech) => (
                  <span
                    key={tech.icon}
                    className={`material-symbols-outlined text-2xl text-slate-400 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100 ${tech.hoverColor}`}
                  >
                    {tech.icon}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content: Portrait */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-90 h-90 sm:w-96 sm:h-96 rounded-3xl overflow-hidden ring-4 ring-white/10 ">
              <Image
                alt="Professional headshot of Sadman Sami"
                className="w-full h-full object-cover"
                src="https://i.ibb.co/XZLRCfpr/sami.jpg"
                width={384}
                height={384}
                priority
                sizes="(max-width: 768px) 320px, 384px"
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-10 animate-[fadeInUp_0.5s_ease-out_0.7s_both]">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-100 hover:border-primary/60 hover:bg-white/10/10 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[18px]">
                {social.icon}
              </span>
              <span className="text-md font-light">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
