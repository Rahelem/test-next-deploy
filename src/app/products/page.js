import Link from "next/link";
import {products} from './products';

export default function ProductsListPage() {
    return <div>
        <h1>Our Products</h1>
        <ul>
            {products.map((product) =>(
            <li key ={product.id}>
                <Link href={`/products/${product.id}`}>
                {product.name}
                </Link>
            </li>
        ))}
        </ul>
    </div>
}