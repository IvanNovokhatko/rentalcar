import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Rental Car",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-dvh">
        <h1 className="text-3xl leading-[1.33] font-semibold">404: Page not found</h1>
      </div>
    </>
  );
}
