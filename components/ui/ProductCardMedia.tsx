import { Box, CardMedia } from '@mui/material'

interface Props {
    brandName: string;
    imageUrl: string;
}

export const ProductCardMedia = ({ imageUrl, brandName }: Props) => {
    return (
        <Box sx={{ margin: 1 }}>
            <CardMedia
                sx={{ height: 140, borderRadius: 2 }}
                image={`https://${imageUrl}`}
                title={brandName}
            />
        </Box>
    )
}
