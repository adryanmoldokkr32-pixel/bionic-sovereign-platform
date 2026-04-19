import React from 'react';
import '../globals.css';

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="scroll-smooth">
      <body className="bg-black text-white antialiased selection:bg-gold selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}