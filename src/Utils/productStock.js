export function productStock(product){
  let amount = 0;
  Object.entries(product.sizeamount).forEach(([key, value]) => {
    amount = amount + value
  });
  if(amount === 0){
    return true
  }
  else {return false}
};