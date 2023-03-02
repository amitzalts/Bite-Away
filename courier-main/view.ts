//--------------------------------------------------------- INDEX
const _courier = loggedInCourier();
if(!_courier) throw new Error("no _courier found");
const courier = _courier;
console.log(courier.name);


function renderCourierHeader() {
    try {
        const courierHeader: HTMLElement | null = document.querySelector("#courierHeader"); 

        if (courier && courierHeader) {
            courierHeader.innerText = `hello ${courier.name}`    
        }
    } catch (error) {
        console.error(error);
    }
}

function renderDroppedOrders() {
    try {
        const delieveryPool = document.querySelector("#droppedOrdersRoot");
        const droppedOrders = droppedOrdersList();
        console.log(droppedOrders);
        if (delieveryPool) {
           let html = droppedOrders
           .map ((droppedOrders) =>{
                return `
                <div class="order">
                    <h1>name: ${droppedOrders.name} </h1>
                    <h1>restId: ${droppedOrders.restaurantId} </h1>
                    <h3> destination: ${droppedOrders.destination} </h3>
                    <h3 class="status">status: ${droppedOrders.status} </h3>
                </div>
                `;
                
            })
            .join(" ");
            delieveryPool.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}

function renderActiveOrders() {
    try {
        const delieveryPool = document.querySelector("#activeOrdersRoot");
        const activeOrder = courier.orders;
        if (delieveryPool) {
           let html = activeOrder
           .map ((activeOrder) =>{
                return `
                <div class="order">
                    <h1> ${activeOrder.name} </h1>
                    <h1> ${activeOrder.restaurantId} </h1>
                    <h1 style="display:none;" class="custId"> ${activeOrder.uid} </h1>
                    <h3> ${activeOrder.destination} </h3>
                    <h3 class="status"> ${activeOrder.status} </h3>
                    <button  onclick="dropOrder('${activeOrder.customerId}')" class="dropBtn">Drop</button>
                </div>
                `;
                
            })
            .join(" ");
            delieveryPool.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}

function renderPool() {
    try {
        console.log(orderPool[0].uid);
        const delieveryPool = document.querySelector("#openOrdersRoot");
        if (delieveryPool) {
           let html = orderPool
           .map ((order) =>{
                return `
                <div class="order">
                    <h1> name: ${order.name} </h1>
                    <h1> restaurant-ID: ${order.restaurantId} </h1>
                    <h1 class="custId"> order-ID: ${order.uid} </h1>
                    <h3> destination: ${order.destination} </h3>
                    <h3 class="status"> status: ${order.status} </h3>
                    <button  onclick="pickupOrder('${order.uid}')" class="pickupBtn">Pick Up</button>
                </div>
                `;
                
            })
            .join(" ");
            delieveryPool.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}


//---------------------------------------------------------- VIEW
const courierId = document.querySelectorAll("#courierId");
const delieveryPool = document.querySelectorAll("#delieveryPool");





// function enterOrdersLocalStorage() {

//     const order1 = new Order("Tal", "new", "123", undefined, "Yafe Nof 34", "ready");
//     const order2 = new Order("Yuval", "new", "courier2", undefined, "Aharo n 21", "ready");
//     const order3 = new Order("Oren", "new", "courier3", undefined, "Ben Gurion 32", "ready");
//     const order4 = new Order("Moses", "new", "courier4", undefined, "Balfour 10", "ready");
//     const order5 = new Order("Gil", "new", "courier5", undefined, "Tel Nof 21", "ready");
//     const orders1: Order[] = [];

//     orders1.push(order1, order2, order3, order4, order5);
//     saveInLocalStorage(orders1 , "orderPool")
// }



