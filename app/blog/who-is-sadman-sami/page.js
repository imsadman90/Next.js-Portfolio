import Link from "next/link";

export const metadata = {
  title: "Who Is Sadman Sami? Frontend Developer & MERN Stack Engineer",
  description:
    "Sadman Sami is a Frontend Developer and MERN Stack Engineer specializing in React, Next.js, Node.js, and MongoDB. Learn about his background, skills, and developer journey.",
  alternates: {
    canonical: "https://sadmansami.dev/blog/who-is-sadman-sami",
  },
  openGraph: {
    title: "Who Is Sadman Sami? Frontend Developer & MERN Stack Engineer",
    description:
      "Sadman Sami is a Frontend Developer and MERN Stack Engineer. Discover his journey, skills, and what drives him as a developer.",
    url: "https://sadmansami.dev/blog/who-is-sadman-sami",
    type: "article",
    publishedTime: "2026-02-09T00:00:00.000Z",
    authors: ["Sadman Sami"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Who Is Sadman Sami? Frontend Developer & MERN Stack Engineer",
  description:
    "Sadman Sami is a Frontend Developer and MERN Stack Engineer specializing in React, Next.js, Node.js, and MongoDB.",
  author: {
    "@type": "Person",
    name: "Sadman Sami",
    url: "https://sadmansami.dev",
  },
  publisher: {
    "@type": "Person",
    name: "Sadman Sami",
    url: "https://sadmansami.dev",
  },
  datePublished: "2026-02-09",
  dateModified: "2026-02-09",
  mainEntityOfPage: "https://sadmansami.dev/blog/who-is-sadman-sami",
  image: "https://i.ibb.co/pjSM4L2R/sami.png",
};

export default function WhoIsSadmanSami() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="min-h-screen bg-linear-to-br from-background-dark via-[#1a1635] to-background-dark text-white">
        <div className="max-w-3xl mx-auto px-6 py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>{" "}
            / <span className="text-slate-300">Who Is Sadman Sami</span>
          </nav>

          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              Who Is Sadman Sami? Frontend Developer &amp; MERN Stack Engineer
            </h1>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <time dateTime="2026-02-09">February 9, 2026</time>
              <span>·</span>
              <span>5 min read</span>
              <span>·</span>
              <span>By Sadman Sami</span>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed space-y-6">
            <p>
              <strong className="text-white">Sadman Sami</strong> is a
              passionate Frontend Developer and MERN Stack Engineer who
              specializes in building modern, responsive, and performant web
              applications. With expertise in React.js, Next.js, Node.js,
              Express.js, and MongoDB, Sadman Sami creates full-stack solutions
              that balance beautiful UI design with robust backend architecture.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Sadman Sami&apos;s Technical Skills
            </h2>
            <p>Sadman Sami&apos;s core technology stack includes:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">Frontend:</strong> React.js,
                Next.js, Tailwind CSS, Framer Motion, HTML5, CSS3
              </li>
              <li>
                <strong className="text-slate-200">Backend:</strong> Node.js,
                Express.js, REST APIs
              </li>
              <li>
                <strong className="text-slate-200">Database:</strong> MongoDB,
                Firebase
              </li>
              <li>
                <strong className="text-slate-200">Tools:</strong> Git, GitHub,
                VS Code, Figma, Vercel
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              What Drives Sadman Sami as a Developer
            </h2>
            <p>
              Sadman Sami believes in learning by building. Every project is an
              opportunity to solve real problems and push technical boundaries.
              From pixel-perfect landing pages to complex full-stack
              applications, Sadman Sami approaches each challenge with attention
              to detail and a commitment to clean, maintainable code.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Beyond Code: Sadman Sami the Creative
            </h2>
            <p>
              Outside of development, Sadman Sami is a vocalist and guitarist.
              This creative background brings a unique perspective to UI/UX
              design — understanding rhythm, flow, and how elements work
              together to create harmonious experiences, whether in music or on
              screen.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Connect with Sadman Sami
            </h2>
            <p>You can explore Sadman Sami&apos;s work and connect through:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">Portfolio:</strong>{" "}
                <a
                  href="https://sadmansami.dev"
                  className="text-primary hover:underline"
                >
                  sadmansami.dev
                </a>
              </li>
              <li>
                <strong className="text-slate-200">GitHub:</strong>{" "}
                <a
                  href="https://github.com/imsadman90"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/imsadman90
                </a>
              </li>
              <li>
                <strong className="text-slate-200">LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/sadman-sami-dev/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/sadman-sami-dev
                </a>
              </li>
              <li>
                <strong className="text-slate-200">Twitter/X:</strong>{" "}
                <a
                  href="https://twitter.com/iamsadmansami"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  @iamsadmansami
                </a>
              </li>
            </ul>
          </div>

          {/* Back to portfolio CTA */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/80 transition-colors"
            >
              &larr; Back to Sadman Sami&apos;s Portfolio
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
