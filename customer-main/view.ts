function renderRestaurants(): string {
    try {
        const restaurantRoot: HTMLDivElement | null = document.querySelector("#restaurantRoot");
        if (!restaurantRoot) throw new Error("the restaurantRoot no found")
        let html = restaurants.map(restaurant =>
            `

              <div class="container-customer__restaurant-card">  <img src="https://www.misedetchef.co.il/wp-content/uploads/2020/02/2c-new.jpg" class="container-customer__img-restaurant">
              <h1 class="container-customer__title-restaurant">
              ${restaurant.name} 
              </h1>
                <p>Address: ${restaurant.address} </p>
                 <p>Type: ${restaurant.type} </p>
             <button class="container-customer__btn-restaurant" onclick="openMenu('${restaurant.uid}')">open menu</button> </div> `).join(" ")


        restaurantRoot.innerHTML = html
        return html

    }
    catch (error) {
        console.error(error);
        return ""
    }
}

function renderMenu(uid: string): string {
    try {
        const index = restaurants.findIndex((restaurant) => restaurant.uid === uid);
        console.log(index);

        const curRes = restaurants.find(restaurant=>restaurant.uid === uid) as Restaurant
        if(!curRes) throw new Error("no found restaurant")
        const html = `
       
        <button class="container-customer__menu-close" onclick="closeMenu()">
        <i class="fa-solid fa-xmark"></i>
        </button> 
            <h1 class="container-customer__menu-title">${curRes.name} Menu</h1>
                <div class="container-customer__container-courses">${renderCourse(uid)}</div> `
        return html
    } catch (error) {
        console.error(error);
        return ''
    }
}

function renderCourse(uid: string): string {
    try {
        const index = restaurants.findIndex((restaurant) => restaurant.uid === uid);
        console.log(index);

        const curRes = restaurants.find(restaurant=>restaurant.uid === uid) as Restaurant
        if(!curRes) throw new Error("no found restaurant")
        const html = ` 
            <div class="container-customer__courses-card">
                <img src="https://www.aspicyperspective.com/wp-content/uploads/2020/07/best-hamburger-patties-1.jpg" class="container-customer__courses-img">
                <p class="container-customer__courses-card-name" >
                        Humbugger
                </p>
                <p class="container-customer__courses-des" >
                    lorem asdasd kqwjdn ams,nd lqwkd
                </p>
                <h4 class="container-customer__courses-price">
                    Price:50$
                </h4>
                <button class="container-customer__courses-btn">
                <i class="fa-solid fa-cart-plus"></i>
                </button>
                </div> `;

        return html;
    } catch (error) {
        console.error(error);
        return ''
    }

}


function renderCustomerHeader() {
    try {
        const customerHeader: HTMLElement | null = document.querySelector("#customerHeader");
        const customer = loggedInCustomer()
        if (customer && customerHeader) {
            customerHeader.innerText = `${customer.name}`
        }
    } catch (error) {
        console.error(error);
    }
}