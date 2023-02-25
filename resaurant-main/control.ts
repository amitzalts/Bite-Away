const courseRoot = document.querySelector("#courseRoot"); //view

const _restaurant = loggedInRestaurant(); //index
if(!_restaurant) throw new Error("no restaurant found");

const restaurant = _restaurant; //index



function handleAddCourse(ev: any) {
    try {
        ev.preventDefault();

        const name = ev.target.elements.name.value as string;
        const price = ev.target.elements.price.valueAsNumber as number;
        const description = ev.target.elements.description.value as string;
        
        restaurant.menu.push(new Course(name, price, description));
        
        saveMenu(restaurant.uid, restaurant.menu);

        ev.target.reset();

        renderMenuRest();
        
    } catch (error) {
        console.error(error);
    }
}


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


function handleDeleteItem(uid: string) {
    try {

        const index = restaurant.menu.findIndex((item) => item.uid === uid);
        if (index === -1) throw new Error("course not found");
        restaurant.menu.splice(index, 1);

        if (!courseRoot) throw new Error("courseRoot is undefined");
        renderMenuRest();
        saveMenu(restaurant.uid, restaurant.menu);

    } catch (error) {
        console.error(error);
    }
}
