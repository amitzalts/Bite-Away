function renderRestaurants() {
    try {
        var restaurantRoot = document.querySelector("#restaurantRoot");
        if (!restaurantRoot)
            throw new Error("the restaurantRoot no found");
        var html = restaurants.map(function (restaurant) {
            return "\n\n              <div class=\"container-customer__restaurant-card\">  <img src=\"https://www.misedetchef.co.il/wp-content/uploads/2020/02/2c-new.jpg\" class=\"container-customer__img-restaurant\">\n              <h1 class=\"container-customer__title-restaurant\">\n              " + restaurant.name + " \n              </h1>\n                <p>Address: " + restaurant.address + " </p>\n                 <p>Type: " + restaurant.type + " </p>\n             <button class=\"container-customer__btn-restaurant\" onclick=\"openMenu('" + restaurant.uid + "')\">open menu</button> </div> ";
        }).join(" ");
        restaurantRoot.innerHTML = html;
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderMenu(uid) {
    try {
        var index = restaurants.findIndex(function (restaurant) { return restaurant.uid === uid; });
        console.log(index);
        var curRes = restaurants.find(function (restaurant) { return restaurant.uid === uid; });
        if (!curRes)
            throw new Error("no found restaurant");
        var html = "\n       \n        <button class=\"container-customer__menu-close\" onclick=\"closeMenu()\">\n        <i class=\"fa-solid fa-xmark\"></i>\n        </button> \n            <h1 class=\"container-customer__menu-title\">" + curRes.name + " Menu</h1>\n                <div class=\"container-customer__container-courses\">" + renderCourse(uid) + "</div> ";
        return html;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
function renderCourse(uid) {
    try {
        var index = restaurants.findIndex(function (restaurant) { return restaurant.uid === uid; });
        console.log(index);
        var curRes = restaurants.find(function (restaurant) { return restaurant.uid === uid; });
        if (!curRes)
            throw new Error("no found restaurant");
        var html = " \n            <div class=\"container-customer__courses-card\">\n                <img src=\"https://www.aspicyperspective.com/wp-content/uploads/2020/07/best-hamburger-patties-1.jpg\" class=\"container-customer__courses-img\">\n                <p class=\"container-customer__courses-card-name\" >\n                        Humbugger\n                </p>\n                <p class=\"container-customer__courses-des\" >\n                    lorem asdasd kqwjdn ams,nd lqwkd\n                </p>\n                <h4 class=\"container-customer__courses-price\">\n                    Price:50$\n                </h4>\n                <button class=\"container-customer__courses-btn\">\n                <i class=\"fa-solid fa-cart-plus\"></i>\n                </button>\n                </div> ";
        return html;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
function renderCustomerHeader() {
    try {
        var customerHeader = document.querySelector("#customerHeader");
        var customer = loggedInUser();
        if (customer && customerHeader) {
            customerHeader.innerText = "" + customer.name;
        }
    }
    catch (error) {
        console.error(error);
    }
}
