import Image from "next/image";
import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
  return (
    <main>
        <h1>Shopping List</h1>
        <StudentInfo />

         <Link href="/" className="text-pink-600 underline">
        Back to home 
      </Link>
    </main>
  );
}
