import { Oval } from 'react-loader-spinner'

export default function Loader() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-dvh bg-bg/89">
        <div className="absolute z-30 top-[calc(50%-144px)] left-[calc(50%-271.5px)] flex flex-col items-center py-12 w-135.75 h-72 rounded-2xl bg-white">
          <Oval
            visible={true}
            height="72"
            width="72"
            strokeWidth="4"
            color="#00aad4"
            secondaryColor="#f7f7f7"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass="[&_path]:[stroke-linecap:round]"
          />
          
          <h2 className="mt-8 font-semibold text-2xl text-center leading-[1.33]">Loading cars...</h2>
          <p className="mt-4 max-w-87.75 font-medium text-center leading-[1.25]">Please wait while we fetch the best cars for you</p>
        </div>
      </div>
    </>
  );
}
