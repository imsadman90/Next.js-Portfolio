import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "Insights, tutorials, and articles by Sadman Sami on frontend development, React, Next.js, MERN stack, and modern web technologies.",
  alternates: {
    canonical: "https://sadmansami.dev/blog",
  },
  openGraph: {
    title: "Blog | Sadman Sami",
    description:
      "Read articles and tutorials by Sadman Sami about frontend development, React, Next.js, and the MERN stack.",
    url: "https://sadmansami.dev/blog",
    type: "website",
  },
};

const posts = [
  {
    slug: "who-is-sadman-sami",
    title: "Who Is Sadman Sami? Frontend Developer & MERN Stack Engineer",
    excerpt:
      "Learn about Sadman Sami — a frontend developer specializing in React, Next.js, and the MERN stack. Discover his journey, skills, and projects.",
    date: "2026-02-09",
    readTime: "5 min read",
  },
  {
    slug: "sadman-sami-portfolio",
    title: "Sadman Sami Portfolio — Projects, Skills & Experience",
    excerpt:
      "Explore Sadman Sami's developer portfolio featuring React projects, MERN stack applications, and modern web experiences.",
    date: "2026-02-09",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background-dark via-[#1a1635] to-background-dark text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Blog by Sadman Sami
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Articles on frontend development, React, Next.js, MERN stack, and
            lessons learned building real-world projects.
          </p>
        </header>

        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                <time dateTime={post.date}>{post.date}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-slate-400 leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
