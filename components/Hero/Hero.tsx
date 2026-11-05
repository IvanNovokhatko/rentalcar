import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col flex-1 justify-end items-center bg-[url('/images/hero.jpg')] bg-cover bg-center w-full pb-15">
        <h1 className="m-0 font-bold text-6xl leading-[1.20] text-center text-white">Find your perfect rental car</h1>
        <p className="mt-4 font-semi-bold text-2xl leading-[1.33] text-center text-white">Reliable and budget-friendly rentals for any journey</p>
        <Link className="flex justify-center items-center mt-10 w-69 h-11 rounded-xl font-semi-bold leading-[1.25] text-white bg-light-blue hover:bg-dark-blue focus:bg-dark-blue focus:outline-none transition-background duration-250 ease-in-out" href="/catalog">View Catalog</Link>
      </section>
    </>
  );
}
