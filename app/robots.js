export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://sadmansami.dev/sitemap.xml",
    host: "https://sadmansami.dev",
  };
}
