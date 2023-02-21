const amit = new Restaurant("amit", "a", "b", "c", "d");
const orel = new Restaurant("orel", "e", "f", "g", "h");
const dor = new Restaurant("dor", "i", "j", "k", "l");
const zalts = new Restaurant("zalts", "m", "n", "o", "p");
const karako = new Restaurant("karako", "q", "r", "s", "t");
const book = new Restaurant("book", "u", "v", "w", "x");

const rest = [amit , orel , dor ,zalts , karako ,book];
//@ts-ignore
restaurants.push(...rest);
saveInLocalStorage(restaurants, "restaurants");

console.log(restaurants);



const pasta = new Course("pasta", amit, 10);
const pizza = new Course("pizza", amit, 20);
const ravioli = new Course("ravioli", amit, 30);
const teramisu = new Course("teramisu", amit, 40);

//we get a menu (Course[]), from another page.
if (!restaurants[0].menu) throw new Error("menu undefined");
restaurants[0].menu.push(pasta, pizza, ravioli, teramisu);


restaurants[1].menu.push(
    new Course("eggroll", orel, 50),
    new Course("pad thai", orel, 60),
    new Course("sushi", orel, 70),
    new Course("cake", orel, 80),
)

const customer1 = new Customer("customer1", "134", "email", "destination");
const customer2 = new Customer("customer2", "135", "email2", "destination2");
customers.push(customer1, customer2);




function loggedInCustomer(): Customer {

    const customer = customers.find((customer) => customer.uid);
    if (!customer) {
        throw new Error("could not find logged in restaurant");
    } else {
        return customer;
    }
}

function renderCustomerHeader() {
    try {
        const customerHeader: HTMLElement | null = document.querySelector("#customerHeader");
        const customer: Customer = loggedInCustomer();
        if (customer && customerHeader) {
            customerHeader.innerText = `${customer.name}`
        }
    } catch (error) {
        console.error(error);
    }
}

function renderRestaurants() {
    try {
        const restaurantRoot: HTMLDivElement | null = document.querySelector("#restaurantRoot");
        if (restaurantRoot) {
            for (let i = 0; i < restaurants.length; i++) {
                restaurantRoot.innerHTML += `
                <div id=uid-${restaurants[i].uid} class="results__restaurant">
                <div id=uid-${restaurants[i].uid}Root ></div>
                    <div class="results__restaurant__wrapper">
                        <span>Name: ${restaurants[i].name} </span>
                        <span>Address: ${restaurants[i].address} </span>
                        <span>Type: ${restaurants[i].type} </span>
                    </div>
                    <button onclick="openMenu('${restaurants[i].uid}')">open menu</button>    
                </div>`;
            }
      
        }
    }
    catch (error) {
        console.error(error);
    }
}

function openMenu(uid: string) {
    try {
        const menu: HTMLElement | null = document.querySelector(`#uid-${uid}Root`);
        if (!menu) throw new Error("could not find root");

        const index = restaurants.findIndex((restaurant) => restaurant.uid === uid);
        menu.innerHTML = `
       <div class="menu">${restaurants[index].name} 
            <button class="menu__close" onclick="closeMenu('${uid}')">close</button>
            <div id=menuRoot${uid}></div>
       </div>
       `
        const menuRoot = document.querySelector(`#menuRoot${uid}`)
        if (menuRoot) menuRoot.innerHTML = renderMenuForCustomer(uid);

    } catch (error) {
        console.error(error);

    }
}

function getUidFromRestaurant(uid:string):void{
    console.log(uid);
}

function renderMenuForCustomer(uid:string): string {
    try {
        const index = restaurants.findIndex((restaurant) => restaurant.uid === uid);
console.log(index);
        const html = restaurants[index].menu
            .map((course) => {
                console.log(course.uid);
                return `
            <form onsubmit="handleAddToCart(event)">    
                <div class="course">
                    <h3>${course.name}</h3>
                    <div>Price: ${course.price}</div>
                    <input type="number" name="qty" placeholder="0" required>
                    <input type="hidden" id="${course.uid}" name="${course.name}" value="${course.name}">
                    <input type="submit" value="Add to Cart">
                </div>
            </form>    
            `;
            })
            .join(" ");
        return html;

    } catch (error) {
        console.error(error);
        return "";
    }
}

function newOrderByRes(restaurantUid:string , restaurant:Restaurant[]){
    try {

        customers[0].orders.push(new Order(restaurantUid, amit, undefined, undefined, "initialized"))//need to finish      
        saveInLocalStorage(orders, "orders");
    
    } catch (error) {
        console.error(error);
     
    }
}

function newCourseByRes(name:string , restaurant:Restaurant , price:number){
    try {

       customers[0].orders[0].courses.push(new Course(name, restaurant, price))
       

    } catch (error) {
        console.error(error);
    }
}

function handleAddToCart(ev: any) { //wip
    try {
        ev.preventDefault();

        const _name: HTMLInputElement | null = document.querySelector("#testtest");//fix
        const name = _name?.value
        const qty = ev.target.elements.qty.valueAsNumber;

        const customer = loggedInCustomer();
        const currentOrder = customer.orders.length;
   
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
        newCourseByRes("Orel" , amit , 50)

        console.log(customer);

        // courseRoot.innerHTML = renderMenu(menu);

    } catch (error) {
        console.error(error);
    }
}

function closeMenu(uid: string) {
    try {
        const menu: HTMLElement | null = document.querySelector(`#uid-${uid}Root`);
        if (!menu) throw new Error("could not find root");
        menu.innerHTML = "";
    } catch (error) {
        console.error(error);
    }
}

function search(): void {
    try {
        const userInput: Element | null = document.querySelector("#userInput");
        const noResults: HTMLDivElement | null = document.querySelector("#noResultsRoot");

        userInput?.addEventListener("input", (search) => {
            let userInputValue = (search.target as HTMLInputElement).value
            userInputValue = userInputValue.toLocaleLowerCase();

            let results = document.querySelectorAll<HTMLElement>(".results__restaurant");
            for (let i = 0; i < results.length; i++) {
                if (results[i].innerText.toLowerCase().includes(userInputValue) && noResults) {
                    results[i].style.display = "";
                    noResults.style.display = "none";
                } else {
                    results[i].style.display = "none";
                }
            }

            let allrestaurants = document.querySelectorAll<HTMLElement>(".results");
            for (let i = 0; i < results.length; i++) {
                if (!allrestaurants[i].innerText.toLowerCase().includes(userInputValue) && noResults) {
                    noResults.style.display = "";
                    noResults.innerHTML = `Sorry, there isn't a restaurant that icludes <u><b>${userInputValue}</b></u> on Bite Away...`;
                }
            }
        }
        );
    } catch (error) {
        console.error(error);
        return error;
    }
}