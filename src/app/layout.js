import "./globals.css";
// src/app/layout.js
export const metadata = {
  title: 'Living Glory Social Care',
  description: 'Providing compassionate domiciliary care since 2012.',
  icons: {
    icon: "/livingglory-logo-c.png", // or .ico if you have that
  },
// Add the line below:
viewport: 'width=device-width, initial-scale=1.0',
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
