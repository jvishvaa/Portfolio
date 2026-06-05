import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jayavishvaa J - Software Developer Portfolio",
  description:
    "Software Development Engineer with 2+ years of experience in full-stack development. Specialized in React, React Native, Django, and PostgreSQL for platforms serving 12k+ daily users.",
  keywords: [
    "Software Developer",
    "Full Stack Developer",
    "React Developer",
    "Portfolio",
    "Bangalore",
    "India",
    "React Native",
    "Django",
  ],
  authors: [{ name: "Jayavishvaa J" }],
  openGraph: {
    title: "Jayavishvaa J - Software Developer Portfolio",
    description: "Full-stack developer with 2+ years of experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
