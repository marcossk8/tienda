import { useReducer } from 'react';
import { ProductsResponseProduct } from '@/interfaces';
import { CatalogContext } from './CatalogContext';
import { catalogReducer } from './catalogReducer';
import { GET_CATALOG, SORT_OR_FILTER_CATALOG } from './constants';

export interface CatalogState {
    isLoading: boolean;
    products: ProductsResponseProduct[];
    prevProducts: ProductsResponseProduct[];
}

const INITIAL_STATE: CatalogState = {
    isLoading: true,
    products: [],
    prevProducts: [],
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const CatalogProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(catalogReducer, INITIAL_STATE)

    const getProducts = (products: ProductsResponseProduct[]) => {
        dispatch({ type: GET_CATALOG, payload: products })
    }

    const sortOrFilterProducts = (products: ProductsResponseProduct[]) => {
        dispatch({ type: SORT_OR_FILTER_CATALOG, payload: products })
    }

    return (
        <CatalogContext.Provider
            value={{
                ...state,

                //Methods
                getProducts,
                sortOrFilterProducts,
            }}
        >
            {children}
        </CatalogContext.Provider>
    )
}