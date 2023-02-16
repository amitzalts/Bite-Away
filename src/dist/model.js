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
count();
console.log(count());
// --------------------------- User Classes ------
var Customer = /** @class */ (function () {
    function Customer(name, password, email, address, creditCard) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.address = address;
        this.creditCard = creditCard;
        this.uid = "1" + uid();
        // uid:uid() -- function randon id
    }
    return Customer;
}());
var Restaurant = /** @class */ (function () {
    function Restaurant(name, password, email, address, BankAccount, type) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.address = address;
        this.BankAccount = BankAccount;
        this.type = type;
        // this.uid = `2${uid()}`
        // uid:uid() -- function randon id
    }
    return Restaurant;
}());
var Courier = /** @class */ (function () {
    function Courier(name, password, email, area, BankAccount, vehicle, age) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.area = area;
        this.BankAccount = BankAccount;
        this.vehicle = vehicle;
        this.age = age;
        // this.uid = `3${uid()}`
        // uid:uid() -- function randon id
    }
    return Courier;
}());
// --------------------------- non User Classes ------
var Course = /** @class */ (function () {
    function Course(name, restaurant, price, courier, destination, status) {
        this.name = name;
        this.restaurant = restaurant;
        this.price = price;
        this.courier = courier;
        this.destination = destination;
        this.status = status;
        this.uid = "01" + uid();
        this.date = new Date(); // date right now
        // uid:uid() -- function randon id
    }
    return Course;
}());
var Order = /** @class */ (function () {
    function Order(name, password, courses, restaurant, price, description) {
        this.name = name;
        this.password = password;
        this.courses = courses;
        this.restaurant = restaurant;
        this.price = price;
        this.description = description;
        // this.uid = `01${uid()}`
        // uid:uid() -- function randon id
    }
    return Order;
}());
