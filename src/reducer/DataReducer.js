export const DataReducer = (state, { type, payload }) => {
   switch (type) {
      case 'SORT':
         return { ...state, sortBy: payload };
      default:
         break;
   }
};
