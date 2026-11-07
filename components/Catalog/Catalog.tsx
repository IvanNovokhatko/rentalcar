'use client'

import Filters from "../Filters/Filters";
import CarCard from "../CarCard/CarCard";
import LoadMore from "../LoadMore/LoadMore";
import Loader from "../Loader/Loader";
import CatalogNotFound from "../CatalogNotFound/CatalogNotFound";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCars } from "@/lib/api/api";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function Catalog() {

  const [filters, setFilters] = useState({});

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['cars', filters], 
    queryFn: ({ pageParam = 1 }) => fetchCars({ page: pageParam, perPage: 12, ...filters }),
    getNextPageParam: (lastPage) => lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
  });

  const cars = data?.pages.flatMap((page) => page.cars) ?? [];

  const handleFullReset = () => {
    setFilters({});
    
    window.dispatchEvent(new Event('reset-filter-inputs'));
  };

  useEffect(() => {
    if (isError) {
      toast.error('Something went wrong.');
    }
  }, [isError]);
  
  return (
    <>
      <section className="flex flex-col pt-21 pb-26 mx-auto px-30 w-full max-w-(--breakpoint-3xl)">
        <Filters onSearch={setFilters} />

        {isLoading ? <Loader/> : cars.length === 0 ? <CatalogNotFound onClick={handleFullReset}/> : <ul className="grid grid-cols-4 gap-x-8 gap-y-12">
          {cars.map((car) => <li key={car.id}>
            <CarCard car={car}/>
          </li>)}
        </ul>}

        {hasNextPage && !isFetchingNextPage && <LoadMore onClick={fetchNextPage} isLoading={isFetchingNextPage} isVisible={!!hasNextPage} />}
        <Toaster />
      </section>
    </>
  );
}
