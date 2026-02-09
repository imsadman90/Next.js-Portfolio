import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = "https://sadmansami.dev";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sadman Sami | Frontend Developer & MERN Stack Engineer",
    template: "%s | Sadman Sami",
  },
  description:
    "Sadman Sami is a Frontend Developer and MERN Stack Engineer specializing in React, Next.js, Node.js, and MongoDB. Explore Sadman Sami's portfolio, projects, and experience.",
  keywords: [
    "Sadman Sami",
    "Sadman Sami portfolio",
    "Sadman Sami developer",
    "Sadman Sami frontend",
    "Sadman Sami MERN stack",
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Bangladesh",
    "JavaScript Developer",
    "Tailwind CSS",
    "Node.js Developer",
  ],
  authors: [{ name: "Sadman Sami", url: SITE_URL }],
  creator: "Sadman Sami",
  publisher: "Sadman Sami",
  alternates: {
    canonical: SITE_URL,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Sadman Sami | Frontend Developer & MERN Stack Engineer",
    description:
      "Sadman Sami is a Frontend Developer and MERN Stack Engineer. Explore projects, skills, and experience in React, Next.js, and full-stack development.",
    siteName: "Sadman Sami — Developer Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sadman Sami - Frontend Developer & MERN Stack Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@iamsadmansami",
    creator: "@iamsadmansami",
    title: "Sadman Sami | Frontend Developer & MERN Stack Engineer",
    description:
      "Sadman Sami is a Frontend Developer & MERN Stack Engineer specializing in React, Next.js, and modern web technologies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Replace with your actual Google Search Console verification code
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },
  other: {
    "google-site-verification": "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },
};

// JSON-LD Structured Data for Person + WebSite
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Sadman Sami",
  givenName: "Sadman",
  familyName: "Sami",
  url: SITE_URL,
  image: "https://i.ibb.co/pjSM4L2R/sami.png",
  jobTitle: "Frontend Developer & MERN Stack Engineer",
  description:
    "Sadman Sami is a Frontend Developer and MERN Stack Engineer specializing in React, Next.js, Node.js, MongoDB, and modern web technologies.",
  sameAs: [
    "https://github.com/imsadman90",
    "https://www.linkedin.com/in/sadman-sami-dev/",
    "https://twitter.com/iamsadmansami",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "Tailwind CSS",
    "Frontend Development",
    "MERN Stack",
    "Web Development",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Your University Name",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Sadman Sami — Developer Portfolio",
  description:
    "Official portfolio website of Sadman Sami, a Frontend Developer and MERN Stack Engineer.",
  publisher: {
    "@id": `${SITE_URL}/#person`,
  },
  inLanguage: "en-US",
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: "Sadman Sami Portfolio",
  mainEntity: {
    "@id": `${SITE_URL}/#person`,
  },
  dateCreated: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema),
          }}
        />
      </head>
      <body className="bg-background-dark font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
