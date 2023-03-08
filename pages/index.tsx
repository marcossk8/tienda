import { useContext, useEffect } from "react";
import { CatalogContext } from "@/context";
import { GetStaticProps } from "next";
import { asosApi } from "@/api";
import { ProductsResponse, ProductsResponseProduct } from "@/interfaces";
import { Layout } from "@/components/layouts";
import { Catalog, NavBarFilters } from "@/components/ui";
interface Props {
  products: ProductsResponseProduct[];
} 

export default function Home({ products }: Props) {
  const { getProducts } = useContext(CatalogContext)

  useEffect(() => {
    getProducts(products)
  }, [])
  
  return (
    <Layout title="Catalog of products">
      <NavBarFilters></NavBarFilters>
      <Catalog />
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
      lang: 'en-US'
    }
  };

  // Modify endpoint so that you can get all the contacts and thus take full advantage of the static props of next js
  const { data } = await asosApi.get<ProductsResponse>(`${options.url}`, { params: options.params });
  
  return {
    props: {
      products: data.products
    },
  };
};
