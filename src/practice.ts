const menu = [
  { name: "piza-1", price: 10 },
  { name: "piza-2", price: 20 },
  { name: "piza-3", price: 30 },
  { name: "piza-4", price: 40 },
];

interface Pizza {
  name: string;
}

interface Pizza {
  price: number;
}

type Order = {
  id: number;
  pizza: Pizza;
} & { status: string };

const orderQueue: Order[] = [];
let cashInRegister = 100;
let id = 1;
/** 
create order function
 */

function addNewPizza(pizza: Pizza) {
  menu.push(pizza);
}

function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find(
    (pizzaObject) => pizzaObject.name === pizzaName,
  );

  if (!selectedPizza) {
    return null;
  }

  cashInRegister += selectedPizza.price;

  const newOrder = { id: id++, pizza: selectedPizza, status: "ordered" };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    return null;
  }
  order.status = "completed";
  return order;
}

addNewPizza({ name: "margerita", price: 100 });
placeOrder("margerita");
completeOrder(1);

console.log("Menu: ", menu);
console.log("Cash In Register: ", cashInRegister);
console.log("Order Queue: ", orderQueue);
