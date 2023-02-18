const courierId = document.querySelectorAll("#courierId");
const delieveryPool = document.querySelectorAll("#delieveryPool");

const order1 = new Order("A", "232", "b", "c",3322, "d");
const order2 = new Order("O", "232", "b", "c",3322, "d");
const order3 = new Order("D", "232", "b", "c",3322, "d");
const order4 = new Order("fsagh", "232", "b", "c",3322, "d");
const order5 = new Order("wr", "232", "b", "c",3322, "d");
const order6 = new Order("fsfsaffsafsfssafa", "232", "b", "c",3322, "d");

const orders: Order[] = [];

orders.push(order1, order2, order3, order4, order5, order6);

console.log(orders);
