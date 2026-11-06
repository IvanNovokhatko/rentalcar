import Filters from "../Filters/Filters";
import CarCard from "../CarCard/CarCard";
import LoadMore from "../LoadMore/LoadMore";
import Loader from "../Loader/Loader";

export default function Catalog() {
  const carExample = {
            "id": "2a32cd84-759f-4e91-b24e-6ec7676129e9",
            "year": 2006,
            "brand": "Mercedes-Benz",
            "model": "SLK-Class",
            "type": "Convertible",
            "img": "https://ac.goit.global/car-rental-task/9655-ai.jpg",
            "description": "The Mercedes-Benz SLK-Class is a luxurious and sporty convertible that offers a perfect balance of style, performance, and refinement, delivering an enjoyable open-top driving experience.",
            "fuelConsumption": 9.8,
            "engine": "3.5L V6",
            "rentalPrice": "80",
            "rentalCompany": "Luxury Car Rentals",
            "rentalConditions": [
                "Minimum age: 25",
                "Valid driver's license",
                "Security deposit and insurance required"
            ],
            "mileage": 6280,
            "stockNumber": 3460,
            "features": [
                "Airscarf neck-level heating",
                "Harman Kardon surround sound system",
                "Magic Sky Control panoramic roof",
                "Rear-Wheel Drive",
                "Dynamic Stability Control",
                "Retractable hardtop roof"
            ],
            "location": {
                "country": "Ukraine",
                "city": "Kyiv",
                "address": "456 Example Avenue"
            },
            "createdAt": "2026-02-16T22:00:36.184Z",
            "updatedAt": "2026-02-16T22:00:39.544Z"
  };
  
  return (
    <>
      <section className="flex flex-col pt-21 pb-26 mx-auto px-30 w-full max-w-(--breakpoint-3xl)">
        <Filters />

        <ul className="grid grid-cols-4 gap-x-8 gap-y-12">
          <CarCard car={carExample} />
          <CarCard car={carExample} />
          <CarCard car={carExample} />
          <CarCard car={carExample} />
          <CarCard car={carExample} />
          <CarCard car={carExample} />
          <CarCard car={carExample} />
          <CarCard car={carExample} />
          <CarCard car={carExample} />
          <CarCard car={carExample} />
          <CarCard car={carExample} />
          <CarCard car={carExample} />
        </ul>

        <LoadMore/>
      </section>
    </>
  );
}
