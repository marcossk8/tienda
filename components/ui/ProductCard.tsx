import { ProductsResponseProduct } from '@/interfaces';
import { Card } from '@mui/material';
import { ProductCardActions } from './ProductCardActions';
import { ProductCardContent } from './ProductCardContent';
import { ProductCardMedia } from './ProductCardMedia';

interface Props {
    product: ProductsResponseProduct;
}

export const ProductCard = ({ product }: Props) => {
    return (
        <Card sx={{boxShadow: '0px 2px 1px -1px rgb(0 102 195 / 20%), 0px 1px 1px 0px rgb(0 102 195 / 14%), 0px 1px 3px 0px rgb(0 102 195 / 12%)'}}>
            <ProductCardMedia imageUrl={product.imageUrl} brandName={product.brandName} />
            <ProductCardContent 
                brandName={product.brandName}
                name={product.name}
                colour={product.colour}
                pricePrevious={product.price.previous.value}
                priceCurrent={product.price.current.value}
            />
            <ProductCardActions />
        </Card>
    )
}
