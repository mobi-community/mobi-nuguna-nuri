import '../styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/footer/footer';
import { Header } from '@/components/header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='h-screen'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
