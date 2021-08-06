import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_FAIL, REMOVE_SINGLE_PRODUCT, ADD_PRODUCT_TO_CART_REQUEST, ADD_PRODUCT_TO_CART_SUCCESS, ADD_PRODUCT_TO_CART_FAIL, EMPTY_CART_AFTER_SUMBMISSION } from "../actionTypes";

const initialState= {
    products: [],
    loading: false,
}

export const productsReducer = (prevState = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...prevState,
                loading: true,
            }

        case GET_PRODUCTS_SUCCESS:
            return {
                ...prevState,
                products: payload,
                loading: false
            }

        case GET_PRODUCTS_FAIL:
            return {
                ...prevState,
                products: null,
                loading: false,
                error: payload
            }  

        default:
            return prevState;
    }
}

export const singleProductReducer = (prevState = {
    product: [],
    loading: false
}, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_SINGLE_PRODUCT_REQUEST:
            return {
                ...prevState,
                loading: true,
            }

        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...prevState,
                product: payload,
                loading: false
            }

        case GET_SINGLE_PRODUCT_FAIL:
            return {
                ...prevState,
                product: null,
                loading: false,
                error: payload
            }

        case REMOVE_SINGLE_PRODUCT:
            return {
                ...prevState,
                product: {},
                loading: false,
            }

        default:
            return prevState;
    }
}

export const addProductToCartReducer = (prevState = {
    products: [],
    loading: false,
    amountOfProducts: 0,
    // totalPrice: 0
}, action) => {
    const {type, payload} = action;

    switch (type) {
        case ADD_PRODUCT_TO_CART_REQUEST:
            return {
                ...prevState,
                loading: true,
            }

        case ADD_PRODUCT_TO_CART_SUCCESS:
            return {
                ...prevState,
                products: prevState.products.concat(payload),
                loading: false,
                amountOfProducts: prevState.amountOfProducts+1,
            }

        case ADD_PRODUCT_TO_CART_FAIL:
            return {
                ...prevState,
                products: [],
                loading: false,
                error: payload
            }

        case EMPTY_CART_AFTER_SUMBMISSION:
            return {
                ...prevState,
                products: [],
                submitted: true
            }

        default:
            return prevState;
    }
}

// export const emptyCartReducer = (prevState = {
//     products: [],
// }, action) => {
//     const {type, payload} = action;

//     switch (type) {
//         case EMPTY_CART_AFTER_SUMBMISSION:
//             return {
//                 ...prevState,
//                 products: [],
//                 submitted: true
//             }

//         default:
//             return prevState;
//     }
// }