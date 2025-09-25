import { products } from "../products";

export default function AboutUsDetailsPage({params}) {
  console.log('typeof params.id', typeof params.id);
  
  const product = products.find((p) => p.id === Number(params.id));
  return (  <div>
    <h1>Product {product.name} details</h1>
    </div>
  );
}