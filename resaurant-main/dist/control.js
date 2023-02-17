var menu = [];
var courseRoot = document.querySelector("#courseRoot"); //view
var restaurantHeader = document.querySelector("#restaurantHeader"); //view
restaurants.push(new Restaurant('Amit', '1234', 'amitzalts@gmail.com', 'ela 5', 'italian'));
function loggedInRestaurant() {
    var restaurant = restaurants.find(function (restaurant) { return restaurant.uid; });
    if (!restaurant) {
        throw new Error("could not find logged in restaurant");
    }
    else {
        return restaurant;
    }
}
function handleAddCourse(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var price = ev.target.elements.price.valueAsNumber;
        var _restaurant = loggedInRestaurant();
        var restaurant = _restaurant.name; ///////
        menu.push(new Course(name, restaurant, price));
        ev.target.reset();
        if (!courseRoot)
            throw new Error("courseRoot is null");
        courseRoot.innerHTML = renderMenu(menu);
    }
    catch (error) {
        console.error(error);
    }
}
function renderRestaurantHeader() {
    try {
        var restaurant = loggedInRestaurant();
        if (restaurant && restaurantHeader) {
            restaurantHeader.innerText = "" + restaurant.name;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderMenu(menu) {
    try {
        var restaurant = loggedInRestaurant();
        if (!restaurant)
            throw new Error("logged in restaurant not found");
        if (!menu || !Array.isArray(menu))
            throw new Error("menu is not an array");
        var html = menu
            .map(function (course) {
            return "\n            <div class=\"course\">\n                <h3>" + course.name + "</h3>\n                <div>Price: " + course.price + " <button onclick=\"handleUpdatePrice()\">Update</button></div>\n                <div>uid: " + course.uid + "</div>\n                <div>restaurant: " + course.restaurant + "</div>\n                <button onclick=\"handleDeleteItem('" + course.uid + "')\">Remove</button>\n            </div>\n            ";
        })
            .join(" ");
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function handleDeleteItem(uid) {
    try {
        var index = menu.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("course not found");
        menu.splice(index, 1);
        if (!courseRoot)
            throw new Error("courseRoot is undefined");
        courseRoot.innerHTML = renderMenu(menu);
    }
    catch (error) {
        console.error(error);
    }
}
