import { Button, CardActions } from '@mui/material'

export const ProductCardActions = () => {
    return (
        <CardActions
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Button
                size="small"
                sx={{ textTransform: 'initial', marginBottom: 1 }}
                color="secondary"
            >
                más colores
            </Button>
            <Button
                size="small"
                sx={{ marginBottom: 2 }}
                variant="contained"
                disableElevation
            >
                AÑADIR
            </Button>
        </CardActions>
    )
}
