import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Sadman Sami | MERN Stack Developer & Frontend Engineer",
  description:
    "Frontend-first developer specializing in React, Next.js, and the MERN stack. Crafting responsive, accessible, and performant web experiences with modern UI engineering.",
  keywords: [
    "Sadman Sami",
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "UI Engineer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Sadman Sami" }],
  creator: "Sadman Sami",
  publisher: "Sadman Sami",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sadmansami.dev",
    title: "Sadman Sami | MERN Stack Developer & Frontend Engineer",
    description:
      "Frontend-first developer specializing in React, Next.js, and the MERN stack. Crafting responsive, accessible, and performant web experiences.",
    siteName: "Sadman Sami Portfolio",
    images: [
      {
        url: "https://i.ibb.co/pjSM4L2R/sami.png",
        width: 1200,
        height: 630,
        alt: "Sadman Sami - MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadman Sami | MERN Stack Developer & Frontend Engineer",
    description:
      "Frontend-first developer specializing in React, Next.js, and the MERN stack.",
    creator: "@iamsadmansami",
    images: ["https://i.ibb.co/pjSM4L2R/sami.png"],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-background-dark font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
