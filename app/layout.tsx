import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omohan — Care Support for Every Family",
  description: "Omohan connects employees with expert care navigators to help manage childcare, eldercare, and every caregiving challenge in between.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
