function openMenu(uid) {
    try {
        var menu = document.querySelector("#menuRoot");
        console.log(menu);
        if (!menu)
            throw new Error("could not find menu");
        menu.innerHTML = renderMenu(uid);
        menu.style.display = " block";
        //invoke here newOrderByRes(uid);
    }
    catch (error) {
        console.error(error);
    }
}
function closeMenu() {
    try {
        var menu = document.querySelector("#menuRoot");
        if (!menu)
            throw new Error("could not find root");
        menu.style.display = " none";
        menu.innerHTML = "";
    }
    catch (error) {
        console.error(error);
    }
}
function newOrderByRes(restaurantUid, restaurant) {
    try {
        var _customer = loggedInUser();
        if (!_customer)
            throw new Error("active customer not found");
        // const restaurant = 
        var customer = _customer;
        customer.orders.push(new Order(restaurantUid, restaurant, undefined, undefined, "initialized"));
        saveInLocalStorage(orders, "orders");
    }
    catch (error) {
        console.error(error);
    }
}
function newCourseByRes(name, restaurant, price) {
    try {
        var _customer = loggedInUser();
        if (!_customer)
            throw new Error("customer not found");
        var customer = _customer;
        customer.orders[0].courses.push(new Course(name, restaurant, price)); //change 0 to the relevant order
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddToCart(ev) {
    try {
        ev.preventDefault();
        var _name = document.querySelector("#testtest"); //fix
        var name = _name === null || _name === void 0 ? void 0 : _name.value;
        var qty = ev.target.elements.qty.valueAsNumber;
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
        newCourseByRes("Orel", amit, 50);
        // courseRoot.innerHTML = renderMenu(menu);
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
