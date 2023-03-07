import { ProductsResponseProduct } from "@/interfaces";
import { useReducer } from "react";
import { CatalogContext } from "./CatalogContext";
import { catalogReducer } from "./catalogReducer";
import { GET_CATALOG } from "./constants";

export interface CatalogState {
    isLoading: boolean;
    products: ProductsResponseProduct[];
}

const INITIAL_STATE: CatalogState = {
    isLoading: true,
    products: []
}

interface Props {
    children: JSX.Element | JSX.Element[]
} 

export const CatalogProvider = ({ children }: Props) => {
    
    const [state, dispatch] = useReducer(catalogReducer, INITIAL_STATE)

    const getProducts = ( products: ProductsResponseProduct[] ) => {
        dispatch({ type: GET_CATALOG, payload: products });
    }

    return (
        <CatalogContext.Provider value={{ 
            ...state,

            //Methods
            getProducts
         }}>
            {children}
        </CatalogContext.Provider>
    )
}