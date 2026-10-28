import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://atelie-dos-fehs.naiifs.chatgpt.site'),
  title: 'Ateliê dos Fehs | Bolos Decorados em Carapicuíba',
  description:
    'Bolos personalizados, doces artesanais e ovos de Páscoa feitos sob encomenda em Carapicuíba.',
  openGraph: {
    title: 'Ateliê dos Fehs | Bolos Decorados em Carapicuíba',
    description:
      'Bolos personalizados e doces artesanais feitos sob encomenda, com sabor, capricho e pontualidade.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: 'https://atelie-dos-fehs.naiifs.chatgpt.site/og.png',
        width: 1734,
        height: 907,
        alt: 'Ateliê dos Fehs — Bolos feitos à mão. Do seu jeito.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ateliê dos Fehs | Bolos Decorados em Carapicuíba',
    description:
      'Bolos personalizados e doces artesanais feitos sob encomenda, com sabor, capricho e pontualidade.',
    images: ['https://atelie-dos-fehs.naiifs.chatgpt.site/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
