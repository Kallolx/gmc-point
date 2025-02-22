import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google';
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className={`font-dm-sans tracking-[-0.06em]`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
