import type { Car } from "@/types/car";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  return (
    <>
      <div className="w-69 h-116 p-4 bg-white rounded-2xl">
        <Image className="min-h-67 rounded-[14px] mb-4 object-cover" src={`${car.img}`} alt={`${car.description}`} width={244} height={268}></Image>

        <div className="flex justify-between mb-2">
          <h2 className="font-medium leading-[1.25] max-w-50 truncate">{car.brand} <span className="font-medium leading-[1.25] text-light-blue">{car.model}</span>, {car.year}</h2>
          <p className="font-medium leading-[1.25]">${car.rentalPrice}</p>
        </div>

        <div className="flex flex-col items-center w-full h-13 mb-6 p-2 rounded-lg bg-bg">
          <div className="flex items-center mb-1 w-full">
            <p className="inline-block text-xs leading-[1.33] border-r border-gray-light pr-1.5">{car.location.city}</p>
            <p className="inline-block text-xs leading-[1.33] border-r border-gray-light pl-1.5 pr-1.5">{car.location.country}</p>
            <p className="inline-block text-xs leading-[1.33] border-r border-gray-light mr-1.5 pl-1.5 pr-1.5 truncate">{car.rentalCompany}</p>
          </div>
          <div className="flex items-center w-full">
            <p className="inline-block text-xs leading-[1.33] border-r border-gray-light pr-1.5">{car.type}</p>
            <p className="inline-block text-xs leading-[1.33] pl-1.5">{car.mileage}</p>
          </div>
        </div>

        <Link className="flex justify-center items-center w-61 h-11 rounded-xl font-semibold leading-[1.25] text-white bg-light-blue hover:bg-dark-blue focus:outline-none transition-background duration-250 ease-in-out cursor-pointer" href={`/catalog/${car.id}`}>Read more</Link>
        
      </div>
    </>
  );
}
