export const metadata = {
  title: 'Louam Lemjid - Software Engineer',
  description: 'Portfolio of Louam Lemjid, a Fullstack engineer specializing in web, mobile, and IoT development.',
  keywords: 'Louam Lemjid, Software Engineer, Web Development, IoT, React, Node.js, Next.js, Electron.js',
  authors: [{ name: 'Louam Lemjid'}],
  openGraph: {
    title: 'Louam Lemjid - Software Engineer',
    description: 'Explore the work of Louam Lemjid, an expert in web, mobile, and IoT development.',
    // url: 'https://yourdomain.com',
    siteName: 'Louam Lemjid Portfolio',
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'Louam Lemjid',
      },
    ],
    type: 'website',
  },
 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
