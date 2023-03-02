var pickUpBtns = document.querySelectorAll('.pick-up-btn');
function pickupOrder(uid) {
    try {
        if ((courier.orders.length === 0) || (courier.orders[courier.orders.length].status === "Picked")) {
            var order = orderPool.find(function (order) { return order.uid === uid; });
            var orderIndex = orderPool.findIndex(function (order) { return order.uid === uid; });
            if (orderIndex === -1)
                throw new Error("order not found");
            if (!order)
                throw new Error("order not found");
            order.status = "Picked";
            courier.orders.push(order);
            orderPool.splice(orderIndex, 1);
            saveInLocalStorage(orderPool, "orderPool");
            renderPool();
            renderActiveOrders();
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
function dropOrder() {
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
        var activeOrdersRoot = document.querySelector("#activeOrdersRoot");
        if (!activeOrdersRoot)
            throw new Error("active orders root not found");
        activeOrdersRoot.innerHTML = " ";
        saveInLocalStorage(customers, "customers");
        saveInLocalStorage(couriers, "couriers");
    }
    catch (error) {
        console.log(error);
    }
}
function droppedOrdersList() {
    var dropped = courier.orders.filter(function (orders) { return orders.status === "Dropped"; });
    return dropped;
}
