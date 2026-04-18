import React from 'react';

const Layout = ({ children, locale }) => {
  return (
    <html lang={locale}>
      <body className="bg-[#0a0a0a] text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
};

export default Layout;