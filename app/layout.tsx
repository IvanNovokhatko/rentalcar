import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['500'],
});

export const metadata: Metadata = {
  title: "RentalCar",
  description: "Find a rental car that will perfectly fit your needs and style. Browse our fleet of luxury, economy, and family vehicles and book online today!",

  openGraph: {
    type: 'website',
    siteName: 'RentalCar',
    title: 'RentalCar',
    description: 'Find a rental car that will perfectly fit your needs and style.',
    images: ["https://ac.goit.global/car-rental-task/9655-ai.jpg"],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'RentalCar',
    description: 'Find a rental car that will perfectly fit your needs and style.',
    images: ["https://ac.goit.global/car-rental-task/9655-ai.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
      </body>
    </html>
  );
}
