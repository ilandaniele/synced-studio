import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Synced Studio",
  description: "Synced Studio - Transforming Ideas into Stunning 3D Visuals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
