import type { Metadata } from "next";
import "./globals.css";
import { helvena } from "@/lib/fonts/fonts"

export const metadata: Metadata = {
  title: "Voseo",
  description: "Voseo description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(helvena.variable)
  return (
    <html
      lang="en"
      className={`${helvena.variable} font-regular h-full w-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
