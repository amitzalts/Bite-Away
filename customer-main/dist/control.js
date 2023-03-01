function openMenu(uid) {
    try {
        var menu = document.querySelector("#menuRoot");
        if (!menu)
            throw new Error("could not find menu");
        menu.innerHTML = renderMenu(uid);
        menu.style.display = " block";
    }
    catch (error) {
        console.error(error);
    }
}
function closeMenu() {
    try {
        if (confirm("if you close the menu your order will be lost") === true) {
            var menu = document.querySelector("#menuRoot");
            if (!menu)
                throw new Error("could not find root");
            menu.style.display = " none";
            menu.innerHTML = "";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function newOrder(curRes) {
    try {
        customer.orders.push(new Order(customer.uid + "-" + curRes.uid + "-" + Date.now().toString(), curRes.uid, customer.uid, undefined, undefined, "initialized"));
        console.log(customer.orders);
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddToOrder(curResUid, courseUid) {
    try {
        var curUser = loggedInUser();
        if (!curUser)
            throw new Error("the user need to login");
        var order = curUser.orders;
        console.log(order);
        //    const order = customer.orders[customer.orders.length-1];
        if (!order)
            throw new Error("not found order");
        var curRes = restaurants.find(function (rest) { return rest.uid === curResUid; });
        if (!curRes)
            throw new Error("restaurant not found");
        var course = curRes.menu.find(function (order) { return order.uid === courseUid; });
        if (!course)
            throw new Error("course not found");
        order.push(course);
        console.log(curUser);
        var cartRoot = document.querySelector("#cartRoot");
        if (!cartRoot)
            throw new Error("cart root not found");
        cartRoot.innerHTML = renderCart();
    }
    catch (error) {
        console.error(error);
    }
}
function submitOrder() {
    try {
        var order_1 = customer.orders[customer.orders.length - 1];
        if (!Array.isArray(order_1.courses) || !order_1.courses.length) {
            alert("your order is empty");
        }
        else {
            var submitOrderBtn = document.querySelector("#submitOrderBtn");
            if (order_1.status === "initialized")
                order_1.status = "submitted";
            if (order_1.destination === undefined)
                order_1.destination = customer.address;
            saveInLocalStorage(customers, "customers");
            var curRes = restaurants.find(function (rest) { return rest.uid === order_1.restaurantId; });
            if (!curRes)
                throw new Error("restaurant not found");
            console.log("curRes", curRes);
            curRes.orders.push(order_1);
            saveInLocalStorage(restaurants, "restaurants");
            if (submitOrderBtn)
                submitOrderBtn.style.backgroundColor = "MediumSeaGreen";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function search() {
    try {
        var userInput = document.querySelector("#userInput");
        var noResults_1 = document.querySelector("#noResultsRoot");
        userInput === null || userInput === void 0 ? void 0 : userInput.addEventListener("input", function (search) {
            var userInputValue = search.target.value;
            userInputValue = userInputValue.toLocaleLowerCase();
            var results = document.querySelectorAll(".container-customer__restaurant-card");
            for (var i = 0; i < results.length; i++) {
                if (results[i].innerText.toLowerCase().includes(userInputValue) && noResults_1) {
                    results[i].style.display = "";
                    noResults_1.style.display = "none";
                }
                else {
                    results[i].style.display = "none";
                }
            }
            var allrestaurants = document.querySelectorAll(".container-customer__result");
            for (var i = 0; i < results.length; i++) {
                if (!allrestaurants[i].innerText.toLowerCase().includes(userInputValue) && noResults_1) {
                    noResults_1.style.display = "";
                    noResults_1.innerHTML = "Sorry, there isn't a restaurant that icludes <u><b>" + userInputValue + "</b></u> on Bite Away...";
                }
            }
        });
    }
    catch (error) {
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
