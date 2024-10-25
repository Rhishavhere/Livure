

import "./globals.css";

export const metadata = {
  title: "Livure",
  description: "Your Everyday Health App",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-violet-600 overflow-x-hidden">{children}</body>
    </html>
  );
}
