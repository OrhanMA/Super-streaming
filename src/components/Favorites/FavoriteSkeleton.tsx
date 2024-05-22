import { Skeleton } from "../ui/skeleton";

export default function FavoriteSkeleton() {
  return (
    <>
      {" "}
      <>
        {Array.from(
          [0, 1, 2, 3].map((_, index) => {
            return (
              <Skeleton
                key={index}
                className="m-4 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-transparent border-none flex flex-col justify-center items-center overflow-hidden gap-2"
              >
                <Skeleton className="w-[400px] h-[350px] sm:min-w-[400px] sm:min-h-[350px] lg:min-h-[390px] max-w-[300px]"></Skeleton>
                <Skeleton className="w-full h-10"></Skeleton>
              </Skeleton>
            );
          })
        )}
      </>
    </>
  );
}
