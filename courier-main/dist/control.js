function renderPool(array) {
    try {
        var delieveryPool = document.querySelector("#delieveryPool");
        if (delieveryPool) {
            for (var i = 0; i < orders.length; i++) {
                delieveryPool.innerHTML += "\n                <div id=\"orderWrapper\">\n                    <h1> " + orders1[i].name + " </h1>\n                    <h1> " + orders1[i].restaurant.name + " </h1>\n                    <h1> " + orders1[i].destination + " </h1>\n                    <h1> " + orders1[i].status + " </h1>\n                </div>\n                ";
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function pickDelievery() {
    console.log(orders[i].name);
}
console.log("restaurants", restaurants);
