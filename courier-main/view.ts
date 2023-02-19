const courierId = document.querySelectorAll("#courierId");
const delieveryPool = document.querySelectorAll("#delieveryPool");

const resataurant = new Restaurant("name", "password", "email", "address", "type");

const customer1 = new Customer("orel", "1324", "e", "address");

const courier1 = new Courier("dor", "1234", "email", "ashkelon");
const courier2 = new Courier("dor", "1234", "email", "ashkelon");
const courier3 = new Courier("dor", "1234", "email", "ashkelon");
const courier4 = new Courier("dor", "1234", "email", "ashkelon");
const courier5 = new Courier("dor", "1234", "email", "ashkelon");

const order1 = new Order("Tal", resataurant, courier1, "Yafe Nof 34", "ready");
const order2 = new Order("Yuval", resataurant, courier2, "Aharon 21", "ready");
const order3 = new Order("Oren", resataurant, courier3, "Ben Gurion 32", "ready");
const order4 = new Order("Moses", resataurant, courier4, "Balfour 10", "ready");
const order5 = new Order("Gil", resataurant, courier5, "Tel Nof 21", "ready");


const orders1: Order[] = [];

orders1.push(order1, order2, order3, order4, order5);

console.log(orders);
