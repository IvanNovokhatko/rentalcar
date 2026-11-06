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

interface createBookingRequestParams {
  carId: string;
  body: {
    name: string;
    email: string;
    comment: string;
  };
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

export interface createBookingRequestResponse {
  message: string;
}

export const fetchCars = async (params: FetchCarsParams): Promise<FetchCarsResponse> => {

  const response = await api.get<FetchCarsResponse>('/cars', { params })
  return response.data;
};

export const fetchFilters = async (): Promise<FetchFiltersResponse> => {

  const response = await api.get<FetchFiltersResponse>('/cars/filters')
  return response.data;
};

export const createBookingRequest = async (params: createBookingRequestParams): Promise<createBookingRequestResponse> => {
  const { carId, body } = params;

  const response = await api.post<createBookingRequestResponse>(`/cars/${carId}/booking-requests`, body);
  return response.data;
};