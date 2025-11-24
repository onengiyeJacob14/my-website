import "./globals.css";

export const metadata = {
  title: "Living Glory Social Care",
  description: "Providing compassionate domiciliary care since 2012.",
  icons: {
    icon: "/livingglory-logo-c.png",
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
