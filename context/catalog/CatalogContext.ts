import { createContext } from "react";
import { ProductsResponseProduct } from "@/interfaces";

export interface CatalogContextProps {
    isLoading: boolean;
    products: ProductsResponseProduct[];
    getProducts: (products: ProductsResponseProduct[]) => void
}

export const CatalogContext = createContext<CatalogContextProps>({} as CatalogContextProps);