const courseRoot = document.querySelector("#courseRoot"); //view

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


function renderMenuRest(){ // later add ability to update the course's name, price, description 
    try {
        const menu  = restaurant.menu;
        const html = menu
            .map((course) => {
                return `
                <div class="course">
                    <h3>${course.name}</h3>
                    <div>Price: ${course.price} <button onclick="handleUpdatePrice()">Update</button></div>
                    <div>Description: ${course.description} </div>
                    <div>uid: ${course.uid}</div>
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

