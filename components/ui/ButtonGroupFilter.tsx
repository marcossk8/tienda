import { useContext } from 'react';
import { Add, Remove } from '@mui/icons-material';
import { Button, ButtonGroup } from '@mui/material';
import { CatalogContext } from '@/context';
import { orderProducts } from '@/utilities';

export const ButtonGroupFilter = () => {
    const { products, getProducts } = useContext(CatalogContext)

    const handleSortPrice = (key: 'minor' | 'major') => {
        products.sort((a, b) => {
            const aAux = a.price.current.value || 0
            const bAux = b.price.current.value || 0
            return orderProducts[key].func(aAux, bAux)
        })
        getProducts(products)
    }

    return (
        <ButtonGroup
            disableElevation
            size="medium"
            aria-label="small button group"
        >
            <Button endIcon={<Remove />} onClick={() => handleSortPrice('minor')}>
                Menor precio
            </Button>
            <Button endIcon={<Add />} onClick={() => handleSortPrice('major')}>
                Mayor precio
            </Button>
        </ButtonGroup>
    )
}
