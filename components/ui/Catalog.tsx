import { useContext } from 'react'
import { CatalogContext } from '@/context'
import { ProductCard } from './ProductCard'
import { Box } from '@mui/material'

export const Catalog = () => {
    const { products, isLoading } = useContext(CatalogContext)

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(5, 1fr)',
                },
                gap: 2,
                marginTop: 3,
            }}
        >
            {!isLoading ? (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <div></div>
            )}
        </Box>
    )
}
