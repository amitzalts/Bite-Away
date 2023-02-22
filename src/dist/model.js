// Costumer (name, uid, password, e-mail, address, credit card number) ..!
// Restaurant (name, uid, password, e-mail, address, bank account number, type)
// Courier (name, uid, password, e-mail, area, bank account number, id number, vehicle, age(?))
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
    function Restaurant(name, password, email, address, type, BankAccount) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.address = address;
        this.type = type;
        this.BankAccount = BankAccount;
        this.menu = [];
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
        this.uid = "300" + uid();
    }
    return Courier;
}());
// --------------------------- non User Classes ------
var Course = /** @class */ (function () {
    function Course(name, restaurant, price) {
        this.name = name;
        this.restaurant = restaurant;
        this.price = price;
        this.uid = "101" + uid();
        // this.date = new Date();  // date right now
    }
    return Course;
}());
var Order = /** @class */ (function () {
    function Order(name, restaurant, courier, destination, status) {
        this.name = name;
        this.restaurant = restaurant;
        this.courier = courier;
        this.destination = destination;
        this.status = status;
        this.uid = "201" + uid();
        this.courses = [];
    }
    return Order;
}());
// --------------------------- Array ------
var customers = getInfoFromStorage("customers");
var restaurants = getInfoFromStorage("restaurants");
var couriers = getInfoFromStorage("couriers");
var orders = getInfoFromStorage("orders");
// --------------------------- LocalStorage ------
function saveInLocalStorage(array, name) {
    try {
        if (!array)
            throw new Error("the " + array + " no Found ");
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
