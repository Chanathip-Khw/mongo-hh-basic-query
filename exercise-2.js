db.pizzaOrders.findOne(
  { customer_name: "Zoe" },
  { total_price: 1, created_at: 1 }
);
