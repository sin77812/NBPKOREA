import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Noto_Sans_KR } from 'next/font/google';
import Header from '@/components/Header'; // Header 컴포넌트 import
import Footer from '@/components/Footer'; // Footer 컴포넌트 import

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});
const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: 'NBPKOREA',
  description: '깨끗한 환경, 효율적인 에너지. NBPKOREA가 만들어갑니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${poppins.variable} ${notoSansKR.variable} font-heading font-body bg-background text-text-primary`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
