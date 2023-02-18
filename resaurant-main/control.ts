
const menu: Course[] = []; //change to the relevant menu of the logged in resataurant

const courseRoot = document.querySelector("#courseRoot"); //view

restaurants.push(new Restaurant('Amit', '1234', 'amitzalts@gmail.com', 'ela 5', 'italian'));


function loggedInRestaurant(): Restaurant {
    
    const restaurant = restaurants.find((restaurant) => restaurant.uid); 
    if (!restaurant) {
      throw new Error("could not find logged in restaurant");
    } else {
      return restaurant;
    }
}


function handleAddCourse(ev: any) {
    try {
        ev.preventDefault();

        const name = ev.target.elements.name.value;
        const price = ev.target.elements.price.valueAsNumber;
        const restaurant = loggedInRestaurant();

        menu.push(new Course(name, restaurant, price));

        ev.target.reset();

        if (!courseRoot) throw new Error("courseRoot is null");

        courseRoot.innerHTML = renderMenu(menu);
        saveInLocalStorage(restaurants, "restaurants");

    } catch (error) {
        console.error(error);
    }
}


function renderRestaurantHeader() {
    try {
        const restaurantHeader: HTMLElement | null = document.querySelector("#restaurantHeader"); 
        const restaurant: Restaurant = loggedInRestaurant();
        if (restaurant && restaurantHeader) {
            restaurantHeader.innerText = `${restaurant.name}`    
        }
    } catch (error) {
        console.error(error);
    }
}


function renderMenu(menu: Course[]): string {
    try {
        const restaurant: Restaurant = loggedInRestaurant();
        if (!restaurant) throw new Error("logged in restaurant not found");


            if (!menu || !Array.isArray(menu))
                throw new Error("menu is not an array");

            const html = menu
                .map((course) => {
                    return `

            <div class="course">
                <h3>${course.name}</h3>
                <div>Price: ${course.price} <button onclick="handleUpdatePrice()">Update</button></div>
                <div>uid: ${course.uid}</div>
                <div>restaurant: ${course.restaurant.name}</div>
                <button onclick="handleDeleteItem('${course.uid}')">Remove</button>
            </div>
            `;
                })
                .join(" ");

            return html;
        
        
    } catch (error) {
        console.error(error);
        return "";
    }
}



function handleDeleteItem(uid: string) {
    try {
        const index = menu.findIndex((item) => item.uid === uid);
        if (index === -1) throw new Error("course not found");
        menu.splice(index, 1);

        if (!courseRoot) throw new Error("courseRoot is undefined");
        courseRoot.innerHTML = renderMenu(menu);

        saveInLocalStorage(restaurants, "restaurants");

    } catch (error) {
        console.error(error);
    }
}


