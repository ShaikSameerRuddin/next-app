'use client'
import Link from "next/link"; // Linking to Dynamic Segments
import { usePathname } from "next/navigation"; // Checking Active Links

const Products = () => {
  const pathname = usePathname(); //You can use usePathname() to determine if a link is active
  return (
    <>
      <h1>All Products </h1>
      <ul>
        {[1, 2, 3, 4, 5].map((post, index) => (
          <li key={index}>
            <Link href={`/products/${post}`}>{`Product ${post}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Products;
