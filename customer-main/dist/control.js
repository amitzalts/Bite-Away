var amit = new Restaurant("amit", "a", "b", "c", "d");
var orel = new Restaurant("orel", "e", "f", "g", "h");
var dor = new Restaurant("dor", "i", "j", "k", "l");
var zalts = new Restaurant("zalts", "m", "n", "o", "p");
var karako = new Restaurant("karako", "q", "r", "s", "t");
var book = new Restaurant("book", "u", "v", "w", "x");
restaurants.push(amit, orel, dor, zalts, karako, book);
var pasta = new Course("pasta", amit, 10);
var pizza = new Course("pizza", amit, 20);
var ravioli = new Course("ravioli", amit, 30);
var teramisu = new Course("teramisu", amit, 40);
//we get a menu (Course[]), from another page.
if (!restaurants[0].menu)
    throw new Error("menu undefined");
restaurants[0].menu.push(pasta, pizza, ravioli, teramisu);
console.log("amitMenu", restaurants[0].menu);
restaurants[1].menu.push(new Course("eggroll", orel, 50), new Course("pad thai", orel, 60), new Course("sushi", orel, 70), new Course("cake", orel, 80));
function renderRestaurants() {
    try {
        var restaurantRoot = document.querySelector("#restaurantRoot");
        if (restaurantRoot) {
            for (var i = 0; i < restaurants.length; i++) {
                restaurantRoot.innerHTML += "\n                <div id=uid-" + restaurants[i].uid + " class=\"results__restaurant\">\n                <div id=uid-" + restaurants[i].uid + "Root ></div>\n                    <div class=\"results__restaurant__wrapper\">\n                        <span>Name: " + restaurants[i].name + " </span>\n                        <span>Address: " + restaurants[i].address + " </span>\n                        <span>Type: " + restaurants[i].type + " </span>\n                    </div>\n                    <button onclick=\"openMenu('" + restaurants[i].uid + "')\">open menu</button>    \n                </div>";
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function openMenu(uid) {
    try {
        var menu = document.querySelector("#uid-" + uid + "Root");
        if (!menu)
            throw new Error("could not find root");
        var index = restaurants.findIndex(function (restaurant) { return restaurant.uid === uid; });
        menu.innerHTML = "\n       <div class=\"menu\">" + restaurants[index].name + " \n            <button class=\"menu__close\" onclick=\"closeMenu('" + uid + "')\">close</button>\n            <div id=menuRoot" + uid + "></div>\n       </div>\n       ";
        var menuRoot = document.querySelector("#menuRoot" + uid);
        if (menuRoot)
            menuRoot.innerHTML = renderMenuForCustomer(uid);
    }
    catch (error) {
        console.error(error);
    }
}
function renderMenuForCustomer(uid) {
    try {
        var index = restaurants.findIndex(function (restaurant) { return restaurant.uid === uid; });
        var html = restaurants[index].menu
            .map(function (course) {
            return "\n            <form onsubmit=\"handleAddToCart(event)\">    \n                <div class=\"course\">\n                    <h3 type=\"text\" name=\"name\">" + course.name + "  </h3>\n                    <div type=\"number\" name=\"price\">Price: " + course.price + "  </div>\n                    <input type=\"number\" name=\"qty\" placeholder=\"0\" required>\n                    <input type=\"submit\" value=\"Add to Cart\" />\n                </div>\n            </form>    \n            ";
        })
            .join(" ");
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function handleAddToCart(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var price = ev.target.elements.price.valueAsNumber;
        var restaurant = loggedInRestaurant();
        menu.push(new Course(name, restaurant, price));
        // ev.target.reset();
        if (!courseRoot)
            throw new Error("courseRoot is null");
        // courseRoot.innerHTML = renderMenu(menu);
    }
    catch (error) {
        console.error(error);
    }
}
function closeMenu(uid) {
    try {
        var menu = document.querySelector("#uid-" + uid + "Root");
        if (!menu)
            throw new Error("could not find root");
        menu.innerHTML = "";
    }
    catch (error) {
        console.error(error);
    }
}
function search() {
    try {
        var userInput = document.querySelector("#userInput");
        var noResults_1 = document.querySelector("#noResultsRoot");
        userInput === null || userInput === void 0 ? void 0 : userInput.addEventListener("input", function (search) {
            var userInputValue = search.target.value;
            userInputValue = userInputValue.toLocaleLowerCase();
            var results = document.querySelectorAll(".results__restaurant");
            for (var i = 0; i < results.length; i++) {
                if (results[i].innerText.toLowerCase().includes(userInputValue) && noResults_1) {
                    results[i].style.display = "";
                    noResults_1.style.display = "none";
                }
                else {
                    results[i].style.display = "none";
                }
            }
            var allrestaurants = document.querySelectorAll(".results");
            for (var i = 0; i < results.length; i++) {
                if (!allrestaurants[i].innerText.toLowerCase().includes(userInputValue) && noResults_1) {
                    noResults_1.style.display = "";
                    noResults_1.innerHTML = "Sorry, there isn't a restaurant that icludes <u><b>" + userInputValue + "</b></u> on Bite Away...";
                }
            }
        });
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
