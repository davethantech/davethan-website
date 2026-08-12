import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Roboto, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-roboto' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Davethan Technologies Limited | Managed IT, Cybersecurity & Cloud Services',
  description: 'Davethan Technologies Limited provides expert Managed IT, Cybersecurity, IT Consultancy and Cloud Services to businesses across the UK and Nigeria.',
  keywords: ['Managed IT', 'Cybersecurity', 'Cloud Services', 'IT Consultancy', 'UK', 'Nigeria', 'IT Support'],
  icons: {
    icon: '/davethan_logo.webp',
    shortcut: '/davethan_logo.webp',
    apple: '/davethan_logo.webp',
  },
  openGraph: {
    title: 'Davethan Technologies Limited',
    description: 'Expert IT Solutions for Growing Businesses',
    url: 'https://davethan.tech',
    siteName: 'Davethan Technologies',
    images: [{ url: '/davethan_logo.webp', width: 512, height: 512, alt: 'Davethan Logo' }],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${roboto.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
