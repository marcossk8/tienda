import { SearchOff } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

export const NoResultsFound = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <SearchOff sx={{fontSize: 100}} color="secondary" />
            <Typography variant="h4" component="div" color="secondary" align="center">
                No se encontraron resultados.
            </Typography>
        </Box>
    )
}