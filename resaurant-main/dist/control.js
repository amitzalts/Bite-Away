var courseRoot = document.querySelector("#courseRoot"); //view
var _restaurant = loggedInRestaurant(); //index
if (!_restaurant)
    throw new Error("no restaurant found");
var restaurant = _restaurant; //index
function handleAddCourse(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var price = ev.target.elements.price.valueAsNumber;
        restaurant.menu.push(new Course(name, price));
        saveMenu(restaurant.uid, restaurant.menu);
        ev.target.reset();
        renderMenuRest();
    }
    catch (error) {
        console.error(error);
    }
}
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
            return "\n                <div class=\"course\">\n                    <h3>" + course.name + "</h3>\n                    <div>Price: " + course.price + " <button onclick=\"handleUpdatePrice()\">Update</button></div>\n                    <div>uid: " + course.uid + "</div>\n                    <button onclick=\"handleDeleteItem('" + course.uid + "')\">Remove</button>\n                </div>\n                ";
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
