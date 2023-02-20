var amit = new Restaurant("amit", "a", "b", "c", "d");
var orel = new Restaurant("orel", "e", "f", "g", "h");
var dor = new Restaurant("dor", "i", "j", "k", "l");
var zalts = new Restaurant("zalts", "m", "n", "o", "p");
var karako = new Restaurant("karako", "q", "r", "s", "t");
var book = new Restaurant("book", "u", "v", "w", "x");
var rest = [amit, orel, dor, zalts, karako, book];
//@ts-ignore
restaurants.push.apply(restaurants, rest);
saveInLocalStorage(restaurants, "restaurants");
console.log(restaurants);
var pasta = new Course("pasta", amit, 10);
var pizza = new Course("pizza", amit, 20);
var ravioli = new Course("ravioli", amit, 30);
var teramisu = new Course("teramisu", amit, 40);
//we get a menu (Course[]), from another page.
if (!restaurants[0].menu)
    throw new Error("menu undefined");
restaurants[0].menu.push(pasta, pizza, ravioli, teramisu);
restaurants[1].menu.push(new Course("eggroll", orel, 50), new Course("pad thai", orel, 60), new Course("sushi", orel, 70), new Course("cake", orel, 80));
var customer1 = new Customer("customer1", "134", "email", "destination");
var customer2 = new Customer("customer2", "135", "email2", "destination2");
customers.push(customer1, customer2);
function loggedInCustomer() {
    var customer = customers.find(function (customer) { return customer.uid; });
    if (!customer) {
        throw new Error("could not find logged in restaurant");
    }
    else {
        return customer;
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
function getUidFromRestaurant(uid) {
    console.log(uid);
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
function newOrderByRes(restaurantUid, restaurant) {
    try {
        customers[0].orders.push(new Order(restaurantUid, amit, undefined, undefined, "initialized")); //need to finish      
        saveInLocalStorage(orders, "orders");
    }
    catch (error) {
        console.error(error);
    }
}
function newCourseByRes(name, restaurant, price) {
    try {
        customers[0].orders[0].courses.push(new Course(name, restaurant, price));
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddToCart(ev) {
    try {
        ev.preventDefault();
        var _name = document.querySelector("#testtest"); //fix
        var name = _name === null || _name === void 0 ? void 0 : _name.value;
        var qty = ev.target.elements.qty.valueAsNumber;
        var customer = loggedInCustomer();
        var currentOrder = customer.orders.length;
        //     customer.orders[0].name === 
        // // console.log(customer);
        // // console.log("currentOrder", currentOrder);
        // // console.log(name); //works
        // if (name) {
        //     console.log((currentOrder === 0) && (customer?.orders[currentOrder]?.status !== "initialized"));
        //     if ((currentOrder === 0) && (customer?.orders[currentOrder]?.status !== "initialized")) { //the orders array is empty or the current order's status is undefined
        //  if(customer.orders[0].name = )
        //     }   
        //  //need to finish
        //     // console.log("customer.orders[currentOrder]", customer.orders[currentOrder]);
        //     // console.log("currentOrder", currentOrder);
        //              console.log(customer);
        // }
        newCourseByRes("Orel", amit, 50);
        console.log(customer);
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
