import Image from "next/image";
import ItemList from "./item-list";
import Link from "next/link";

export const metadata ={
    title: "Shopping List",
}

export default function Page() {
  return (
    <main>
       <h1 className="text-center text-2xl font-semibold mb-4">Shopping List</h1>
        <ItemList />

        <Link href="/" className="text-pink-600 underline">
        Back to home 
      </Link>
    </main>
  );
}
