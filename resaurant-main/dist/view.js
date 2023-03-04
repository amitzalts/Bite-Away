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
            return "\n                <div class=\"menu__course\">\n                <button onclick=\"handleUpdateItem('" + course.uid + "')\">udpate</button>   \n                    <h3>" + course.name + "</h3>\n                    <div class=\"menu__course__detail\">\n                        <label>Price:</label>\n                        <div>" + course.price + "</div>\n                    </div>\n                    <div class=\"menu__course__detail\">\n                        <label>Description:</label>\n                        <div>" + course.description + "</div>\n                    </div>\n                    <div class=\"menu__course__detail\">\n                        <label>uid:</label>\n                        <div>" + course.uid + "</div>\n                    </div>    \n                    <button onclick=\"handleDeleteItem('" + course.uid + "')\">Remove</button>\n                </div>\n                ";
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
        var activeOrders = restaurant.orders.filter(function (activeOrder) { return activeOrder.status !== "initialized" || "Picked" || "Droppped"; });
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
// <button onclick="handleUpdatePrice()">Update</button>
