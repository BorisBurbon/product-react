import {PRODUCTS_PENDING, PRODUCTS_FULLFILED, PRODUCTS_REJECTED} from "../actions/products";

const defaultState = {
  pending: false,
  error: false,
  products: [
    {
      "id": 1,
      "title": "product1",
      "img": "img1.png",
      "text": "lorem ipsum 1"
    },
    {
      "id": 2,
      "title": "product2",
      "img": "img2.png",
      "text": "lorem ipsum 2"
    }
  ]
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case PRODUCTS_PENDING: {
      return {...state, pending: true};

    }
    case PRODUCTS_REJECTED: {
      return {
        ...state,
        pending: false,
        error: action.payload
      }

    }
    case PRODUCTS_FULLFILED: {
      return {
        ...state,
        pending: false,
        products: action.payload.data
      }

    }
    default:
      return state;
  }
  //return state;
}
