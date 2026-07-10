const SITE_URL = "https://sadman-sami.vercel.app";

export default function sitemap() {
  const lastModified = new Date();

  // Single-page portfolio: the in-page sections are anchors on the home route,
  // so the home URL is the one canonical entry Google should index.
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
