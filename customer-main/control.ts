


// function loggedInCustomer(): Customer {

//     const customer = customers.find((customer) => customer.uid);
//     if (!customer) {
//         throw new Error("could not find logged in restaurant");
//     } else {
//         return customer;
//     }
// }


function openMenu(uid: string) {
    try {
        console.log("Open menu");
        const menu: HTMLElement = document.querySelector(`#uid-${uid}Root`)!;
        console.log(menu);
        if (!menu) throw new Error("could not find menu");
        menu.innerHTML = renderMenu(uid)
        console.log(menu);
        const menuRoot = document.querySelector(`#menuRoot${uid}`)
        if (menuRoot) menuRoot.innerHTML = renderMenuForCustomer(uid);

    } catch (error) {
        console.error(error);

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
        newCourseByRes("Orel" , amit , 50)


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

function renderCustomerHeader() {
    try {
        const customerHeader: HTMLElement | null = document.querySelector("#customerHeader");
        const data = localStorage.getItem("userCur");
        if(!data) throw new Error("the userEmail data no found in local storage")
        const getEmailFromUser = JSON.parse(data) as Customer 
        const customer: Customer =   getEmailFromUser
        if (customer && customerHeader) {
            customerHeader.innerText = `${customer.name}`
        }
    } catch (error) {
        console.error(error);
    }
}
