import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <p className="text-bold">My Next Started App!</p>
      <Link href="/movie">My Movies </Link><br/>
      <Link href="/product">My product </Link>
      <Link href="/about">About </Link>
    </div>
  );
}
