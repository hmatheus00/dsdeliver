import React from 'react';
import { type } from 'os';
import ProductsList from './ProductsList';
import { Product } from './types';
import { formatPrice} from './helpers'

type Props = {
    product: Product;
    onSelectProduct: (product: Product) => void;
    isSelected: boolean;
}

function ProductCards({product, onSelectProduct, isSelected}: Props){
    return (
        <div 
            className={`order-card-container ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelectProduct(product) }>
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