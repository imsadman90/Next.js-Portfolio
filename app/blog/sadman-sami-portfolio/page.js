import Link from "next/link";

export const metadata = {
  title: "Sadman Sami Portfolio — Projects, Skills & Experience",
  description:
    "Explore Sadman Sami's developer portfolio featuring React.js, Next.js, and MERN stack projects. See the skills, experience, and technologies behind each build.",
  alternates: {
    canonical: "https://sadmansami.dev/blog/sadman-sami-portfolio",
  },
  openGraph: {
    title: "Sadman Sami Portfolio — Projects, Skills & Experience",
    description:
      "A behind-the-scenes look at Sadman Sami's developer portfolio, the technologies used, and the projects featured.",
    url: "https://sadmansami.dev/blog/sadman-sami-portfolio",
    type: "article",
    publishedTime: "2026-02-09T00:00:00.000Z",
    authors: ["Sadman Sami"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sadman Sami Portfolio — Projects, Skills & Experience",
  description:
    "Explore Sadman Sami's developer portfolio projects, skills, and MERN stack experience.",
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
  mainEntityOfPage: "https://sadmansami.dev/blog/sadman-sami-portfolio",
  image: "/images/sami.webp",
};

export default function SadmanSamiPortfolio() {
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
            / <span className="text-slate-300">Sadman Sami Portfolio</span>
          </nav>

          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              Sadman Sami Portfolio — Projects, Skills &amp; Experience
            </h1>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <time dateTime="2026-02-09">February 9, 2026</time>
              <span>·</span>
              <span>4 min read</span>
              <span>·</span>
              <span>By Sadman Sami</span>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed space-y-6">
            <p>
              <strong className="text-white">
                Sadman Sami&apos;s portfolio
              </strong>{" "}
              is a showcase of modern frontend and full-stack development work.
              Built with Next.js, Tailwind CSS, and Framer Motion, the portfolio
              itself demonstrates the same skills and attention to detail that
              Sadman Sami brings to every project.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Technology Behind Sadman Sami&apos;s Portfolio
            </h2>
            <p>
              Sadman Sami chose a modern tech stack to ensure performance,
              accessibility, and SEO:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">Next.js 16</strong> —
                Server-side rendering, App Router, and optimized performance
              </li>
              <li>
                <strong className="text-slate-200">Tailwind CSS 4</strong> —
                Utility-first styling for rapid, responsive design
              </li>
              <li>
                <strong className="text-slate-200">Framer Motion</strong> —
                Smooth, performant animations and page transitions
              </li>
              <li>
                <strong className="text-slate-200">Vercel</strong> — Edge
                deployment with global CDN for fast load times
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Featured Projects by Sadman Sami
            </h2>
            <p>
              Sadman Sami&apos;s portfolio showcases a range of projects that
              demonstrate proficiency in the MERN stack ecosystem:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>
                Full-stack MERN applications with authentication and CRUD
                operations
              </li>
              <li>
                Responsive React SPAs with modern state management patterns
              </li>
              <li>
                REST API backends built with Node.js, Express, and MongoDB
              </li>
              <li>
                UI/UX-focused projects featuring Tailwind CSS and animation
                libraries
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Sadman Sami&apos;s Development Philosophy
            </h2>
            <p>
              Every project in Sadman Sami&apos;s portfolio reflects core
              principles: clean code, responsive design, accessibility, and
              performance optimization. Sadman Sami does not just build features
              — he crafts experiences that are polished, tested, and
              production-ready.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Explore the Full Portfolio
            </h2>
            <p>
              Visit{" "}
              <a
                href="https://sadmansami.dev"
                className="text-primary hover:underline"
              >
                sadmansami.dev
              </a>{" "}
              to see all of Sadman Sami&apos;s projects, read about the
              technologies behind each build, and get in touch for collaboration
              opportunities.
            </p>
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
