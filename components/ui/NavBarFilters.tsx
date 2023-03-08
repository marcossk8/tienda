import { Box } from '@mui/material'
import { useState } from 'react'
import { ButtonGroupFilter } from './ButtonGroupFilter'
import { TextFieldSearch } from './TextFieldSearch'

export const NavBarFilters = () => {
    const [searchValue, setSearchValue] = useState("")

    const handleChangeSearch = () => {
      
    }

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
                value={searchValue}
                size="small"
                onChange={handleChangeSearch}
                icon
                sx={{ width: {xs: 260, sm: 400, md: 500}, marginTop: {xs: 2, sm: 2, md: 0} }}
            />

            <ButtonGroupFilter />
        </Box>
    )
}
