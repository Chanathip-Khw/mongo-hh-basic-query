db.pizzaOrders.find({ quantity: { $lt: 5 }, credit_card_type: "mastercard" });
db.pizzaOrders.find({ quantity: { $lte: 5, $gte: 1 }, size: "small" });
db.pizzaOrders.find({ quantity: { $gt: 10 }, credit_card_type: null });
