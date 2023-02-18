
function renderPool(array) {
    try {
        const delieveryPool = document.querySelector("#delieveryPool");
        if (delieveryPool) {
            for (let i = 0; i < orders.length; i++) {
                delieveryPool.innerHTML += `
                <div id="orderWrapper">
                    <h1> ${orders1[i].name} </h1>
                    <h1> ${orders1[i].restaurant.name} </h1>
                    <h1> ${orders1[i].destination} </h1>
                    <h1> ${orders1[i].status} </h1>
                </div>
                `;
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}

function pickDelievery(){
console.log(orders[i].name)
}

console.log("restaurants", restaurants);

