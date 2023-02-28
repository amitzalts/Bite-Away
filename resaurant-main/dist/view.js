var courseRoot = document.querySelector("#courseRoot"); //view
function renderRestaurantHeader() {
    try {
        var restaurantHeader = document.querySelector("#restaurantHeader");
        if (restaurant && restaurantHeader) {
            restaurantHeader.innerText = "" + restaurant.name;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderMenuRest() {
    try {
        var menu = restaurant.menu;
        var html = menu
            .map(function (course) {
            return "\n                <div class=\"course\">\n                    <h3>" + course.name + "</h3>\n                    <div>Price: " + course.price + " <button onclick=\"handleUpdatePrice()\">Update</button></div>\n                    <div>Description: " + course.description + " </div>\n                    <div>uid: " + course.uid + "</div>\n                    <button onclick=\"handleDeleteItem('" + course.uid + "')\">Remove</button>\n                </div>\n                ";
        })
            .join(" ");
        if (!courseRoot)
            throw new Error("courseRoot is null");
        courseRoot.innerHTML = html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderActiveOrders() {
    try {
        var activeOrderRoot = document.querySelector("#activeOrderRoot");
        var activeOrders = restaurant.orders.filter(function (activeOrder) { return activeOrder.status !== "initialized"; });
        var html = activeOrders
            .map(function (order) {
            return "\n                <div class=\"activeOrders__order\">order uid: " + order.uid + "\n                    <button onclick=\"updateStatus('" + order.uid + "')\">" + order.status + "</button>\n                </div>\n                ";
        })
            .join(" ");
        if (!activeOrderRoot)
            throw new Error("activeOrderRoot is null");
        activeOrderRoot.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
