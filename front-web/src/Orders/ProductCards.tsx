import { type } from 'os';
import ProductsList from './ProductsList';
//import { ReactComponent as ImgPizza } from ''
import { Product } from './types';

type Props = {
    product: Product;
}

function formatPrice(price: number) {
    const formater = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return formater.format(price)
}

function ProductCards({product}: Props){
    return (
        <div className="order-card-container">
            <h3 className="orders-card-title">
                {product.name}
            </h3>
            <img src={product.imgUri} alt="pizza" 
                className="order-card-image"/>
            <h3 className="order-card-price">
                {formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <p>
                <h3>Descrição</h3>
                {product.description}
                </p>
            </div>
        </div>
    )
}

export default ProductCards;