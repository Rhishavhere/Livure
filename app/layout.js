

import "./globals.css";

export const metadata = {
  title: "Livure",
  description: "Your Everyday Health App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      </head>
      <body className="bg-violet-600 overflow-x-hidden">{children}</body>
    </html>
  );
}
