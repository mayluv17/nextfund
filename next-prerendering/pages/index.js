import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>NextJs pre rendering</div>
      <Link href="/blog">Blog</Link>
    </>
  );
}
