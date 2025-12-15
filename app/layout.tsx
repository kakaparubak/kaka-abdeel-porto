import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Bricolage_Grotesque, Geist, Geist_Mono, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: 'variable',
  subsets: ["latin"],
})

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: "variable",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: "variable",
})

export const metadata: Metadata = {
  title: "abdeel | your next builder.",
  description: "Nice to meet you, I am Kaka Abdeel Parubak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
