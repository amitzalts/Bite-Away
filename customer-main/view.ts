function renderRestaurants(): string {
    try {
        const restaurantRoot: HTMLDivElement | null = document.querySelector("#restaurantRoot");
        if (!restaurantRoot) throw new Error("the restaurantRoot no found")
        let html = ''
        restaurants.forEach(restaurant => {
            html +=
                `
                            <div id=uid-${restaurant.uid} class="results__restaurant">
                            <div id=uid-${restaurant.uid}Root ></div>
                                <div class="results__restaurant__wrapper">
                                    <span>Name: ${restaurant.name} </span>
                                    <span>Address: ${restaurant.address} </span>
                                    <span>Type: ${restaurant.type} </span>
                                </div>
                                <button onclick="openMenu('${restaurant.uid}')">open menu</button>    
                            </div>
                            `

        })
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
        let html = ''
        html = `
   <div class="menu">${restaurants[index].name} 
        <button class="menu__close" onclick="closeMenu('${uid}')">close</button>
        <div id=menuRoot${uid}></div>
   </div>
   `

        return html
    } catch (error) {
        console.error(error);
        return ''
    }
}

function renderMenuForCustomer(uid: string): string {
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