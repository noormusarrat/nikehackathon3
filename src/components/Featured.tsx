
import Link from "next/link";
export default function Featured() {
  return (
    <main className="m-4 ">
      <div>
        <h1 className="font-semibold text-xl py-5 px-10">Featured</h1>
      </div>
      <div
           className="bg-cover rounded-md bg-center bg-no-repeat h-screen w-full px-10" 
           style={{backgroundImage: "url('/Featured.png')"}}

      ></div>
      <div className="flex justify-center items-center flex-col gap-3 p-10 text-center">
        <h2 className=" text-4xl font-bold uppercase"> STEP INTO WHAT FEELS GOOD</h2>
        <p className="text-sm leading-5 w-[60%] pt-3 pb-2 text-center">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <Link href="/men" > 
        <button>Find Your Shoe</button>
        </Link>
      </div>
    </main>
  );
}
