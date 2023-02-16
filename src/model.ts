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
    uid:string
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
        public restaurant:string, 
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
    uid:string
    constructor(
        public name:string,
        public password:string , 
        public courses:string ,
        public restaurant:string , 
        public price:number,
        public description:string,
    ){
this.uid = `201${uid()}`

    }
}

// --------------------------- Array ------

const customers:Customer[] = [];
const restaurants:Restaurant[] = [];
const couriers:Courier[] = [];