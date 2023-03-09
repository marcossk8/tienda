import { Box } from '@mui/material';
import { ButtonGroupFilter } from './ButtonGroupFilter';
import { TextFieldSearch } from './TextFieldSearch';

export const NavBarFilters = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                flexDirection: {xs: 'column-reverse', sm: 'column-reverse', md: 'row'}
            }}
        >
            <TextFieldSearch
                placeholder="Buscar"
                name="search"
                id="search"
                size="small"
                icon
                sx={{ width: {xs: '100%', sm: 400, md: 500}, marginTop: {xs: 2, sm: 2, md: 0} }}
            />

            <ButtonGroupFilter />
        </Box>
    )
}