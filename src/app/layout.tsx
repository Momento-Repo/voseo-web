import type { Metadata } from "next";
import "./globals.css";
import { helvena } from "@/lib/fonts/fonts"

export const metadata: Metadata = {
  title: "Voseo",
  description: "Voseo is a different way to remember. \
  It brings back the feeling of real film — the kind where moments mattered because you couldn't see them right away. \
  With Voseo, you don't scroll. You don't edit. You do't retake.",
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
