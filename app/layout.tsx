// app/layout.tsx
export const metadata = {
  title: "Louam Lemjid - Fullstack Engineer",
  description:
    "Welcome to the official website of Louam Lemjid, a Fullstack engineer specializing in web, mobile, and IoT development.",
  keywords: [
    "Louam Lemjid",
    "Fullstack Engineer",
    "Web Development",
    "IoT",
    "React",
    "Node.js",
    "Next.js",
    "Electron.js",
  ],
  authors: [{ name: "Louam Lemjid" }],
  verification: {
    google: '4rVBEIEauBbk_S-bDqsPZtXcw2UAfoWMuvuMm3R8LLM'
  },
  openGraph: {
    title: "Louam Lemjid - Fullstack Engineer",
    description:
      "Explore the work of Louam Lemjid, an expert in web, mobile, and IoT development.",
    url: "https://louam-lemjid.vercel.app", // 👉 replace with your real domain
    siteName: "Louam Lemjid",
    images: [
      {
        url: "https://louam-lemjid.vercel.app/profile.png", // must resolve to /public/profile.png
        width: 1200,
        height: 630,
        alt: "Louam Lemjid Profile",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // JSON-LD structured data
  other: {
    "ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Louam Lemjid",
      jobTitle: "Fullstack Engineer",
      url: "https://yourdomain.com", // 👉 replace with real domain
      sameAs: [
        "https://www.linkedin.com/in/louam-lemjid-466435206/",
        "https://github.com/louamlemjid",
      ],
    }),
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
