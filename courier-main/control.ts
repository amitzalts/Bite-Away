const pickUpBtns = document.querySelectorAll('.pick-up-btn');



function pickupOrder(uid: string) {
    try {
        if ((courier.orders.length === 0) || (courier.orders[courier.orders.length].status === "Picked")) {
            const order = orderPool.find(order => order.uid === uid);
            const orderIndex = orderPool.findIndex(order => order.uid === uid);
            if (orderIndex === -1) throw new Error("order not found");
            if (!order) throw new Error("order not found")
            order.status = "Picked";
            courier.orders.push(order)
            orderPool.splice(orderIndex, 1)
            saveInLocalStorage(orderPool, "orderPool");
            
            renderPool();
            renderActiveOrders();
        }
        else {
            alert("You already have an active order.")
        }

    } catch (error) {
        console.log(error);

    }
};

function dropOrder() {
    try {
        const activeOrder = courier.orders[0];
        const customer = customers.find(customer => customer.uid === activeOrder.customerId);
        if (!customer) throw new Error("no customer found");
        const customerActiveOrder = customer.orders.find(activeOrder => activeOrder.uid === activeOrder.uid);
        if (!customerActiveOrder) throw new Error("no customer order found");
        activeOrder.status = "Dropped";
        customerActiveOrder.status = "Dropped";
        const activeOrdersRoot = document.querySelector("#activeOrdersRoot");
        if (!activeOrdersRoot) throw new Error("active orders root not found");
        activeOrdersRoot.innerHTML = " ";
        saveInLocalStorage(customers, "customers");
        saveInLocalStorage(couriers, "couriers");
    } catch (error) {
        console.log(error);

    }
}

function droppedOrdersList() {
    const dropped = courier.orders.filter(orders => orders.status === "Dropped");
    return dropped;
}