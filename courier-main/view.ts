const courierId = document.querySelectorAll("#courierId");
const delieveryPool = document.querySelectorAll("#delieveryPool");

const resataurant = new Restaurant("name", "password", "email", "address", "type");

const customer1 = new Customer("orel", "1324", "e", "address");

const courier1 = new Courier("dor", "1234", "email", "ashkelon");
const courier2 = new Courier("dor", "1234", "email", "ashkelon");
const courier3 = new Courier("dor", "1234", "email", "ashkelon");
const courier4 = new Courier("dor", "1234", "email", "ashkelon");
const courier5 = new Courier("dor", "1234", "email", "ashkelon");

const order1 = new Order("name", resataurant, courier1, "address", "ready");
const order2 = new Order("name", resataurant, courier2, "address", "ready");
const order3 = new Order("name", resataurant, courier3, "address", "ready");
const order4 = new Order("name", resataurant, courier4, "address", "ready");
const order5 = new Order("name", resataurant, courier5, "address", "ready");


const orders1: Order[] = [];

orders1.push(order1, order2, order3, order4, order5);

console.log(orders);
