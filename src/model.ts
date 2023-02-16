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
          count()

          console.log(count());


// --------------------------- User Classes ------
class Customer {
    uid:string
    constructor(
        public name:string,
        public password:string , 
        public email:string ,
        public address:string , 
        public creditCard:string,
    ){
this.uid = `1${uid()}`
  // uid:uid() -- function randon id
    }
}

class Restaurant {
    uid:string
    constructor(
        public name:string,
        public password:string , 
        public email:string ,
        public address:string , 
        public BankAccount:string,
        public type:string,
    ){
// this.uid = `2${uid()}`
  // uid:uid() -- function randon id
    }
}

class Courier {
    uid:string
    constructor(
        public name:string,
        public password:string , 
        public email:string ,
        public area:string,
        public BankAccount:string,
        public vehicle?:string ,
        public age?:number,

    ){
// this.uid = `3${uid()}`
  // uid:uid() -- function randon id
    }
}

// --------------------------- non User Classes ------
class Course {
    uid:string;
    date:Date
    constructor(
        public name:string, 
        public restaurant:string, 
        public price:number,
        public courier?:string,
        public destination?:string,
        public status?:string,

        

    ){
this.uid = `01${uid()}`
this.date = new Date();  // date right now
  // uid:uid() -- function randon id
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
// this.uid = `01${uid()}`
  // uid:uid() -- function randon id
    }
}