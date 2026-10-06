import NewItem from "./new-item";
import Link from "next/link";

export default function Page() {
  return (
    <main className="text-center">
        <h1 className="m-2" >Week 4</h1>
        <br></br>
        <NewItem />
        <br></br>
        <Link href="/" className="text-pink-600 underline">
            Back to home 
        </Link>
    </main>
  );
}