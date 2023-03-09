import { CardContent, Typography } from '@mui/material';

interface Props {
    brandName: string;
    name: string;
    colour: string;
    pricePrevious: number | null;
    priceCurrent: number | null;
}

export const ProductCardContent = ({
    brandName,
    name,
    colour,
    pricePrevious,
    priceCurrent,
}: Props) => {
    return (
        <CardContent>
            <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
                sx={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                }}
            >
                {brandName}
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                }}
            >
                {name}
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textTransform: 'initial', marginBottom: 3 }}
            >
                Color - {colour}
            </Typography>
            {pricePrevious && (
                <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ textDecoration: 'line-through' }}
                >
                    {pricePrevious} €
                </Typography>
            )}
            <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{
                    color: pricePrevious ? '#dc817e' : '#59595b',
                }}
            >
                {priceCurrent} €
            </Typography>
        </CardContent>
    )
}