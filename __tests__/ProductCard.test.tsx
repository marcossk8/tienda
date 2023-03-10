import { render } from '@testing-library/react';
import { ProductCard } from '../components/ui';
import { ProductsResponseProduct } from '../interfaces';
import '@testing-library/jest-dom';

const product: ProductsResponseProduct = {
    advertisement: null,
    brandName: 'ASOS DESIGN',
    colour: 'Black',
    colourWayId: 202888850,
    facetGroupings: [],
    groupId: null,
    hasMultiplePrices: false,
    hasVariantColours: false,
    id: 202888831,
    imageUrl:
        'images.asos-media.com/products/asos-design-spray-on-jeans-with-power-stretch-denim-with-knee-rips-in-black/202888831-1-black',
    isSellingFast: true,
    name: 'ASOS DESIGN spray on jeans with power stretch denim with knee rips in black',
    price: {
        currency: 'USD',
        current: { text: '$29.00', value: 29 },
        isMarkedDown: false,
        isOutletPrice: false,
        previous: { text: '', value: null },
        rrp: { text: '', value: null },
    },
    productCode: 118878586,
    productType: 'Product',
    sponsoredCampaignId: null,
    url: 'asos-design/asos-design-spray-on-jeans-with-power-stretch-denim-with-knee-rips-in-black/prd/202888831?clr=black&colourWayId=202888850',
    videoUrl: null,
}

describe('Test in ProductCard component', () => {
    it('Renders childrens', () => {
        const { getByRole, getByTestId } = render(<ProductCard product={product} />)

        const root = getByRole('root-product-card');
        const cardMedia = getByTestId('card-media');
        const cardContent = getByTestId('card-content');
        const cardActions = getByTestId('card-actions');

        expect(root).toContainElement(cardMedia);
        expect(root).toContainElement(cardContent);
        expect(root).toContainElement(cardActions);
    })
})
