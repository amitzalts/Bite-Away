//--------------------------------------------------------- INDEX
var _courier = loggedInCourier();
if (!_courier)
    throw new Error("no _courier found");
var courier = _courier;
console.log(courier.name);
console.log(courier);
//---------------------------------------------------------
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
function renderDroppedOrders() {
    try {
        var delieveryPool_1 = document.querySelector("#droppedOrdersRoot");
        var droppedOrders = droppedOrdersList();
        if (delieveryPool_1) {
            var html = droppedOrders
                .map(function (droppedOrders) {
                return "\n                <div class=\"main__drop-card\">\n                    <h1><span>name:</span> " + droppedOrders.name + " </h1>\n                    <h1><span>restId:</span>  " + droppedOrders.restaurantId + " </h1>\n                    <h3> <span>destination:</span> " + droppedOrders.destination + " </h3>\n                    <h3\"><span>status:</span> " + droppedOrders.status + " </h3>\n                </div>\n                ";
            })
                .join(" ");
            delieveryPool_1.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderActiveOrders() {
    try {
        var delieveryPool_2 = document.querySelector("#activeOrdersRoot");
        // const activeOrder = courier.orders;
        var activeOrders = courier.orders.filter(function (orders) { return orders.status === "Picked"; });
        if (delieveryPool_2) {
            var html = activeOrders
                .map(function (activeOrder) {
                return "\n                <div class=\"main__card\">\n                    <h1 class=\"main__card-name\" >name: " + activeOrder.name + " </h1>\n                    <h1 class=\"main__card-restaurant\">restaurantId: " + activeOrder.restaurantId + " </h1>\n                    <h1  class=\"main__card-order-id\" style=\"display:none;\">orderId: " + activeOrder.uid + " </h1>\n                    <h3 class=\"main__card-des\"> destination: " + activeOrder.destination + " </h3>\n                    <h3 class=\"main__card-status\">status: " + activeOrder.status + " </h3>\n                    <button onclick=\"dropOrder('" + activeOrder.customerId + "')\">Drop</button>\n                </div>\n                ";
            })
                .join(" ");
            delieveryPool_2.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderPool() {
    try {
        var delieveryPool_3 = document.querySelector("#openOrdersRoot");
        if (delieveryPool_3) {
            var html = orderPool
                .map(function (order) {
                return "\n                <div class=\"main__card\">\n                    <h1  class=\"main__card-name\"> <span>name: </span>" + order.name + " </h1>\n                    <h1 class=\"main__card-restaurant\"> <span>restaurant-ID:</span> " + order.restaurantId + " </h1>\n                    <h1  class=\"main__card-order-id\"><span> order-ID:</span> " + order.uid + " </h1>\n                    <h3  class=\"main__card-des\"> <span>destination:</span> " + order.destination + " </h3>\n                    <h3 class=\"main__card-status\"> <span>status:</span> " + order.status + " </h3>\n                    <button  onclick=\"pickupOrder('" + order.uid + "')\" class=\"pickupBtn\">Pick Up</button>\n                </div>\n                ";
            })
                .join(" ");
            delieveryPool_3.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}
//---------------------------------------------------------- VIEW
var courierId = document.querySelectorAll("#courierId");
var delieveryPool = document.querySelectorAll("#delieveryPool");
// function enterOrdersLocalStorage() {
//     const order1 = new Order("Tal", "new", "123", undefined, "Yafe Nof 34", "ready");
//     const order2 = new Order("Yuval", "new", "courier2", undefined, "Aharo n 21", "ready");
//     const order3 = new Order("Oren", "new", "courier3", undefined, "Ben Gurion 32", "ready");
//     const order4 = new Order("Moses", "new", "courier4", undefined, "Balfour 10", "ready");
//     const order5 = new Order("Gil", "new", "courier5", undefined, "Tel Nof 21", "ready");
//     const orders1: Order[] = [];
//     orders1.push(order1, order2, order3, order4, order5);
//     saveInLocalStorage(orders1 , "orderPool")
// }
