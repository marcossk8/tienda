import { useContext, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { CatalogContext } from '@/context';
import { asosApi } from '@/api';
import { ProductsResponse, ProductsResponseProduct } from '@/interfaces';
import { Layout } from '@/components/layouts';
import { Catalog, NavBarFilters, NoResultsFound } from '@/components/ui';

interface Props {
    resultProducts: ProductsResponseProduct[];
}

export default function Home({ resultProducts }: Props) {
    const { getProducts, products } = useContext(CatalogContext)

    useEffect(() => {
        getProducts(resultProducts)
    }, [])

    return (
        <Layout title="Catalog of products">
            <NavBarFilters></NavBarFilters>
            {products?.length === 0 ? <NoResultsFound /> : <Catalog />}
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const options = {
        url: '/products/v2/list',
        params: {
            store: 'US',
            offset: '0',
            categoryId: '4208',
            limit: '10',
            country: 'US',
            sort: 'freshness',
            currency: 'USD',
            sizeSchema: 'US',
            lang: 'en-US',
        },
    }

    // Modify endpoint so that you can get all the contacts and thus take full advantage of the static props of next js
    const { data } = await asosApi.get<ProductsResponse>(`${options.url}`, {
        params: options.params,
    })

    return {
        props: {
            resultProducts: data.products,
        },
    }
}
