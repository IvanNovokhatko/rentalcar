import axios from "axios";
import type { Car } from "@/types/car";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

interface FetchCarsParams {
    brand?: string;
    price?: number;
    minMileage?: number;
    maxMileage?: number;
    perPage?: number;
    page?: number;
}

interface FetchCarsResponse {
    cars: Car[];
    totalCars: number;
    page: number;
    totalPages: number;
}

interface FetchFiltersResponse {
    brands: string[];
    price: {
        min: number;
        max: number;
    };
}

export const fetchCars = async (params: FetchCarsParams): Promise<FetchCarsResponse> => {

  const response = await api.get<FetchCarsResponse>('/cars', { params })
  return response.data;
};

export const fetchFilters = async (): Promise<FetchFiltersResponse> => {

  const response = await api.get<FetchFiltersResponse>('/cars/filters')
  return response.data;
};