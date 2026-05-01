import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Open Meridian Healing | Reiki & Energy Healing",
  description:
    "Reiki and intuitive energy healing offered in a warm, grounded, and supportive space. In-person sessions in Gilroy, CA. Distance Reiki available anywhere.",
  keywords: [
    "reiki",
    "energy healing",
    "reiki gilroy",
    "distance reiki",
    "chakra healing",
    "reiki henna",
    "holistic healing",
    "open meridian healing",
  ],
  openGraph: {
    title: "Open Meridian Healing",
    description:
      "Ease into inner balance and wholeness with Reiki. In-person & distance sessions available.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
