const pickUpBtns = document.querySelectorAll('.pick-up-btn');
// const orderPool = getInfoFromStorage("orderPool") as Order[];

function renderPool() {
    try {
        const delieveryPool = document.querySelector("#openOrdersRoot");
        if (delieveryPool) {
           let html = orderPool
           .map ((orderPool) =>{
                return `
                <div class="order">
                    <h1> ${orderPool.name} </h1>
                    <h1> ${orderPool.restaurantId} </h1>
                    <h1 style="display:none;" class="custId"> ${orderPool.uid} </h1>
                    <h3> ${orderPool.destination} </h3>
                    <h3 class="status"> ${orderPool.status} </h3>
                    <button  onclick="pickup('${orderPool.uid}')" class="pickupBtn">Pick Up</button>
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
                    <button  onclick="drop('${activeOrder.customerId}')" class="dropBtn">Drop</button>
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
function renderDroppedOrders() {
    try {
        const delieveryPool = document.querySelector("#droppedOrdersRoot");
        const droppedOrders = droppedOrdersList();
        if (delieveryPool) {
           let html = droppedOrders
           .map ((droppedOrders) =>{
                return `
                <div class="order">
                    <h1> ${droppedOrders.name} </h1>
                    <h1> ${droppedOrders.restaurantId} </h1>
                    <h1 style="display:none;" class="custId"> ${droppedOrders.uid} </h1>
                    <h3> ${droppedOrders.destination} </h3>
                    <h3 class="status"> ${droppedOrders.status} </h3>
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

function pickup(uid) {
   try {
        if(courier.orders.length === 0){
            const order = orderPool.find(order => order.uid === uid) ;
            const orderIndex = orderPool.findIndex(order => order.uid === uid) ;
    if (orderIndex === -1) throw new Error("order not found");
    if(!order)  throw new Error ("order not found")
            order.status = "Picked";
            courier.orders.push(order)
            orderPool.splice(orderIndex , 1)
            renderPool()    
            renderActiveOrders()
            saveInLocalStorage(orderPool , "orderPool")
        }
        else{
            alert("You already have an active order.")
        }
   
   } catch (error) {
        console.log(error);
            
   }
};

function drop() {
try {
    const activeOrder = courier.orders[0];
    const customer = customers.find(customer => customer.uid === activeOrder.customerId );
    if (!customer) throw new Error ("no customer found");
    const customerActiveOrder = customer.orders.find(activeOrder => activeOrder.uid === activeOrder.uid);
    if (!customerActiveOrder) throw new Error ("no customer order found");
    activeOrder.status = "Dropped";
    customerActiveOrder.status = "Dropped";
    saveInLocalStorage(customers ,"customers")
    saveInLocalStorage(couriers ,"couriers")
    const activeOrdersRoot = document.querySelector("#activeOrdersRoot");
    if(!activeOrdersRoot) throw new Error ("active orders root not found")
    activeOrdersRoot.innerHTML = " "
    courier.orders.pop()
} catch (error) {
    console.log(error);
    
}
}

function droppedOrdersList(){
    const dropped = courier.orders.filter(orders => orders.status === "Dropped");
    return dropped
}