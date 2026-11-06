import Image from "next/image";
import Link from "next/link";

export default function CarCard() {
  return (
    <>
      <div className="w-69 h-116 p-4 bg-white rounded-2xl">
        <Image className="min-h-67 rounded-[14px] mb-4 object-cover" src={'https://ac.goit.global/car-rental-task/9630-ai.jpg'} alt="The Kia Rio is a versatile and fuel-efficient vehicle available in both sedan and hatchback body styles, offering a comfortable cabin, modern features, and a smooth driving experience, making it an attractive choice for urban commuters." width={244} height={268}></Image>

        <div className="flex justify-between mb-2">
          <h2 className="font-medium leading-[1.25] max-w-50 truncate">Kia <span className="font-medium leading-[1.25] text-light-blue">Rio</span>, 2020</h2>
          <p className="font-medium leading-[1.25]">$50</p>
        </div>

        <div className="flex flex-col items-center w-full h-13 mb-6 p-2 rounded-lg bg-bg">
          <div className="flex items-center mb-1 w-full">
            <p className="inline-block text-xs leading-[1.33] border-r border-gray-light pr-1.5">Kharkiv</p>
            <p className="inline-block text-xs leading-[1.33] border-r border-gray-light pl-1.5 pr-1.5">Ukraine</p>
            <p className="inline-block text-xs leading-[1.33] border-r border-gray-light mr-1.5 pl-1.5 pr-1.5 truncate">Economy Car Rentals</p>
          </div>
          <div className="flex items-center w-full">
            <p className="inline-block text-xs leading-[1.33] border-r border-gray-light pr-1.5">Sedan, Hatchback</p>
            <p className="inline-block text-xs leading-[1.33] pl-1.5">6234</p>
          </div>
        </div>

        <Link className="flex justify-center items-center w-61 h-11 font-semi-bold leading-[1.25] text-white bg-light-blue hover:bg-dark-blue rounded-xl transition-background duration-250 ease-in-out cursor-pointer" href={`/catalog/e58adcfb-4b16-413d-9380-52a025a66db2`}>Read more</Link>
        
      </div>
    </>
  );
}
