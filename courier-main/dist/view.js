var courierId = document.querySelectorAll("#courierId");
var delieveryPool = document.querySelectorAll("#delieveryPool");
var order1 = new Order("A", "232", "b", "c", 3322, "d");
var order2 = new Order("O", "232", "b", "c", 3322, "d");
var order3 = new Order("D", "232", "b", "c", 3322, "d");
var order4 = new Order("fsagh", "232", "b", "c", 3322, "d");
var order5 = new Order("wr", "232", "b", "c", 3322, "d");
var order6 = new Order("fsfsaffsafsfssafa", "232", "b", "c", 3322, "d");
var orders = [];
orders.push(order1, order2, order3, order4, order5, order6);
console.log(orders);