import { render, screen } from '@testing-library/react';
import { Layout } from '../components/layouts';
import '@testing-library/jest-dom';

describe('Test in Layout component', () => {
    it('renders children', () => {

        render(
            <Layout>
                <p>Children</p>
            </Layout>
        )

        const children = screen.getByText('Children')

        expect(children).toBeInTheDocument()
    })
})
