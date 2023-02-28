function handleAddCourse(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var price = ev.target.elements.price.valueAsNumber;
        var description = ev.target.elements.description.value;
        restaurant.menu.push(new Course(name, price, description));
        saveMenu(restaurant.uid, restaurant.menu);
        ev.target.reset();
        renderMenuRest();
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteItem(uid) {
    try {
        var index = restaurant.menu.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("course not found");
        restaurant.menu.splice(index, 1);
        if (!courseRoot)
            throw new Error("courseRoot is undefined");
        renderMenuRest();
        saveMenu(restaurant.uid, restaurant.menu);
    }
    catch (error) {
        console.error(error);
    }
}
function updateStatus(uid) {
    try {
        var order = restaurant.orders.find(function (order) { return order.uid === uid; });
        if (!order)
            throw new Error("order not found");
        order.status = "ready";
        orderPool.push(order);
        saveInLocalStorage(restaurants, "restaurants");
        saveInLocalStorage(orderPool, "orderPool");
        renderActiveOrders();
        console.log("rest", restaurants);
        console.log("orderPool", orderPool);
    }
    catch (error) {
        console.error(error);
    }
}
