import "./globals.css";
// src/app/layout.js
export const metadata = {
  title: 'Living Glory Social Care',
  description: 'Providing compassionate domiciliary care since 2012.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
