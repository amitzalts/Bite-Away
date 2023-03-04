const courseRoot = document.querySelector("#courseRoot"); 

function renderRestaurantHeader() {
    try {
        const restaurantHeader: HTMLElement | null = document.querySelector("#restaurantHeader");

        if (restaurant && restaurantHeader) {
            restaurantHeader.innerText = `${restaurant.name}`
        }
    } catch (error) {
        console.error(error);
    }
}


function renderMenuRest() { // later add ability to update the course's name, price, description 
    try {
        const menu = restaurant.menu;
        const html = menu
            .map((course) => {
                return `
                <div class="menu__course">
                <button onclick="handleUpdateItem('${course.uid}')">udpate</button>   
                    <h3>${course.name}</h3>
                    <div class="menu__course__detail">
                        <label>Price:</label>
                        <div>${course.price}</div>
                    </div>
                    <div class="menu__course__detail">
                        <label>Description:</label>
                        <div>${course.description}</div>
                    </div>
                    <div class="menu__course__detail">
                        <label>uid:</label>
                        <div>${course.uid}</div>
                    </div>
                    <img class="menu__course__image" src="${course.imageUrl}">  
                    <button onclick="handleDeleteItem('${course.uid}')">Remove</button>
                </div>
                `;
            })
            .join(" ");
        if (!courseRoot) throw new Error("courseRoot is null");
        courseRoot.innerHTML = html;

    } catch (error) {
        console.error(error);
        return "";
    }
}

function renderActiveOrders() {
    try {
        const activeOrderRoot = document.querySelector("#activeOrderRoot");

        const activeOrders = restaurant.orders.filter((activeOrder) => activeOrder.status !== "initialized" || "Picked" || "Droppped");

        const html = activeOrders
            .map((order) => {
                return `
                <div class="activeOrders__order">order uid: ${order.uid}
                    <button onclick="updateStatus('${order.uid}')">${order.status}</button>
                </div>
                `
            })
            .join(" ");
        if (!activeOrderRoot) throw new Error("activeOrderRoot is null");
        activeOrderRoot.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

function renderRestaurantProfileImage() {
    try {
        const restaurantImage: HTMLElement | null = document.querySelector("#restaurantProfileImageRoot");

        if (restaurant && restaurantImage) {
            restaurantImage.innerHTML = `
            <img class="menu__course__image" src="${restaurant.imageUrl}">
            `
        }
    } catch (error) {
        console.error(error);
    }
}