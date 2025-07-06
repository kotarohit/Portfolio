import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rohith Kota - Data & AI Engineer',
  description: 'Data & AI Engineer with 5+ years of experience managing petabyte-scale data, building scalable LLM-powered applications, and architecting modern Lakehouses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.1/lucide.min.css" />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js" strategy="beforeInteractive" />
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}