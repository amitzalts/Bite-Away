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
    uid:string;
    orders: Order[] = [];
    constructor(
        public name:string,
        public password:string, 
        public email:string,
        public address:string, 
        public creditCard?:string,
    ){
this.uid = `100${uid()}`
    }
}

class Restaurant {
    uid:string;
    menu: Course[] = [];
    constructor(
        public name:string,
        public password:string , 
        public email:string ,
        public address:string , 
        public type:string,
        public BankAccount?:string,
    ){
this.uid = `200${uid()}`
    }
}

class Courier {
    uid:string
    constructor(
        public name:string,
        public password:string , 
        public email:string ,
        public area:string,
        public vehicle?:string ,
        public age?:number,
        public BankAccount?:string,

    ){
  this.uid = `300${uid()}`

    }
}

// --------------------------- non User Classes ------
class Course {
    uid:string;
    constructor(
        public name:string, 
        public restaurant:Restaurant, 
        public price:number,
        
        

    ){
this.uid = `101${uid()}`
// this.date = new Date();  // date right now

    }
}

class Order {
    uid:string;
    courses:any
    constructor(
        public name:string, 
        public restaurant:Restaurant,
        public courier?:Courier, 
        public destination?:string,
        public status?:string,  
         
    ){
this.uid = `201${uid()}`
this.courses = [];
    }
}

// --------------------------- Array ------

const customers = getInfoFromStorage("customers") as Customer[] ;
const restaurants = getInfoFromStorage("restaurants") as Restaurant[] ;
const couriers = getInfoFromStorage("couriers") as Courier[] ;
const orders = getInfoFromStorage("orders") as Order[] ;


// --------------------------- LocalStorage ------

function saveInLocalStorage(array:Customer[] | Restaurant[] | Courier[] | Order[], name:string){
    try {
            if(!array) throw new Error(`the ${array} no Found `)
            localStorage.setItem(name , JSON.stringify(array)) 
    } catch (error) {
        console.error(error);
        return []
    }
}

function getInfoFromStorage(arrayName:string) :Customer[] | Restaurant[] | Courier[] | Order[] | []{
    try {
            const dataJson = localStorage.getItem(arrayName)
            if(!dataJson) throw new Error(`the ${arrayName} not found in localStorage`);
            const data = JSON.parse(dataJson) as Customer[] | Restaurant[] | Courier[]
            return data
            
    } catch (error) {
        console.error(error)
        return []
    }
}

function getInfoFromStorageType():string{
    try {
        const data = localStorage.getItem("TypeUser");
        if(!data) throw new Error("no found TypeUser in localstorage")
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
        return ""
    }
}









/////////////////////////////////// DATA BASE 
function enterLocalStorage(){
    
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
saveInLocalStorage( restaurants ,"restaurants")

}
