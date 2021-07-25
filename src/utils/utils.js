export function getSortedData(productsList, sortBy) {
   if (sortBy && sortBy === 'LOW_TO_HIGH') {
      return productsList.sort((a, b) => a['price'] - b['price']);
   }

   if (sortBy && sortBy === 'HIGH_TO_LOW') {
      return productsList.sort((a, b) => b['price'] - a['price']);
   }

   return productsList;
}
