


function openMenu(uid:string) {
    try {
        const menu: HTMLElement = document.querySelector(`#menuRoot`)!;
        if (!menu) throw new Error("could not find menu");
        menu.innerHTML = renderMenu(uid);
        menu.style.display = " block";
    } catch (error) {
        console.error(error);
    }
}


function closeMenu() {
    try {
        if(confirm("if you close the menu your order will be lost") === true){
            const menu: HTMLElement = document.querySelector(`#menuRoot`)!;
            if (!menu) throw new Error("could not find root");
            menu.style.display = " none";
            menu.innerHTML = "";
        }
    } catch (error) {
        console.error(error);
    }
}

function newOrder(curRes: Restaurant){
    try {
        customer.orders.push(new Order(`${customer.uid}-${curRes.uid}-${Date.now().toString()}`, curRes.uid, customer.uid, undefined, undefined, "initialized"));
        console.log(customer.orders);

    } catch (error) {
        console.error(error);
    } 
}


function handleAddToOrder(curResUid:string,courseUid:string){
    try {
        const curUser  = loggedInUser()
        if(!curUser) throw new Error("the user need to login")
        const order = curUser.orders;
console.log(order);
    //    const order = customer.orders[customer.orders.length-1];
        if(!order) throw new Error("not found order")
       const curRes = restaurants.find(rest => rest.uid === curResUid);
       if(!curRes) throw new Error ("restaurant not found");

       const course = curRes.menu.find(order => order.uid === courseUid) ;
       if(!course) throw new Error ("course not found");

       order.push(course);
       console.log(curUser);

       const cartRoot: HTMLElement | null = document.querySelector("#cartRoot");
        if(!cartRoot) throw new Error("cart root not found");
        cartRoot.innerHTML = renderCart();
       
    } catch (error) {
        console.error(error); 
    }
}

function submitOrder(){
    try {
    const order = customer.orders[customer.orders.length-1];
    
    if(!Array.isArray(order.courses) || !order.courses.length){
        alert("your order is empty");  
    } else{
        const submitOrderBtn:HTMLDivElement | null = document.querySelector("#submitOrderBtn");
            
        if(order.status ==="initialized") order.status = "submitted";
        if(order.destination === undefined) order.destination = customer.address;
        
        saveInLocalStorage(customers, "customers");

        const curRes = restaurants.find(rest => rest.uid === order.restaurantId);
        if(!curRes) throw new Error ("restaurant not found");

        console.log("curRes", curRes)
        curRes.orders.push(order);
        saveInLocalStorage(restaurants, "restaurants");
        
        if(submitOrderBtn) submitOrderBtn.style.backgroundColor = "MediumSeaGreen"; 
    }
    
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

            let results = document.querySelectorAll<HTMLElement>(".container-customer__restaurant-card");
            for (let i = 0; i < results.length; i++) {
                if (results[i].innerText.toLowerCase().includes(userInputValue) && noResults) {
                    results[i].style.display = "";
                    noResults.style.display = "none";
                } else {
                    results[i].style.display = "none";
                }
            }

            let allrestaurants = document.querySelectorAll<HTMLElement>(".container-customer__result");
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



// function newOrderByRes(restaurantUid: string, restaurant: Restaurant) { //change to uid only
//     try {
//         const _customer = loggedInUser();
//         if (!_customer) throw new Error("active customer not found");

//         // const restaurant = 
//         const customer = _customer as Customer;
//         customer.orders.push(new Order(restaurantUid, restaurant, undefined, undefined, "initialized"));
         
//         saveInLocalStorage(orders, "orders");

//     } catch (error) {
//         console.error(error);
//     }
// }

// function newCourseByRes(name: string, restaurant: Restaurant, price: number) {
//     try {
//         const _customer = loggedInUser();
//         if(!_customer) throw new Error("customer not found");

//         const customer = _customer as Customer;
//         customer.orders[0].courses.push(new Course(name, restaurant, price))//change 0 to the relevant order

//     } catch (error) {
//         console.error(error);
//     }
// }

// function handleAddToOrder(ev: any) { //wip
//     try {
//         ev.preventDefault();

//         const _name: HTMLInputElement | null = document.querySelector("#testtest");//fix
//         const name = _name?.value
//         const qty = ev.target.elements.qty.valueAsNumber;

//         // const customer = loggedInCustomer();
//         // const currentOrder = customer.orders.length;

//         //     customer.orders[0].name === 


//         // // console.log(customer);
//         // // console.log("currentOrder", currentOrder);
//         // // console.log(name); //works

//         // if (name) {
//         //     console.log((currentOrder === 0) && (customer?.orders[currentOrder]?.status !== "initialized"));
//         //     if ((currentOrder === 0) && (customer?.orders[currentOrder]?.status !== "initialized")) { //the orders array is empty or the current order's status is undefined
//         //  if(customer.orders[0].name = )
//         //     }   

//         //  //need to finish
//         //     // console.log("customer.orders[currentOrder]", customer.orders[currentOrder]);
//         //     // console.log("currentOrder", currentOrder);
//         //              console.log(customer);

//         // }
//         newCourseByRes("Orel", amit, 50)
        
        

//         // courseRoot.innerHTML = renderMenu(menu);

//     } catch (error) {
//         console.error(error);
//     }
// }
