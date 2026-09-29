import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js React Starter",
  description: "A reusable Next.js and React project starter.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
