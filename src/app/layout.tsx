import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AOSProvider from './components/AOSProvider';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KH MMBAGA - Construction and Supplier',
  description: 'Building excellence since day one. Quality construction and supply services in Tanzania.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <AOSProvider />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}