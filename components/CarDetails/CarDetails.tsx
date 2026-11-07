import Image from "next/image";
import RentForm from "../RentForm/RentForm";
import { IoLocationOutline, } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsCalendar4Week, BsFuelPump, BsCarFront  } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { PiRoadHorizon } from "react-icons/pi";

export default function CarDetails() {
  return (
    <>
      <section className="flex gap-8 mt-21 mb-32 mx-auto px-30 w-full max-w-(--breakpoint-3xl)">
        <div>
          <Image className="rounded-2xl" src={'https://ac.goit.global/car-rental-task/9618-ai.jpg'} alt="The Land Rover Range Rover Sport is a premium SUV that offers a perfect blend of luxury, off-road capability, and dynamic performance, providing a refined driving experience both on and off the road." width={640} height={512}></Image>

          <RentForm carId="e8272785-e241-4d70-b7f2-964bd083756c"/>
        </div>

        <div className="py-8 px-6 w-132 rounded-2xl bg-white">
          <div className="flex gap-4 mb-2">
            <h1 className="my-0 text-2xl leading-[1.33] font-semibold">Buick Enclave, 2008</h1>
            <p className="mt-[9] leading-[1.25] font-medium text-gray">Article: 9582</p>
          </div>

          <p className="flex gap-1 items-center mb-4 leading-[1.25] font-medium"><IoLocationOutline size={16} /> Kyiv, Ukraine</p>

          <p className="mb-8 text-2xl leading-[1.33] font-semibold text-light-blue">$40</p>

          <p className="mb-17 leading-[1.25] font-medium">The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.</p>

          <h2 className="mb-5 text-xl leading-[1.2] font-semibold">Rental Conditions:</h2>

          <ul className="flex flex-col gap-4 mb-6 pb-6 border-b border-gray-light">
            <li className="flex gap-2 items-center">
              <FaRegCircleCheck size={16} />
              <p className="leading-[1.25] font-medium">Minimum age : 25</p>
            </li>
            <li className="flex gap-2 items-center">
              <FaRegCircleCheck size={16} />
              <p className="leading-[1.25] font-medium">Security deposite required</p>
            </li>
            <li className="flex gap-2 items-center">
              <FaRegCircleCheck size={16} />
              <p className="leading-[1.25] font-medium">Valid driver’s license</p>
            </li>
          </ul>

          <h2 className="mb-5 text-xl leading-[1.2] font-semibold">Car Specifications:</h2>

          <ul className="flex flex-col gap-4 mb-6 pb-6 border-b border-gray-light">
            <li className="flex gap-2 items-center">
              <BsCalendar4Week size={16} />
              <p className="leading-[1.25] font-medium">Year: 2008</p>
            </li>
            <li className="flex gap-2 items-center">
              <BsCarFront size={16} />
              <p className="leading-[1.25] font-medium">Type: Suv</p>
            </li>
            <li className="flex gap-2 items-center">
              <BsFuelPump size={16} />
              <p className="leading-[1.25] font-medium">Fuel Consumption: 10.5</p>
            </li>
            <li className="flex gap-2 items-center">
              <GoGear size={16} />
              <p className="leading-[1.25] font-medium">Engine: 3.6L V6</p>
            </li>
            <li className="flex gap-2 items-center">
              <PiRoadHorizon size={16} />
              <p className="leading-[1.25] font-medium">Mileage: 5858 km</p>
            </li>
          </ul>

          <h2 className="mb-5 text-xl leading-[1.2] font-semibold">Features </h2>

          <ul className="flex flex-col gap-4">
            <li className="flex gap-2 items-center">
              <FaRegCircleCheck size={16} />
              <p className="leading-[1.25] font-medium">Leather seats</p>
            </li>
            <li className="flex gap-2 items-center">
              <FaRegCircleCheck size={16} />
              <p className="leading-[1.25] font-medium">Panoramic sunroof</p>
            </li>
            <li className="flex gap-2 items-center">
              <FaRegCircleCheck size={16} />
              <p className="leading-[1.25] font-medium">Remote start</p>
            </li>
            <li className="flex gap-2 items-center">
              <FaRegCircleCheck size={16} />
              <p className="leading-[1.25] font-medium">Blind-spot monitoring</p>
            </li>
            <li className="flex gap-2 items-center">
              <FaRegCircleCheck size={16} />
              <p className="leading-[1.25] font-medium">Power liftgate</p>
            </li>
            <li className="flex gap-2 items-center">
              <FaRegCircleCheck size={16} />
              <p className="leading-[1.25] font-medium">Premium audio system</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}