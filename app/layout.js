import "./globals.css";

import Providers from "./provider";

export const metadata = {
  title: "careBear",
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
      <body className="bg-orange-800/90 overflow-x-hidden">
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
}
