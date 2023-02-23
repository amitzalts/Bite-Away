



function openMenu(uid:string) {
    try {
        const menu: HTMLElement = document.querySelector(`#menuRoot`)!;
        console.log(menu);
        if (!menu) throw new Error("could not find menu ");
        menu.innerHTML = renderMenu(uid)
        menu.style.display = " block"
        //invoke here newOrderByRes(uid);
    } catch (error) {
        console.error(error);

    }
}
function closeMenu() {
    try {
        const menu: HTMLElement = document.querySelector(`#menuRoot`)!;
        if (!menu) throw new Error("could not find root");
        menu.style.display = " none"
        menu.innerHTML = "";
    } catch (error) {
        console.error(error);
    }
}

function newOrderByRes(restaurantUid: string, restaurant: Restaurant) { //change to uid only
    try {

        const customer = loggedInCustomer();
        if (!customer) throw new Error("active customer not found");

        // const restaurant = 

        customer.orders.push(new Order(restaurantUid, restaurant, undefined, undefined, "initialized"))  
        saveInLocalStorage(orders, "orders");

    } catch (error) {
        console.error(error);
    }
}

function newCourseByRes(name: string, restaurant: Restaurant, price: number) {
    try {
        const customer = loggedInCustomer();
        if(!customer) throw new Error("customer not found");

        customer.orders[0].courses.push(new Course(name, restaurant, price))//change 0 to the relevant order


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

        // const customer = loggedInCustomer();
        // const currentOrder = customer.orders.length;

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
        newCourseByRes("Orel", amit, 50)
        
        

        // courseRoot.innerHTML = renderMenu(menu);

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


