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
