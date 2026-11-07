import type { Metadata } from "next";
import { fetchCarById } from "@/lib/api/api";
import CarDetails from "@/components/CarDetails/CarDetails";

interface Props {
  params: Promise<{
    carId: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { carId } = await params;

  try {
    const car = await fetchCarById({ carId });

    return {
      title: `${car.brand} ${car.model} | RentalCar`,
      description: car.description || "Choose a rental car that will perfectly fit your needs and style.",

      openGraph: {
        type: 'website',
        siteName: 'RentalCar',
        title: `${car.brand} ${car.model} | RentalCar`,
        description: car.description || "Choose a rental car that will perfectly fit your needs and style.",
        images: [car.img],
      },

      twitter: {
        card: 'summary_large_image',
        title: `${car.brand} ${car.model} | RentalCar`,
        description: car.description || "Choose a rental car that will perfectly fit your needs and style.",
        images: [car.img],
      },
    };
  } catch (error) {
    return {
      title: "Car Details | RentalCar",
      description: "Choose a rental car that will perfectly fit your needs and style.",
    };
  }
}

export default function CarDetailsPage() {
  return (
    <>
      <CarDetails/>
    </>
  );
}
