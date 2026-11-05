import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="bg-white">
        <div className="flex items-center justify-between px-30 w-full max-w-(--breakpoint-3xl) mx-auto h-17">
          <Link className="focus:outline-none hover:opacity-[0.6] focus:opacity-[0.6] transition-opacity duration-250 ease-in-out" href="/"><Image src="/icons/logo.svg" alt="Rental Car Logo" width={104} height={16} /></Link>
          <nav className="flex gap-8">
            <Link className="font-medium leading-[1.25] text-center text-main focus:outline-none hover:text-light-blue hover:underline focus:text-light-blue focus:underline [text-decoration-skip-ink:none] transition-colors duration-250 ease-in-out" href="/">Home</Link>
            <Link className="font-medium leading-[1.25] text-center text-main focus:outline-none hover:text-light-blue hover:underline focus:text-light-blue focus:underline [text-decoration-skip-ink:none] transition-colors duration-250 ease-in-out" href="/catalog">Catalog</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
