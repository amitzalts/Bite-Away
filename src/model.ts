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
    uid:string
    constructor(
        public name:string,
        public password:string , 
        public email:string ,
        public address:string , 
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
        public courier?:string,
        public destination?:string,
        public status?:string,
        

    ){
this.uid = `101${uid()}`
this.date = new Date();  // date right now

    }
}

class Order {
    uid:string;
    courses: Course[] = [];
    constructor(
        public name:string,
        public password:string, 
        public restaurant:Restaurant, 
        public courier:Courier, 
        public destination:string, 
        public status:string, 
        
    ){
this.uid = `201${uid()}`

    }
}

// --------------------------- Array ------

const customers = getInfoFromStorage("customers") as Customer[] | [];
const restaurants = getInfoFromStorage("restaurants") as Restaurant[] | [] ;
const couriers = getInfoFromStorage("couriers") as Courier[] | [];


// --------------------------- LocalStorage ------

function saveInLocalStorage(array:Customer[] | Restaurant[] | Courier[] , name:string){
    try {
            if(!array) throw new Error("the Array no Found ")
            localStorage.setItem(name , JSON.stringify(array)) 
    } catch (error) {
        console.error(error);
    }
}

function getInfoFromStorage(arrayName:string) :Customer[] | Restaurant[] | Courier[] | []{
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


