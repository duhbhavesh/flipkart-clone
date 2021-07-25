import { initialState } from '../context/DataContext';

export const DataReducer = (state, { type, payload }) => {
   switch (type) {
      case 'SORT':
         return { ...state, sortBy: payload };

      case 'SET_SIZE':
         return { ...state, size: [...state.size, payload] };

      case 'REMOVE_SIZE':
         return {
            ...state,
            size: state.size.filter((size) => size !== payload),
         };

      case 'SET_BRAND':
         return { ...state, brand: [...state.brand, payload] };

      case 'REMOVE_BRAND':
         return {
            ...state,
            brand: state.brand.filter((brand) => brand !== payload),
         };

      case 'SET_CATEGORY':
         return { ...state, categories: [...state.categories, payload] };

      case 'REMOVE_CATEGORY':
         return {
            ...state,
            categories: state.categories.filter(
               (category) => category !== payload,
            ),
         };

      case 'RESET_STATE':
         return initialState;

      default:
         break;
   }
};
