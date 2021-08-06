import axios from "axios";
import { ADD_PRODUCT_TO_CART_FAIL, ADD_PRODUCT_TO_CART_REQUEST, ADD_PRODUCT_TO_CART_SUCCESS, EMPTY_CART_AFTER_SUMBMISSION, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS,  GET_SINGLE_PRODUCT_FAIL, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS, REMOVE_SINGLE_PRODUCT } from "../actionTypes";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_PRODUCTS_REQUEST
        });

        const {data} = await axios.get('https://fakestoreapi.com/products');

        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: data,
        });

        

    } catch (error) {
        console.log(error.response.data);
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload: error.response.data
        })
    }
}

export const getSingleProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_SINGLE_PRODUCT_REQUEST
        });

        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);

        dispatch({
            type: GET_SINGLE_PRODUCT_SUCCESS,
            payload: data,
        });

        

    } catch (error) {
        console.log(error.response.data);
        dispatch({
            type: GET_SINGLE_PRODUCT_FAIL,
            payload: error.response.data
        });
    }
}

export const removeSingleProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: REMOVE_SINGLE_PRODUCT
        });      

    } catch (error) {
        console.log(error.message);
    }
}

export const addProductToCart = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_PRODUCT_TO_CART_REQUEST
        });  
        
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);

        dispatch({
            type: ADD_PRODUCT_TO_CART_SUCCESS,
            payload: data
        }); 

    } catch (error) {
        console.log(error);
        dispatch({
            type: ADD_PRODUCT_TO_CART_FAIL,
            payload: error.message
        });
    }
}

export const emptyCart = () => async (dispatch) => {
    try {
        dispatch({
            type: EMPTY_CART_AFTER_SUMBMISSION,
        }); 

    } catch (error) {
        console.log(error);
    }
}