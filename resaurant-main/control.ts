const menu: Course[] = [];

const courseRoot = document.querySelector("#courseRoot"); //view

function handleAddCourse(ev: any) {
    try {
        ev.preventDefault();

        const name = ev.target.elements.name.value;
        const price = ev.target.elements.price.valueAsNumber;
        const description = ev.target.elements.description.value;
        const restaurant: string | Restaurant = "examle"; //need to change to the loded in restaurant

        menu.push(new Course(name, restaurant, price));

        ev.target.reset();

        if (!courseRoot) throw new Error("courseRoot is null");

        courseRoot.innerHTML = renderMenu(menu);

    } catch (error) {
        console.error(error);
    }
}




function renderMenu(menu: Course[]): string {
    try {
        if (!menu || !Array.isArray(menu))
            throw new Error("items is not an array");

        const html = menu
            .map((course) => {
                console.log(`${course.uid}`);
                return `
            <div class="course">
                <h3>${course.name}</h3>
                <div>Price: ${course.price} <button onclick="handleUpdatePrice()">Update</button></div>
                <div>uid: ${course.uid}</div>
                <button onclick="handleDeleteItem('${course.uid}')">Remove</button>
            </div>
            `;
            })
            .join(" ");
        console.log(html);
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}



function handleDeleteItem(uid: string) {
    try {
        console.log(uid);
        const index = menu.findIndex((item) => item.uid === uid);
        if (index === -1) throw new Error("course not found");
        menu.splice(index, 1);

        if (!courseRoot) throw new Error("courseRoot is undefined");
        courseRoot.innerHTML = renderMenu(menu);
    } catch (error) {
        console.error(error);
    }
}
