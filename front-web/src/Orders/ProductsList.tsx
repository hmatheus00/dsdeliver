import { type } from 'os';
import ProductCards from './ProductCards';
import { Product } from './types'

type Props = {
    products: Product[];
}

function ProductsList({ products }: Props){
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
               {products.map(product => (
                    <ProductCards key={product.id} product={product} />)
                )}
            </div>
        </div>
    )
}

export default ProductsList;