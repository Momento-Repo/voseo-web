import localFont from "next/font/local"

export const helvena = localFont({
  variable: "--font-helvena",
  src: [
    {
      path: "./Helvena-Black.woff2",
      weight: "900",
    },
    {
      path: "./Helvena-Extrabold.woff2",
      weight: "800",
    },
    {
      path: "./Helvena-Bold.woff2",
      weight: "700",
    },
    {
      path: "./Helvena-Semibold.woff2",
      weight: "600",
    },
    {
      path: "./Helvena-Medium.woff2",
      weight: "500",
    },
    {
      path: "./Helvena-Regular.woff2",
      weight: "400",
    },
    {
      path: "./Helvena-Light.woff2",
      weight: "300",
    },
    {
      path: "./Helvena-Extralight.woff2",
      weight: "200",
    },
  ]
})