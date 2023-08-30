import SessionProvider from "@/providers/SessionProvider";
import "@/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import classNames from "classnames";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Nguyen Minh Tuan",
  description: "Welcome to my portfolio website!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={classNames(inter.className, "bg-dark")}>
        <SessionProvider>{children}</SessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
