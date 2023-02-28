// Costumer (name, uid, password, e-mail, address, credit card number) ..!
// Restaurant (name, uid, password, e-mail, address, bank account number, type)
// Courier (name, uid, password, e-mail, area, bank account number, id number, vehicle, age(?))

// Course (name, uid, restaurant, price, description)
// Order (uid, courses, restaurant, courier, destination, status, date, time of creation, time of approval, time of process start, time ready, time sent, time of delivery)

// customer = 1  , Restaurant = 2 , admin = 0   courier = 3 ;  start number uid

let currentNumber = 0;

const clicked = false
function count(): void {
    const intervalId = setInterval(() => {
        currentNumber++;
        if (clicked) {
            clearInterval(intervalId);
            console.log(currentNumber); // return the sec after clicked
            return currentNumber
        }
    }, 1000);
}



// --------------------------- User Classes ------
class Customer {
    uid: string;
    orders: Order[] = [];
    constructor(
        public name: string,
        public password: string,
        public email: string,
        public address: string,
        public creditCard?: string,
    ) {
        this.uid = `100${uid()}`
    }
}

class Restaurant {
    uid: string;
    menu: Course[] = [];
    customers: Customer[] = [];
    orders: Order[]= [];
    constructor(
        public name: string,
        public password: string,
        public email: string,
        public address: string,
        public type: string,
        public BankAccount?: string,
    ) {
        this.uid = `200${uid()}`
    }
}

class Courier {
    uid: string;
    orders: Order[] = [];
    constructor(
        public name: string,
        public password: string,
        public email: string,
        public area: string,
        public vehicle?: string,
        public age?: number,
        public BankAccount?: string,

    ) {
        this.uid = `300${uid()}`

    }
}

// --------------------------- non User Classes ------
class Course {
    uid: string;
    constructor(
        public name: string,
        public price: number,
        public description: string,
    ) {
        this.uid = `101${uid()}`
        // this.date = new Date();  // date right now

    }
}

class Order {
    uid: string;
    courses: Course[];
    constructor(
        public name: string,
        public restaurantId: String,
        public customerId: string,
        public courier?: Courier,
        public destination?: string,
        public status?: string,

    ) {
        this.uid = `201${uid()}`
        this.courses = [];
    }
}

// --------------------------- Array ------

const customers = getInfoFromStorage("customers") as Customer[];
const restaurants = getInfoFromStorage("restaurants") as Restaurant[];
const couriers = getInfoFromStorage("couriers") as Courier[];
const orderPool = getInfoFromStorage("orderPool") as Order[];


// --------------------------- LocalStorage ------

function saveInLocalStorage(array: Customer[] | Restaurant[] | Courier[] | Order[] | Course[], name: string) {
    try {
        if (!array) throw new Error(`the ${array} no Found`)
        localStorage.setItem(name, JSON.stringify(array))
    } catch (error) {
        console.error(error);
        return []
    }
}

function getInfoFromStorage(arrayName: string): Customer[] | Restaurant[] | Courier[] | Order[] | Course[] | [] {
    try {
        const dataJson = localStorage.getItem(arrayName);
        if (!dataJson) throw new Error(`the ${arrayName} not found in localStorage`);
        const data = JSON.parse(dataJson) as Customer[] | Restaurant[] | Courier[] | Course[];
        return data;

    } catch (error) {
        console.error(error)
        return []
    }
}

function getInfoFromStorageType(): string {
    try {
        const data = localStorage.getItem("TypeUser");
        if (!data) throw new Error("no found TypeUser in localstorage")
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return "";
    }
}


function loggedInUser(): Customer | Restaurant | Courier | undefined {
    try {
        const data = localStorage.getItem("userCur");

        if (!data) throw new Error("the userEmail data  was not found in local storage");
        const getEmailFromUser = JSON.parse(data)
        const user: Customer | Restaurant | Courier = getEmailFromUser;

        if (!user) {
            throw new Error("could not find logged in customer");
        } else {
            return user;
        }
    } catch (error) {
        console.error(error);
        return undefined
    }
}

function loggedInRestaurant(): Restaurant | undefined {
    try {
        const user = loggedInUser();
        if(!user) throw new Error ("no user found");
        const restaurant = restaurants.find(rest => rest.uid === user.uid);

        if(!restaurant) throw new Error ("no restaurant found");
        return restaurant;


    } catch (error) {
        console.error(error);
        return undefined
    }
}

function loggedInCustomer(): Customer | undefined {
    try {
        const user = loggedInUser();
        if(!user) throw new Error ("no user found");
        const customer = customers.find(cust => cust.uid === user.uid);

        if(!customer) throw new Error ("no restaurant found");
        return customer;

    } catch (error) {
        console.error(error);
        return undefined
    }
}
function loggedInCourier(): Courier | undefined {
    try {
        const user = loggedInUser();
        if(!user) throw new Error ("no user found");
        const courier = couriers.find(cour => cour.uid === user.uid);

        if(!courier) throw new Error ("no restaurant found");
        return courier;

    } catch (error) {
        console.error(error);
        return undefined
    }
}


function saveMenu(restaurantUid: string, menu: Course[]) { //saves the menu of the given restaurant to local storage
    try {
        const restaurant = restaurants.find(rest => rest.uid === restaurantUid);
        if (!restaurant) throw new Error("restaurant not found");
        restaurant.menu = menu;
        saveInLocalStorage(restaurants, "restaurants");
    } catch (error) {
        console.error(error);
    }
}



    /////////////////////////////////// DATA BASE 
    function enterLocalStorage() {

        restaurants.push(new Restaurant("orel", "123", "orel@walla.com ", "haifa", "asian"))
        restaurants.push(new Restaurant("dor", "i", "j", "k", "l"))
        restaurants.push(new Restaurant("zalts", "m", "n", "o", "p"))
        restaurants.push(new Restaurant("book", "u", "v", "w", "x"))
        restaurants.push(new Restaurant("karako", "q", "r", "s", "t"))



        const pasta = new Course("pasta", amit, 10);
        const pizza = new Course("pizza", amit, 20);
        const ravioli = new Course("ravioli", amit, 30);
        const teramisu = new Course("teramisu", amit, 40);


        restaurants[1].menu.push(
            new Course("eggroll", orel, 50),
            new Course("pad thai", orel, 60),
            new Course("sushi", orel, 70),
            new Course("cake", orel, 80),
        )


        const customer1 = new Customer("customer1", "134", "email", "destination");
        const customer2 = new Customer("customer2", "135", "email2", "destination2");
        customers.push(customer1, customer2);
        saveInLocalStorage(restaurants, "restaurants")

    }



