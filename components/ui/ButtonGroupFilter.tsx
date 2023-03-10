import { useContext, useState } from 'react';
import { Add, Remove } from '@mui/icons-material';
import { Button, ButtonGroup } from '@mui/material';
import { CatalogContext } from '../../context';
import { orderProducts } from '../../utilities';

export const ButtonGroupFilter = () => {
    const { products, sortOrFilterProducts } = useContext(CatalogContext)
    const [ activeButton, setActiveButton ] = useState('')

    const handleSortPrice = (key: 'minor' | 'major') => {
        products.sort((a, b) => {
            const aAux = a.price.current.value || 0
            const bAux = b.price.current.value || 0
            return orderProducts[key].func(aAux, bAux)
        })
        sortOrFilterProducts(products)
        setActiveButton(key)
    }

    return (
        <ButtonGroup
            disableElevation
            size="medium"
            aria-label="small button group"
        >
            <Button
                endIcon={<Remove />}
                variant={activeButton === 'minor' ? 'contained' : 'outlined'}
                onClick={() => handleSortPrice('minor')}
            >
                Menor precio
            </Button>
            <Button
                endIcon={<Add />}
                variant={activeButton === 'major' ? 'contained' : 'outlined'}
                onClick={() => handleSortPrice('major')}
            >
                Mayor precio
            </Button>
        </ButtonGroup>
    )
}