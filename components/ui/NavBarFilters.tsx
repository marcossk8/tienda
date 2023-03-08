import { Box } from '@mui/system'
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
                fullWidth
                sx={{ width: 500 }}
            />

            <ButtonGroupFilter />
        </Box>
    )
}
