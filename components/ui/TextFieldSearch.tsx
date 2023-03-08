import { ChangeEventHandler } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';
import { SxProps, Theme } from '@mui/material';

interface Props {
    label?: string
    placeholder?: string;
    name: string;
    value: string;
    icon: boolean;
    size: 'small' | 'medium' | undefined;
    id?: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    sx?: SxProps<Theme>
}

export const TextFieldSearch = ({
    label,
    placeholder,
    name,
    icon = true,
    size = 'small',
    value,
    onChange,
    id,
    sx
}: Props) => {
    return (
        <TextField
            label={label}
            name={name}
            value={value}
            onChange={onChange}
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
