import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ComparisonProvider } from '@/contexts/comparison-context';

export const metadata: Metadata = {
  title: 'PixelPortal',
  description: 'A comprehensive mobile phone information portal for users to research and compare devices.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <ComparisonProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ComparisonProvider>
        <Toaster />
      </body>
    </html>
  );
}
