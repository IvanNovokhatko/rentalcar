import type { Metadata } from "next";
import Catalog from "@/components/Catalog/Catalog";
import { QueryClientProvider } from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "Car Catalog",
  description: "Choose a rental car that will perfectly fit your needs and style. Browse our fleet of luxury, economy, and family vehicles and book online today!",

  openGraph: {
    type: 'website',
    siteName: 'RentalCar',
    title: 'RentalCar',
    description: 'Choose a rental car that will perfectly fit your needs and style.',
    images: ["https://ac.goit.global/car-rental-task/9655-ai.jpg"],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'RentalCar',
    description: 'Choose a rental car that will perfectly fit your needs and style.',
    images: ["https://ac.goit.global/car-rental-task/9655-ai.jpg"],
  },
};

export default function CatalogPage() {
  return (
    <>
      <Catalog/>
    </>
  );
}
