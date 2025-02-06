import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppSidebar } from '@/components/sidebar';
import { Navbar } from '@/components/navbar';
import { Contact } from '@/components/contact';
import { Providers } from '@/components/providers';
import { DotBackgroundDemo } from '@/components/ui/dotBackground';
import  About  from '@/components/about';
import React from 'react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Louam Lemjid - Full Stack Engineer',
  description: 'Full Stack Engineer specializing in JavaScript, Node.js, React, and modern web technologies.',
  keywords: ['Full Stack Developer', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
  authors: [{ name: 'Louam Lemjid' }],
  openGraph: {
    title: 'Louam Lemjid - Full Stack Engineer',
    description: 'Full Stack Engineer specializing in JavaScript, Node.js, React, and modern web technologies.',
    url: 'https://louamlemjid.dev',
    siteName: 'Louam Lemjid Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        width: 1200,
        height: 630,
        alt: 'Louam Lemjid - Full Stack Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Louam Lemjid - Full Stack Engineer',
    description: 'Full Stack Engineer specializing in JavaScript, Node.js, React, and modern web technologies.',
    images: ['https://images.unsplash.com/photo-1461749280684-dccba630e2f6'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
        <Navbar />
          <div className="flex min-h-screen flex-col w-full">
          
          
              <AppSidebar />
              
              <main className="flex-1 bg-background ml-12 px-4">
                {children}
              </main>
              
            
          </div>
        </Providers>
      </body>
    </html>
  );
}