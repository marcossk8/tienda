import { ProductsResponseProduct } from '../../interfaces';
import { Card } from '@mui/material';
import { ProductCardActions } from './ProductCardActions';
import { ProductCardContent } from './ProductCardContent';
import { ProductCardMedia } from './ProductCardMedia';

interface Props {
    product: ProductsResponseProduct;
}

export const ProductCard = ({ product }: Props) => {
    return (
        <Card role="root-product-card" sx={{boxShadow: '4px 2px 6px -1px rgb(0 102 195 / 20%), 0px 1px 1px 0px rgb(0 102 195 / 14%), 0px 1px 3px 0px rgb(0 102 195 / 12%)'}}>
            <div data-testid="card-media">
                <ProductCardMedia 
                    imageUrl={product.imageUrl} 
                    brandName={product.brandName}
                />
            </div>
            <div data-testid="card-content">
                <ProductCardContent 
                    brandName={product.brandName}
                    name={product.name}
                    colour={product.colour}
                    pricePrevious={product.price.previous.value}
                    priceCurrent={product.price.current.value}
                />
            </div>
            <div data-testid="card-actions">
                <ProductCardActions />
            </div>
        </Card>
    )
}