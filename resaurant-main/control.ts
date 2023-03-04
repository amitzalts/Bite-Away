function handleAddCourse(ev: any) {
    try {
        ev.preventDefault();

        const name = ev.target.elements.name.value as string;
        const price = ev.target.elements.price.valueAsNumber as number;
        const description = ev.target.elements.description.value as string;
        const imageUrl = ev.target.elements.imageUrl.value as string;
        
        restaurant.menu.push(new Course(name, price, description, imageUrl));
        
        saveMenu(restaurant.uid, restaurant.menu);

        ev.target.reset();

        renderMenuRest();
        
    } catch (error) {
        console.error(error);
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

function updateStatus(uid:string){
    try {
        const order = restaurant.orders.find(order => order.uid === uid);
        if (!order) throw new Error("order not found");

        order.status = "ready";

        orderPool.push(order);

        saveInLocalStorage(restaurants, "restaurants");
        saveInLocalStorage(orderPool, "orderPool");

        renderActiveOrders();

        console.log("rest", restaurants);
        console.log("orderPool", orderPool);

    } catch (error) {
        console.error(error);
    }
}

function restaurantProfileImage(ev: any) {
    try {
        ev.preventDefault();

        const imageUrl = ev.target.elements.imageUrl.value as string;
        
        restaurant.imageUrl = imageUrl;
        
        saveInLocalStorage(restaurants, "restaurants");

        ev.target.reset();

        renderRestaurantProfileImage();
        
    } catch (error) {
        console.error(error);
    }
}