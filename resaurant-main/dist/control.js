var menu = [];
var courseRoot = document.querySelector("#courseRoot"); //view
function handleAddCourse(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var price = ev.target.elements.price.valueAsNumber;
        var description = ev.target.elements.description.value;
        var restaurant = "examle"; //need to change to the loded in restaurant
        menu.push(new Course(name, restaurant, price));
        ev.target.reset();
        if (!courseRoot)
            throw new Error("courseRoot is null");
        courseRoot.innerHTML = renderMenu(menu);
    }
    catch (error) {
        console.error(error);
    }
}
function renderMenu(menu) {
    try {
        if (!menu || !Array.isArray(menu))
            throw new Error("items is not an array");
        var html = menu
            .map(function (course) {
            console.log("" + course.uid);
            return "\n            <div class=\"course\">\n                <h3>" + course.name + "</h3>\n                <div>Price: " + course.price + " <button onclick=\"handleUpdatePrice()\">Update</button></div>\n                <div>uid: " + course.uid + "</div>\n                <button onclick=\"handleDeleteItem('" + course.uid + "')\">Remove</button>\n            </div>\n            ";
        })
            .join(" ");
        console.log(html);
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function handleDeleteItem(uid) {
    try {
        console.log(uid);
        var index = menu.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("course not found");
        menu.splice(index, 1);
        if (!courseRoot)
            throw new Error("courseRoot is undefined");
        courseRoot.innerHTML = renderMenu(menu);
    }
    catch (error) {
        console.error(error);
    }
}
