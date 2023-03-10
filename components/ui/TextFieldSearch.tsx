import { ChangeEvent, useContext, useRef } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';
import { SxProps, Theme } from '@mui/material';
import { CatalogContext } from '../../context';

interface Props {
    label?: string;
    placeholder?: string;
    name: string;
    icon: boolean;
    size: 'small' | 'medium' | undefined;
    id?: string;
    sx?: SxProps<Theme>
}

export const TextFieldSearch = ({
    label,
    placeholder,
    name,
    icon = true,
    size = 'small',
    id,
    sx
}: Props) => {

    const { prevProducts, sortOrFilterProducts } = useContext(CatalogContext)
    const debounceRef = useRef<NodeJS.Timeout>()

    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) clearTimeout(debounceRef.current)

        debounceRef.current = setTimeout(() => {
            const value = event.target.value?.toLowerCase()
            const products = prevProducts.filter(
                (item) =>
                    item.brandName.toLowerCase().includes(value) ||
                    item.name.toLowerCase().includes(value) ||
                    item.colour.toLowerCase().includes(value) ||
                    `${item.price.current.value}`.includes(value)
            )
            sortOrFilterProducts(products)
        }, 350)
    }

    return (
        <TextField
            label={label}
            name={name}
            onChange={handleChangeSearch}
            size={size}
            id={id}
            placeholder={placeholder}
            sx={sx}
            InputProps={{
                startAdornment: icon && (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                ),
            }}
        />
    )
}