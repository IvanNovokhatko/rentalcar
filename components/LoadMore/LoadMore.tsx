interface LoadMoreProps {
  onClick: () => void;
  isLoading: boolean;
  isVisible: boolean;
}

export default function LoadMore( { onClick, isLoading, isVisible }: LoadMoreProps ) {
  if (!isVisible) return null;

  return (
    <>
      <button className="relative z-10 mt-12 mx-auto w-39 h-11 rounded-xl border border-light-blue font-semibold leading-[1.25] hover:border-dark-blue focus:outline-none transition-border duration-250 ease-in-out cursor-pointer" type="button" disabled={isLoading} onClick={onClick}>Load more</button>
    </>
  );
}
