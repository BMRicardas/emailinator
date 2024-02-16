import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "@/styles/global/index.scss";

const inter = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ratepunk",
  description: "Ratepunk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
