'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const baseStyles = "font-medium leading-[1.25] text-center text-main underline decoration-transparent focus:outline-none hover:text-light-blue hover:decoration-light-blue focus:text-light-blue focus:decoration-light-blue [text-decoration-skip-ink:none] transition-colors duration-250 ease-in-out";
  const activeStyles = "font-medium leading-[1.25] text-center text-light-blue underline focus:outline-none [text-decoration-skip-ink:none]";
  
  return (
    <>
      <header className="bg-white">
        <div className="flex items-center justify-between px-30 w-full max-w-(--breakpoint-3xl) mx-auto h-17">
          <Link className="focus:outline-none hover:opacity-[0.6] focus:opacity-[0.6] transition-opacity duration-250 ease-in-out" href="/"><Image src="/icons/logo.svg" alt="Rental Car Logo" width={104} height={16} /></Link>
          <nav className="flex gap-8">
            <Link className={`${pathname === "/" ? activeStyles : baseStyles}`} href="/">Home</Link>
            <Link className={`${pathname === "/catalog" ? activeStyles : baseStyles}`} href="/catalog">Catalog</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
