import type { Metadata } from "next";
import "./globals.css";
import { atelia, helvena } from "@/lib/fonts/fonts"

export const metadata: Metadata = {
  metadataBase: new URL("https://voseo.co"),
  title: "Voseo — Take photos, receive prints",
  description:
    "Voseo turns your phone into a modern disposable camera. Shoot a 24, 36 or 50-shot roll \u2014 no previews, no retakes, no filters \u2014 then we print and deliver your photos through your letterbox.",
  keywords: [
    "photo prints app",
    "disposable camera app",
    "print photos from phone",
    "photo printing subscription",
    "film camera app",
    "Voseo",
  ],
  openGraph: {
    title: "Voseo — Take photos, receive prints",
    description:
      "Shoot a 24, 36 or 50-shot roll \u2014 no previews, no retakes, no filters \u2014 then we print and deliver your photos through your letterbox.",
    url: "https://voseo.co",
    siteName: "Voseo",
    locale: "en_GB",
    type: "website",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${helvena.variable} ${atelia.variable} font-regular h-full w-full antialiased overscroll-none`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
