import type { Metadata } from "next";
import { Gilda_Display } from "next/font/google";
import "./globals.css";



const gilda = Gilda_Display({
  weight: '400', // only 400 available for Gilda
  subsets: ['latin'],
});



export const metadata: Metadata = {
  title: "Nuvita Designs",
  description: "Transform Your Service-Based Business with a High-Converting Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilda.className} ${gilda.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
