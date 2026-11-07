
import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="text-center">
        <h1 className="m-2" >Week 6</h1>
        <br></br>
          <ItemList />
        <br></br>
        <Link href="/" className="text-pink-600 underline">
            Back to home 
        </Link>
    </main>
  );
}