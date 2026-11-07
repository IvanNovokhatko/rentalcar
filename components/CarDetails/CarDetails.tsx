'use client'

import Image from "next/image";
import RentForm from "../RentForm/RentForm";
import { useParams } from "next/navigation";
import { useQuery } from '@tanstack/react-query';
import { fetchCarById } from "@/lib/api/api";
import toast, { Toaster } from 'react-hot-toast';
import { IoLocationOutline, } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsCalendar4Week, BsFuelPump, BsCarFront  } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { PiRoadHorizon } from "react-icons/pi";

export default function CarDetails() {
  const carId = useParams().carId as string;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['car', carId],
    queryFn: () => fetchCarById({ carId }),
    enabled: !!carId, 
  });

  if (isLoading) return <div className="mx-auto mt-15 font-medium">Loading car...</div>;
  if (isError || !data) {
    toast.error('Something went wrong.');
    return <Toaster />; 
  }

  return (
    <>
      <section className="flex gap-8 mt-21 mb-32 mx-auto px-30 w-full max-w-(--breakpoint-3xl)">
        <div>
          <Image className="rounded-2xl" src={data.img} alt={data.description} width={640} height={512}></Image>

          <RentForm carId={ carId }/>
        </div>

        <div className="py-8 px-6 w-132 rounded-2xl bg-white">
          <div className="flex gap-4 mb-2">
            <h1 className="my-0 text-2xl leading-[1.33] font-semibold">{data.brand} {data.model}, {data.year}</h1>
            <p className="mt-[9] leading-[1.25] font-medium text-gray">Article: {data.stockNumber}</p>
          </div>

          <p className="flex gap-1 items-center mb-4 leading-[1.25] font-medium"><IoLocationOutline size={16} /> {data.location.city}, {data.location.country}</p>

          <p className="mb-8 text-2xl leading-[1.33] font-semibold text-light-blue">${data.rentalPrice}</p>

          <p className="mb-17 leading-[1.25] font-medium">{data.description}</p>

          <h2 className="mb-5 text-xl leading-[1.2] font-semibold">Rental Conditions:</h2>

          <ul className="flex flex-col gap-4 mb-6 pb-6 border-b border-gray-light">
            {data.rentalConditions.map((condition) => <li key={condition} className="flex gap-2 items-center">
              <FaRegCircleCheck size={16} />
              <p className="leading-[1.25] font-medium">{condition}</p>
            </li>)}
          </ul>

          <h2 className="mb-5 text-xl leading-[1.2] font-semibold">Car Specifications:</h2>

          <ul className="flex flex-col gap-4 mb-6 pb-6 border-b border-gray-light">
            <li className="flex gap-2 items-center">
              <BsCalendar4Week size={16} />
              <p className="leading-[1.25] font-medium">Year: {data.year}</p>
            </li>
            <li className="flex gap-2 items-center">
              <BsCarFront size={16} />
              <p className="leading-[1.25] font-medium">Type: {data.type}</p>
            </li>
            <li className="flex gap-2 items-center">
              <BsFuelPump size={16} />
              <p className="leading-[1.25] font-medium">Fuel Consumption: {data.fuelConsumption}</p>
            </li>
            <li className="flex gap-2 items-center">
              <GoGear size={16} />
              <p className="leading-[1.25] font-medium">Engine: {data.engine}</p>
            </li>
            <li className="flex gap-2 items-center">
              <PiRoadHorizon size={16} />
              <p className="leading-[1.25] font-medium">Mileage: {data.mileage}</p>
            </li>
          </ul>

          <h2 className="mb-5 text-xl leading-[1.2] font-semibold">Features </h2>

          <ul className="flex flex-col gap-4">
            {data.features.map((feature) => <li key={feature} className="flex gap-2 items-center">
              <FaRegCircleCheck size={16} />
              <p className="leading-[1.25] font-medium">{feature}</p>
            </li>)}
          </ul>
        </div>
      </section>

      <Toaster />
    </>
  );
}