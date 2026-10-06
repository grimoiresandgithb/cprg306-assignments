import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-semibold">CPRG 306: Web Development 2 - Assignments</h1>

      <Link href="/week-2" className="text-pink-600 underline">
        Go to Week 2 Assignment 
      </Link>
      <br></br>
      <Link href="/week-3" className="text-pink-600 underline">
        Go to Week 3 Assignment 
      </Link>
      <br></br>
      <Link href="/week-4" className="text-pink-600 underline">
        Go to Week 4 Assignment 
      </Link>
      <br></br>
      <Link href="/week-5" className="text-pink-600 underline">
        Go to Week 5 Assignment 
      </Link>
    </main>
  );
}
