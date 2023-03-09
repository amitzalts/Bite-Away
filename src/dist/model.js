// Costumer (name, uid, password, e-mail, address, credit card number) ..!
// Restaurant (name, uid, password, e-mail, address, bank account number, type)
// Courier (name, uid, password, e-mail, area, bank account number, id number, vehicle, age(?))
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Course (name, uid, restaurant, price, description)
// Order (uid, courses, restaurant, courier, destination, status, date, time of creation, time of approval, time of process start, time ready, time sent, time of delivery)
// customer = 1  , Restaurant = 2 , admin = 0   courier = 3 ;  start number uid
var currentNumber = 0;
var clicked = false;
function count() {
    var intervalId = setInterval(function () {
        currentNumber++;
        if (clicked) {
            clearInterval(intervalId);
            console.log(currentNumber); // return the sec after clicked
            return currentNumber;
        }
    }, 1000);
}
// --------------------------- User Classes ------
var Customer = /** @class */ (function () {
    function Customer(name, password, email, address, creditCard) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.address = address;
        this.creditCard = creditCard;
        this.orders = [];
        this.uid = "100" + uid();
    }
    return Customer;
}());
var Restaurant = /** @class */ (function () {
    function Restaurant(name, password, email, address, type, BankAccount, imageUrl) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.address = address;
        this.type = type;
        this.BankAccount = BankAccount;
        this.imageUrl = imageUrl;
        this.menu = [];
        this.customers = [];
        this.orders = [];
        this.uid = "200" + uid();
    }
    return Restaurant;
}());
var Courier = /** @class */ (function () {
    function Courier(name, password, email, area, vehicle, age, BankAccount) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.area = area;
        this.vehicle = vehicle;
        this.age = age;
        this.BankAccount = BankAccount;
        this.orders = [];
        this.uid = "300" + uid();
    }
    return Courier;
}());
// --------------------------- non User Classes ------
var Course = /** @class */ (function () {
    function Course(name, price, description, imageUrl) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.uid = "101" + uid();
        // this.date = new Date();  // date right now
    }
    return Course;
}());
var Order = /** @class */ (function () {
    function Order(name, restaurantId, customerId, courier, destination, status) {
        this.name = name;
        this.restaurantId = restaurantId;
        this.customerId = customerId;
        this.courier = courier;
        this.destination = destination;
        this.status = status;
        this.uid = "201" + uid();
        this.courses = [];
    }
    Order.prototype.sum = function () {
        var _a;
        try {
            var sum = (_a = this.courses.reduce(function (accumulator, currentValue) { return accumulator + currentValue.price; }, 0)) !== null && _a !== void 0 ? _a : 0; //if lefthand is null/undefined return 0
            return sum;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    };
    Order.prototype.instanceCounter = function () {
        try {
            var countedCourses = this.courses.reduce(function (allCourses, course) {
                var _a;
                var _b;
                var currCount = (_b = allCourses[course.name]) !== null && _b !== void 0 ? _b : 0;
                return __assign(__assign({}, allCourses), (_a = {}, _a[course.name] = currCount + 1, _a));
            }, {});
            return countedCourses;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    };
    return Order;
}());
// --------------------------- Array ------
var customers = getCustomersFromStorage();
var restaurants = getRestaurantsFromStorage();
var couriers = getInfoFromStorage("couriers");
var orderPool = getInfoFromStorage("orderPool");
// --------------------------- LocalStorage ------
function saveInLocalStorage(array, name) {
    try {
        if (!array)
            throw new Error("the " + array + " no Found");
        localStorage.setItem(name, JSON.stringify(array));
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function getInfoFromStorage(arrayName) {
    try {
        var dataJson = localStorage.getItem(arrayName);
        if (!dataJson)
            throw new Error("the " + arrayName + " not found in localStorage");
        var data = JSON.parse(dataJson);
        return data;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function getInfoFromStorageType() {
    try {
        var data = localStorage.getItem("TypeUser");
        if (!data)
            throw new Error("no found TypeUser in localstorage");
        console.log(data);
        return data;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function loggedInUser() {
    try {
        var data = localStorage.getItem("userCur");
        if (!data)
            throw new Error("the userEmail data  was not found in local storage");
        var getEmailFromUser = JSON.parse(data);
        var user = getEmailFromUser;
        if (!user) {
            throw new Error("could not find logged in user");
        }
        else {
            return user;
        }
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function loggedInRestaurant() {
    try {
        var user_1 = loggedInUser();
        if (!user_1)
            throw new Error("no user found");
        var restaurant = restaurants.find(function (rest) { return rest.uid === user_1.uid; });
        console.log(restaurant);
        if (!restaurant)
            throw new Error("no restaurant found");
        return restaurant;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function loggedInCustomer() {
    try {
        var user_2 = loggedInUser();
        if (!user_2)
            throw new Error("no user found");
        var customer = customers.find(function (cust) { return cust.uid === user_2.uid; });
        if (!customer)
            throw new Error("no customer found");
        return customer;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function loggedInCourier() {
    try {
        var user_3 = loggedInUser();
        if (!user_3)
            throw new Error("no user found");
        var courier = couriers.find(function (cour) { return cour.uid === user_3.uid; });
        if (!courier)
            throw new Error("no courier found");
        return courier;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function saveMenu(restaurantUid, menu) {
    try {
        var restaurant = restaurants.find(function (rest) { return rest.uid === restaurantUid; });
        if (!restaurant)
            throw new Error("restaurant not found");
        restaurant.menu = menu;
        saveInLocalStorage(restaurants, "restaurants");
    }
    catch (error) {
        console.error(error);
    }
}
function getCustomersFromStorage() {
    try {
        var dataJson = localStorage.getItem("customers");
        if (!dataJson)
            throw new Error("the customers not found in localStorage");
        var data = JSON.parse(dataJson);
        console.log("data", data);
        var customers_1 = data.map(function (customer) {
            var _customer = new Customer(customer.name, customer.password, customer.email, customer.address);
            _customer.uid = customer.uid;
            console.log(_customer);
            _customer.orders = customer.orders.map(function (order) { return new Order(order.name, order.restaurantId, order.customerId, undefined, order.destination); });
            console.log(_customer);
            return _customer;
        });
        return customers_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function getRestaurantsFromStorage() {
    try {
        var dataJson = localStorage.getItem("restaurants");
        if (!dataJson)
            throw new Error("the restaurants not found in localStorage");
        var data = JSON.parse(dataJson);
        console.log("data", data);
        var restaurants_1 = data.map(function (restaurant) {
            var _restaurant = new Restaurant(restaurant.name, restaurant.password, restaurant.email, restaurant.address, restaurant.type);
            _restaurant.uid = restaurant.uid;
            _restaurant.menu = restaurant.menu;
            _restaurant.orders = restaurant.orders.map(function (order) { return new Order(order.name, order.restaurantId, order.customerId, undefined, order.destination, order.status); });
            console.log("_restaurant", _restaurant);
            return _restaurant;
        });
        return restaurants_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
/////////////////////////////////// DATA BASE 
function enterLocalStorage() {
    restaurants.push(new Restaurant("orel", "123", "orel@walla.com ", "haifa", "asian"));
    restaurants.push(new Restaurant("dor", "i", "j", "k", "l"));
    restaurants.push(new Restaurant("zalts", "m", "n", "o", "p"));
    restaurants.push(new Restaurant("book", "u", "v", "w", "x"));
    restaurants.push(new Restaurant("karako", "q", "r", "s", "t"));
    var pasta = new Course("pasta", amit, 10);
    var pizza = new Course("pizza", amit, 20);
    var ravioli = new Course("ravioli", amit, 30);
    var teramisu = new Course("teramisu", amit, 40);
    restaurants[1].menu.push(new Course("eggroll", orel, 50), new Course("pad thai", orel, 60), new Course("sushi", orel, 70), new Course("cake", orel, 80));
    var customer1 = new Customer("customer1", "134", "email", "destination");
    var customer2 = new Customer("customer2", "135", "email2", "destination2");
    customers.push(customer1, customer2);
    saveInLocalStorage(restaurants, "restaurants");
}
