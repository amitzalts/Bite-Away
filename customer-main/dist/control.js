restaurants.push(new Restaurant("amit", "a", "b", "c", "d"), new Restaurant("orel", "e", "f", "g", "h"), new Restaurant("dor", "i", "j", "k", "l"), new Restaurant("zalts", "m", "n", "o", "p"), new Restaurant("karak", "q", "r", "s", "t"), new Restaurant("book", "u", "v", "w", "x"));
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
        console.log("uid", uid);
        var menu = document.querySelector("#uid-" + uid + "Root");
        if (!menu)
            throw new Error("could not find root");
        console.log("menu", menu);
        var index = restaurants.findIndex(function (restaurant) { return restaurant.uid === uid; });
        menu.innerHTML = "\n       <div id=uid-" + uid + "MenuRoot class=\"menu\">" + restaurants[index].name + " </div>\n       <button onclick=\"closeMenu('uid-" + uid + "MenuRoot')\">close</button>\n       ";
    }
    catch (error) {
        console.error(error);
    }
}
function closeMenu(uid) {
    try {
        console.log("uid", uid);
        var menu = document.querySelector("#uid-" + uid + "MenuRoot");
        if (!menu)
            throw new Error("could not find root");
        console.log("menu", menu);
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
