function renderPool(array) {
    try {
        var delieveryPool = document.querySelector("#delieveryPool");
        if (delieveryPool) {
            for (var i = 0; i < orders.length; i++) {
                delieveryPool.innerHTML += "\n                <div id=\"orderWrapper\">\n                <h1>Ordered by:" + orders[i].name + "</h1>\n                <h1>Ordered from:" + orders[i].restaurant + "</h1>\n                <h3>" + orders[i].courses + "</h3>\n                <h3>Total:" + orders[i].price + "$</h3>\n                <h3>notes:" + orders[i].description + "</h3>\n                <button onclick=\"pickDelievery()\" >Start Delievery</button>\n                </div>\n                ";
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
