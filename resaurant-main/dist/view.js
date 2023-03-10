var courseRoot = document.querySelector("#courseRoot");
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
        console.log("restaurant", restaurant);
        var html = menu
            .map(function (course) {
            return "\n                <div class=\"menu__course\">\n                <button id=\"update-" + course.uid + "\" onclick=\"handleUpdateCourse('" + course.uid + "')\">udpate</button>   \n                <button style=\"display:none\" id=\"save-" + course.uid + "\" onclick=\"saveUpdatedCourse('" + course.uid + "')\">save</button>   \n                    <h3 id=\"upadteName-" + course.uid + "\" contenteditable=\"false\">" + course.name + "</h3>\n                    <div class=\"menu__course__detail\">\n                        <label>Price:</label>\n                        <div id=\"upadtePrice-" + course.uid + "\" contenteditable=\"false\">" + course.price + "</div>\n                    </div>\n                    <div class=\"menu__course__detail\">\n                        <label>Description:</label>\n                        <div id=\"upadteDescription-" + course.uid + "\" contenteditable=\"false\">" + course.description + "</div>\n                    </div>\n                    <div class=\"menu__course__detail\">\n                        <label>uid:</label>\n                        <div>" + course.uid + "</div>\n                    </div>\n                    <img class=\"menu__course__image\" src=\"" + course.imageUrl + "\">  \n                    <button onclick=\"handleDeleteItem('" + course.uid + "')\">Remove</button>\n                </div>\n                ";
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
        console.log(activeOrders);
        var html = activeOrders
            .map(function (order) {
            console.log("order", order);
            console.log("sum", order.sum());
            return "\n                <div class=\"activeOrders__order\">order uid: " + order.uid + "\n                    <div class=\"activeOrders__order__detail\">customer uid: " + order.customerId + "</div>\n                    <div class=\"activeOrders__order__detail\">order destination: " + order.destination + "</div>\n                    <div id=\"coursesRoot\" class=\"activeOrders__order__detail\">courses: " + (JSON.stringify(order.instanceCounter())).slice(1, -1) + " </div>\n                    <div id=\"SumRoot\" class=\"activeOrders__order__detail\">sum: " + order.sum() + " </div>\n                    <button onclick=\"updateStatus('" + order.uid + "')\">" + order.status + "</button>\n                </div>\n                ";
        })
            .join(" ");
        if (!activeOrderRoot)
            throw new Error("activeOrderRoot was not found");
        activeOrderRoot.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderRestaurantProfileImage() {
    try {
        var restaurantImage = document.querySelector("#restaurantProfileImageRoot");
        if (restaurant && restaurantImage) {
            restaurantImage.innerHTML = "\n            <img class=\"menu__course__image\" src=\"" + restaurant.imageUrl + "\">\n            ";
        }
    }
    catch (error) {
        console.error(error);
    }
}
