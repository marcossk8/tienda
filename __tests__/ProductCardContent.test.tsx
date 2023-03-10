import { render } from '@testing-library/react';
import { ProductCardContent } from '../components/ui';
import '@testing-library/jest-dom';

const propsContent = {
    brandName: 'ASOS DESIGN',
    colour: 'Black',
    name: 'ASOS DESIGN spray on jeans with power stretch denim with knee rips in black',
    pricePrevious: null,
    priceCurrent: 29
}

describe('Test price value in ProductCardContent component', () => {
    it('Check that it is shown and that the price is equal to what you receive by parameters', () => {
        const { getByTestId } = render(<ProductCardContent {...propsContent} />)

        const priceValue = getByTestId('card-content-price').textContent;
        const priceNumber = Number(priceValue?.slice(0, -1))
        expect(priceNumber).toEqual(propsContent.priceCurrent)
    })
})
