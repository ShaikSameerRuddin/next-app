'use client'
//  <Link> is a built-in component that extends the HTML <a> tag 
//   to provide prefetching and client-side navigation between routes. 
//   It is the primary way to navigate between routes in Next.js.
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <h2>homepage</h2>
      <Link href={'blogs'}>Blogs</Link>
      <button type="button" onClick={() => router.push('/profile')}>
      profile
    </button>
    </>
  );
}
