function renderRestaurants() {
    try {
        var restaurantRoot = document.querySelector("#restaurantRoot");
        if (!restaurantRoot)
            throw new Error("the restaurantRoot no found");
        var html_1 = '';
        restaurants.forEach(function (restaurant) {
            html_1 +=
                "\n                            <div id=uid-" + restaurant.uid + " class=\"results__restaurant\">\n                            <div id=uid-" + restaurant.uid + "Root ></div>\n                                <div class=\"results__restaurant__wrapper\">\n                                    <span>Name: " + restaurant.name + " </span>\n                                    <span>Address: " + restaurant.address + " </span>\n                                    <span>Type: " + restaurant.type + " </span>\n                                </div>\n                                <button onclick=\"openMenu('" + restaurant.uid + "')\">open menu</button>    \n                            </div>\n                            ";
        });
        restaurantRoot.innerHTML = html_1;
        return html_1;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderMenu(uid) {
    try {
        var index = restaurants.findIndex(function (restaurant) { return restaurant.uid === uid; });
        var html = '';
        html = "\n   <div class=\"menu\">" + restaurants[index].name + " \n        <button class=\"menu__close\" onclick=\"closeMenu('" + uid + "')\">close</button>\n        <div id=menuRoot" + uid + "></div>\n   </div>\n   ";
        return html;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
function renderMenuForCustomer(uid) {
    try {
        var index = restaurants.findIndex(function (restaurant) { return restaurant.uid === uid; });
        console.log(index);
        var html = restaurants[index].menu
            .map(function (course) {
            console.log(course.uid);
            return "\n            <form onsubmit=\"handleAddToCart(event)\">    \n                <div class=\"course\">\n                    <h3>" + course.name + "</h3>\n                    <div>Price: " + course.price + "</div>\n                    <input type=\"number\" name=\"qty\" placeholder=\"0\" required>\n                    <input type=\"hidden\" id=\"" + course.uid + "\" name=\"" + course.name + "\" value=\"" + course.name + "\">\n                    <input type=\"submit\" value=\"Add to Cart\">\n                </div>\n            </form>    \n            ";
        })
            .join(" ");
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderCustomerHeader() {
    try {
        var customerHeader = document.querySelector("#customerHeader");
        var customer = loggedInCustomer();
        if (customer && customerHeader) {
            customerHeader.innerText = "" + customer.name;
        }
    }
    catch (error) {
        console.error(error);
    }
}
