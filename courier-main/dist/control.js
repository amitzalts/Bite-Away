var pickUpBtns = document.querySelectorAll('.pick-up-btn');
// const orderPool = getInfoFromStorage("orderPool") as Order[];
function renderPool() {
    try {
        var delieveryPool = document.querySelector("#openOrdersRoot");
        if (delieveryPool) {
            var html = orderPool
                .map(function (orderPool) {
                return "\n                <div class=\"order\">\n                    <h1> " + orderPool.name + " </h1>\n                    <h1> " + orderPool.restaurantId + " </h1>\n                    <h1 style=\"display:none;\" class=\"custId\"> " + orderPool.uid + " </h1>\n                    <h3> " + orderPool.destination + " </h3>\n                    <h3 class=\"status\"> " + orderPool.status + " </h3>\n                    <button  onclick=\"pickup('" + orderPool.uid + "')\" class=\"pickupBtn\">Pick Up</button>\n                </div>\n                ";
            })
                .join(" ");
            delieveryPool.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderActiveOrders() {
    try {
        var delieveryPool = document.querySelector("#activeOrdersRoot");
        var activeOrder = courier.orders;
        if (delieveryPool) {
            var html = activeOrder
                .map(function (activeOrder) {
                return "\n                <div class=\"order\">\n                    <h1> " + activeOrder.name + " </h1>\n                    <h1> " + activeOrder.restaurantId + " </h1>\n                    <h1 style=\"display:none;\" class=\"custId\"> " + activeOrder.uid + " </h1>\n                    <h3> " + activeOrder.destination + " </h3>\n                    <h3 class=\"status\"> " + activeOrder.status + " </h3>\n                    <button  onclick=\"drop('" + activeOrder.customerId + "')\" class=\"dropBtn\">Drop</button>\n                </div>\n                ";
            })
                .join(" ");
            delieveryPool.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderDroppedOrders() {
    try {
        var delieveryPool = document.querySelector("#droppedOrdersRoot");
        var droppedOrders = droppedOrdersList();
        if (delieveryPool) {
            var html = droppedOrders
                .map(function (droppedOrders) {
                return "\n                <div class=\"order\">\n                    <h1> " + droppedOrders.name + " </h1>\n                    <h1> " + droppedOrders.restaurantId + " </h1>\n                    <h1 style=\"display:none;\" class=\"custId\"> " + droppedOrders.uid + " </h1>\n                    <h3> " + droppedOrders.destination + " </h3>\n                    <h3 class=\"status\"> " + droppedOrders.status + " </h3>\n                </div>\n                ";
            })
                .join(" ");
            delieveryPool.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function pickup(uid) {
    try {
        if (courier.orders.length === 0) {
            var order = orderPool.find(function (order) { return order.uid === uid; });
            var orderIndex = orderPool.findIndex(function (order) { return order.uid === uid; });
            if (orderIndex === -1)
                throw new Error("order not found");
            if (!order)
                throw new Error("order not found");
            order.status = "Picked";
            courier.orders.push(order);
            orderPool.splice(orderIndex, 1);
            renderPool();
            renderActiveOrders();
            saveInLocalStorage(orderPool, "orderPool");
        }
        else {
            alert("You already have an active order.");
        }
    }
    catch (error) {
        console.log(error);
    }
}
;
function drop() {
    try {
        var activeOrder_1 = courier.orders[0];
        var customer = customers.find(function (customer) { return customer.uid === activeOrder_1.customerId; });
        if (!customer)
            throw new Error("no customer found");
        var customerActiveOrder = customer.orders.find(function (activeOrder) { return activeOrder.uid === activeOrder.uid; });
        if (!customerActiveOrder)
            throw new Error("no customer order found");
        activeOrder_1.status = "Dropped";
        customerActiveOrder.status = "Dropped";
        saveInLocalStorage(customers, "customers");
        saveInLocalStorage(couriers, "couriers");
        var activeOrdersRoot = document.querySelector("#activeOrdersRoot");
        if (!activeOrdersRoot)
            throw new Error("active orders root not found");
        activeOrdersRoot.innerHTML = " ";
        courier.orders.pop();
    }
    catch (error) {
        console.log(error);
    }
}
function droppedOrdersList() {
    var dropped = courier.orders.filter(function (orders) { return orders.status === "Dropped"; });
    return dropped;
}
