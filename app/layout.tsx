import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rohithkota.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Rohith Kota — Data & AI Engineer',
    template: '%s | Rohith Kota',
  },
  description:
    'Data & AI Engineer at Meta with 5+ years building petabyte-scale ETL pipelines, LLM applications, and modern Lakehouses. $300M+ revenue impact across Meta, T-Mobile, and HighRadius.',
  keywords: [
    'Data Engineer',
    'AI Engineer',
    'Machine Learning',
    'LLM',
    'ETL',
    'LangChain',
    'Apache Spark',
    'Databricks',
    'Meta',
    'Python',
    'RAG',
    'Kafka',
    'Airflow',
    'Snowflake',
    'Rohith Kota',
  ],
  authors: [{ name: 'Rohith Kota', url: siteUrl }],
  creator: 'Rohith Kota',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Rohith Kota',
    title: 'Rohith Kota — Data & AI Engineer at Meta',
    description:
      'Data & AI Engineer at Meta with 5+ years building petabyte-scale ETL pipelines, LLM applications, and modern Lakehouses. $300M+ revenue impact.',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rohith Kota — Data & AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohith Kota — Data & AI Engineer at Meta',
    description:
      'Data & AI Engineer at Meta building petabyte-scale ETL pipelines and LLM applications. $300M+ revenue impact.',
    images: ['/og-image.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rohith Kota',
  url: siteUrl,
  image: `${siteUrl}/og-image.jpeg`,
  jobTitle: 'Data & AI Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Meta',
    url: 'https://www.meta.com',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Drexel University',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  email: 'kotarohit14@gmail.com',
  telephone: '+18573353738',
  sameAs: [
    'https://github.com/kotarohit',
    'https://www.linkedin.com/in/rohith-kota-2b1161366',
  ],
  knowsAbout: [
    'Data Engineering',
    'Machine Learning',
    'Large Language Models',
    'Apache Spark',
    'ETL Pipelines',
    'LangChain',
    'Databricks',
    'Kafka',
    'Python',
    'SQL',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
