// Initial state
export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};


// Reducer function to handle actions
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Add item to the basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // Remove item from the basket (example if you want to add remove functionality)
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1); // Remove item at the index
      } else {
        console.warn(`Can't remove product with id: ${action.id}`);
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
