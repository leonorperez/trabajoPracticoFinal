export const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="w-16 h-16 relative animate-spin">
        <img src="/poke_Ball_icon.svg" alt="Loading..." className="w-full h-full" />
      </div>
    </div>
  );
};
