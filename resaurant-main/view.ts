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


function renderMenuRest() {
    try {
        const menu = restaurant.menu;
        console.log("restaurant", restaurant)
        const html = menu
            .map((course) => {
                return `
                <div class="menu__course">
                <button id="update-${course.uid}" onclick="handleUpdateCourse('${course.uid}')">udpate</button>   
                <button style="display:none" id="save-${course.uid}" onclick="saveUpdatedCourse('${course.uid}')">save</button>   
                    <h3 id="upadteName-${course.uid}" contenteditable="false">${course.name}</h3>
                    <div class="menu__course__detail">
                        <label>Price:</label>
                        <div id="upadtePrice-${course.uid}" contenteditable="false">${course.price}</div>
                    </div>
                    <div class="menu__course__detail">
                        <label>Description:</label>
                        <div id="upadteDescription-${course.uid}" contenteditable="false">${course.description}</div>
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
console.log(activeOrders)
        const html = activeOrders
            .map((order) => {
                return `
                <div class="activeOrders__order">order uid: ${order.uid}
                    <div class="activeOrders__order__detail">customer uid: ${order.customerId}</div>
                    <div class="activeOrders__order__detail">order destination: ${order.destination}</div>
                    <div id="coursesRoot" class="activeOrders__order__detail">courses: </div>
                    <div id="SumRoot" class="activeOrders__order__detail">sum: ${order.sum()} </div>
                    <button onclick="updateStatus('${order.uid}')">${order.status}</button>
                </div>
                `
            })
            .join(" ");
        if (!activeOrderRoot) throw new Error("activeOrderRoot was not found");
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

