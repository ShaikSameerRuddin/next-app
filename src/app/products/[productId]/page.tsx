const Product = ({ params }: { params: { productId: string } }) => {
  return <h1> Product {params.productId}</h1>;
};
export default Product;
