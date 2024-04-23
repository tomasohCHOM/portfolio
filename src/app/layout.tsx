import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomas Oh",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>{children}</body>
    </html>
  );
}
