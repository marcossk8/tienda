import { ProductsResponseProduct } from "@/interfaces";
import { CatalogState } from "./CatalogProvider";
import { GET_CATALOG } from "./constants";

type CatalogAction = { type: 'GET_CATALOG', payload: ProductsResponseProduct[] };

export const catalogReducer = (state: CatalogState, action: CatalogAction): CatalogState => {
    switch (action.type) {
        case GET_CATALOG:
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
    
        default:
            return state;
    }
}