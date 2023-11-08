import Link from "next/link";


const Product = ({ params }: { params: { productId: string } }) => {
  return (
    <>
      <h1> Product {params.productId}</h1>
      <Link href={'/products'}>All Products</Link>
    </>
  );
};
export default Product;
