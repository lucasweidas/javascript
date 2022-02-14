function calculateTotalPurchase(items, { shipping = shipping_default, discount = 0 } = {}) {
  if (items == null || items.length === 0) return 0;

  const itemCost = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const discountRate = 1 - discount;

  return itemCost * discountRate * tax_rate + shipping;
}

const tax_rate = 1.1;
const shipping_default = 5;

const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 },
];

console.log(calculateTotalPurchase());
console.log(calculateTotalPurchase(testItems));
console.log(calculateTotalPurchase(undefined, {}));
console.log(calculateTotalPurchase([], {}));
console.log(calculateTotalPurchase(testItems, {}));
console.log(calculateTotalPurchase(testItems, { shipping: 0 }));
console.log(calculateTotalPurchase(testItems, { discount: 0.75 }));
console.log(calculateTotalPurchase(testItems, { shipping: 12 }));
