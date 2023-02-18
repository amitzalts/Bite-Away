
function renderPool(array) {
    try {
        const delieveryPool = document.querySelector("#delieveryPool");
        if (delieveryPool) {
            for (let i = 0; i < orders.length; i++) {
                delieveryPool.innerHTML += `
                <div id="orderWrapper">
                <h1>Ordered by:${orders[i].name}</h1>
                <h1>Ordered from:${orders[i].restaurant}</h1>
                <h3>${orders[i].courses}</h3>
                <h3>Total:${orders[i].price}$</h3>
                <h3>notes:${orders[i].description}</h3>
                <button onclick="pickDelievery()" >Start Delievery</button>
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