const amit = new Restaurant("amit", "a", "b", "c", "d");
const orel = new Restaurant("orel", "e", "f", "g", "h");
const dor = new Restaurant("dor", "i", "j", "k", "l");
const zalts = new Restaurant("zalts", "m", "n", "o", "p");
const karako = new Restaurant("karako", "q", "r", "s", "t");
const book = new Restaurant("book", "u", "v", "w", "x");

restaurants.push(amit, orel, dor, zalts, karako, book);



const pasta = new Course("pasta", amit, 10);
const pizza = new Course("pizza", amit, 20);
const ravioli = new Course("ravioli", amit, 30);
const teramisu = new Course("teramisu", amit, 40);

//we get a menu (Course[]), from another page.
if(!restaurants[0].menu) throw new Error("menu undefined");
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
            saveInLocalStorage(restaurants, "restaurants");
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
        if(menuRoot) menuRoot.innerHTML = renderMenuForCustomer(uid);
       
    } catch (error) {
        console.error(error);
    
    }
}



function renderMenuForCustomer(uid): string {
    try {
        const index = restaurants.findIndex((restaurant) => restaurant.uid === uid);
        
        const html = restaurants[index].menu
            .map((course) => {
                return `
            <form onsubmit="handleAddToCart(event)">    
                <div class="course">
                    <h3 type="text" name="${course.name}">${course.name}</h3>
                    <div type="number" name="price">Price: ${course.price}</div>
                    <input type="number" name="qty" placeholder="0" required>
                    <input type="submit" value="Add to Cart" />
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

function handleAddToCart(ev: any) {
    try {
        ev.preventDefault();

        
        const name = ev.target.elements.name.value;
        const qty = ev.target.elements.qty.valueAsNumber;
        
        const customer = loggedInCustomer();
        const currentOrder = customer.orders.length-1;

        customer.orders[currentOrder].courses.push(new Course(name, restaurant, price))
        console.log(customer);
        

        if (!courseRoot) throw new Error("courseRoot is null");

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