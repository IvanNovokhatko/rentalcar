import Image from "next/image";

export default function CatalogNotFound() {
  return (
    <>
      <div className="flex flex-col items-center px-30 w-full max-w-(--breakpoint-3xl)">
        <Image className="mb-10" src={'/images/catalog-not-found.png'} alt="Catalog not found" width={414} height={388} />
        <h2 className="mb-4 font-semibold text-2xl text-center leading-[1.33]">No cars found</h2>
        <p className="max-w-87.75 font-medium text-center leading-[1.25]">We couldn`t find any cars that match your current filters. Try changing your search criteria or reset the filters.</p>
      </div>
    </>
  );
}
