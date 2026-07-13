import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Appethaize — Thai Kitchen on Baxter Street",
  description:
    "Appethaize is a Thai restaurant at 75 Baxter Street, New York. Bold aromatics, wok-fire, and slow-simmered curries in the heart of Chinatown. Call +1-646-669-9353.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-ink text-cream font-body selection:bg-saffron selection:text-ink">
        {children}
      </body>
    </html>
  );
}
