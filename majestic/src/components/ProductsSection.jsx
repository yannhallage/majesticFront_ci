import React from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

const ProductsSection = () => {
    return (
        <div className="py-16 bg-secondary">
            <div className="container space-y-16">
                {products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductsSection;