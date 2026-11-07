'use client'

import { useState, useEffect, useRef } from "react";
import { SlArrowDown } from "react-icons/sl";
import { useQuery } from '@tanstack/react-query';
import { fetchFilters } from "@/lib/api/api";
import toast, { Toaster } from 'react-hot-toast';

interface FiltersProps {
  onSearch: React.Dispatch<React.SetStateAction<object>>;
}

interface Filters {
  brand?: string;
  price?: string;
  minMileage?: string;
  maxMileage?: string;
}

export default function Filters({ onSearch }: FiltersProps) {
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [brand, setBrand] = useState('Choose a brand');

  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [price, setPrice] = useState('Choose a price');

  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const brandRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;

      if (brandRef.current && !brandRef.current.contains(target)) setIsBrandOpen(false);
      if (priceRef.current && !priceRef.current.contains(target)) setIsPriceOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [])

  const handleReset = () => {
    setBrand('Choose a brand'); setPrice('Choose a price'); setMinMileage(''); setMaxMileage('');
  }

  useEffect(() => {
    window.addEventListener('reset-filter-inputs', handleReset);
    return () => window.removeEventListener('reset-filter-inputs', handleReset);
  }, []);

  const handleChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    setMinMileage(numericValue);
  };

  const handleChangeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    setMaxMileage(numericValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSearch({
      brand: brand !== 'Choose a brand' ? brand : undefined,
      price: price !== 'Choose a price' ? price : undefined,
      minMileage: minMileage !== '' ? minMileage : undefined,
      maxMileage: maxMileage !== '' ? maxMileage : undefined,
    });
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['carFilters'],
    queryFn: fetchFilters,
  });

  useEffect(() => {
    if (isError) {
      toast.error('Something went wrong.');
    }
  }, [isError]);

  const filters = [];

  if (data?.price) {
    for (let i = data?.price.min; i <= data?.price.max; i += 10) {
      filters.push(i);
    }
  }
  
  return (
    <>
      {isLoading ? <div className="mx-auto mb-15 font-medium">Loading filters...</div> : <form className="relative z-10 flex gap-4 mx-auto mb-15" onSubmit={handleSubmit}>
        <div ref={brandRef} className="relative flex flex-col">
          <span className="mb-2 text-xs leading-[1.33] text-gray">Car brand</span>
          <button className="flex justify-between items-center px-4 py-3 rounded-xl w-51 h-11 bg-white text-start font-medium leading-[1.25] focus:outline-none cursor-pointer" type="button" onClick={( ) => setIsBrandOpen(!isBrandOpen)}>
            <span>{brand}</span>
            <SlArrowDown className={`w-[13] ${isBrandOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-250 ease-in-out`} />
          </button>

          <ul className={`absolute top-[calc(68px+4px)] left-0 flex flex-col px-4.5 py-3.5 w-full max-h-68 rounded-xl font-medium leading-[1.25] text-gray bg-white overflow-y-scroll [&::-webkit-scrollbar]:w-[32px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:min-h-[128px] [&::-webkit-scrollbar-thumb]:bg-[#dadde1] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[12px] [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding [&::-webkit-scrollbar-button]:hidden ${isBrandOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'} transition-[opacity, visibility] duration-250 ease-in-out`}>
            {data?.brands.map((brand) => <li key={brand} className="mb-2 last:mb-0">
              <button className="w-full text-start hover:text-main focus:text-main focus:outline-none cursor-pointer" type="button" onClick={() => { setBrand(brand); setIsBrandOpen(false) }}>{brand}</button>
            </li>)}
          </ul>
        </div>

        <div ref={priceRef} className="relative flex flex-col">
          <span className="mb-2 text-xs leading-[1.33] text-gray">Price/ 1 hour</span>
          <button className="flex justify-between items-center px-4 py-3 rounded-xl w-51 h-11 bg-white text-start font-medium leading-[1.25] focus:outline-none cursor-pointer" type="button" onClick={( ) => setIsPriceOpen(!isPriceOpen)}>
            <span>{price}</span>
            <SlArrowDown className={`w-[13] ${isPriceOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-250 ease-in-out`} />
          </button>

          <ul className={`absolute top-[calc(68px+4px)] left-0 flex flex-col px-4.5 py-3.5 w-full max-h-47 rounded-xl font-medium leading-[1.25] text-gray bg-white overflow-y-scroll [&::-webkit-scrollbar]:w-[32px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:min-h-[68px] [&::-webkit-scrollbar-thumb]:bg-[#dadde1] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[12px] [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding [&::-webkit-scrollbar-button]:hidden ${isPriceOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'} transition-[opacity, visibility] duration-250 ease-in-out`}>
            {filters.map((price) => <li key={price} className="mb-2 last:mb-0">
              <button className="w-full text-start hover:text-main focus:text-main focus:outline-none cursor-pointer" type="button" onClick={() => { setPrice(price.toString()); setIsPriceOpen(false) }}>{price}</button>
            </li>)}
          </ul>
        </div>

        <div>
          <span className="mb-2 text-xs leading-[1.33] text-gray">Сar mileage / km</span>

          <div className="flex rounded-xl bg-white w-80 h-11">
            <label htmlFor="mileage-from" className="sr-only">Minimum car mileage in kilometers</label>
            <input className="w-40 px-6 py-3 border-r border-gray-light font-medium leading-[1.25] placeholder-main text-main focus:outline-none" type="text" id="mileage-from" placeholder="From" onChange={handleChangeFrom} maxLength={7} value={minMileage}/>

            <label htmlFor="mileage-to" className="sr-only">Maximum car mileage in kilometers</label>
            <input className="w-40 px-6 py-3 font-medium leading-[1.25] placeholder-main text-main focus:outline-none" type="text" id="mileage-to" placeholder="To" onChange={handleChangeTo} maxLength={7} value={maxMileage}/>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <button className="flex justify-center items-center mt-6 mb-2 w-39 h-11 rounded-xl font-semibold leading-[1.25] text-white bg-light-blue hover:bg-dark-blue focus:bg-dark-blue focus:outline-none transition-background duration-250 ease-in-out cursor-pointer" type="submit">Search</button>
          <button className="font-medium leading-[1.25] text-gray focus:outline-none cursor-pointer" type="button" onClick={handleReset}>Clear filters</button>
        </div>
      </form>}

      <Toaster />
    </>
  );
}
