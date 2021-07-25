export function getSortedData(productsList, sortBy) {
   if (sortBy && sortBy === 'LOW_TO_HIGH') {
      return productsList.sort((a, b) => a['price'] - b['price']);
   }

   if (sortBy && sortBy === 'HIGH_TO_LOW') {
      return productsList.sort((a, b) => b['price'] - a['price']);
   }

   return productsList;
}

export function getFilteredSize(productsList, size) {
   if (size.length > 0) {
      size.forEach((size) => {
         productsList = productsList.filter((product) =>
            product.sizes.includes(size),
         );
      });
   }
   return productsList;
}

export function getFilteredBrand(productsList, brand) {
   if (brand.length > 0) {
      productsList = productsList.filter((product) =>
         brand.includes(product.brand),
      );
   }
   return productsList;
}

export function getFilteredCategory(productsList, categories) {
   if (categories.length > 0) {
      productsList = productsList.filter((product) =>
         categories.includes(product.gender),
      );
   }
   return productsList;
}
