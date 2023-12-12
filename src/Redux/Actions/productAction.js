import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
} from "../ActionType/productActionType";
import data from "../../Data/data";




// export const getHomeProductAction = () => (dispatch) => {
//   dispatch({
//     type: GET_PRODUCTS_START,
//   });
//   dispatch({
//     type: GET_PRODUCTS_SUCCESS,
//     payload: data,
//   });
// };



export const getHomeProductAction = () => (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_START,
  });
  axios
    .get(`https://fakestoreapi.com/products`)
    .then((response) => {
      setTimeout(() => {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    })
    .catch((error) => {
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: error,
      });
    });
};
