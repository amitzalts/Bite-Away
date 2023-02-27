//--------------------------------------------------------- INDEX
var _courier = loggedInCourier();
if (!_courier)
    throw new Error("no _courier found");
var courier = _courier;
console.log(courier.name);
function renderCourierHeader() {
    try {
        var courierHeader = document.querySelector("#courierHeader");
        if (courier && courierHeader) {
            courierHeader.innerText = "hello " + courier.name;
        }
    }
    catch (error) {
        console.error(error);
    }
}
//---------------------------------------------------------- VIEW
var courierId = document.querySelectorAll("#courierId");
var delieveryPool = document.querySelectorAll("#delieveryPool");
var resataurant = new Restaurant("name", "password", "email", "address", "type");
var customer1 = new Customer("orel", "1324", "e", "address");
// const courier1 = new Courier("dor", "1234", "email", "ashkelon");
// const courier2 = new Courier("dor", "1234", "email", "ashkelon");
// const courier3 = new Courier("dor", "1234", "email", "ashkelon");
// const courier4 = new Courier("dor", "1234", "email", "ashkelon");
// const courier5 = new Courier("dor", "1234", "email", "ashkelon");
var order1 = new Order("Tal", "new", "courier1", undefined, "Yafe Nof 34", "ready");
var order2 = new Order("Yuval", "new", "courier2", undefined, "Aharo n 21", "ready");
var order3 = new Order("Oren", "new", "courier3", undefined, "Ben Gurion 32", "ready");
var order4 = new Order("Moses", "new", "courier4", undefined, "Balfour 10", "ready");
var order5 = new Order("Gil", "new", "courier5", undefined, "Tel Nof 21", "ready");
var orders1 = [];
orders1.push(order1, order2, order3, order4, order5);
console.log(orders1);
