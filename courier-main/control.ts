const pickUpBtns = document.querySelectorAll('.pick-up-btn');
const ordersArray = getInfoFromStorage("orderPool") as Order[];
console.dir(ordersArray);



function renderPool(array) {
    try {
        const delieveryPool = document.querySelector(".open-orders");
        if (delieveryPool) {
           const html = array
           .map ((array) =>{
                delieveryPool.innerHTML += `
                <div class="order">
                    <h1> ${array.name} </h1>
                    <h1> ${array.restaurantId} </h1>
                    <h1 style="display:none;" class="custId"> ${array.uid} </h1>
                    <h3> ${array.destination} </h3>
                    <h3 class="status"> ${array.status} </h3>
                    <button  onclick="pickup(event)" class="pickupBtn">Pick Up</button>
                </div>
                `;
                
            })
            .join(" ");
        }
    }
    catch (error) {
        console.error(error);
    }
}


function pickup(event) {
   try {
    const order: HTMLElement = event.target.parentNode as HTMLElement;
    const orderId = document.querySelector(".custId")?.innerHTML as string;
    console.log(orderId);
    const curOrder = ordersArray.find(order => order.uid === orderId) ;
    if(!curOrder)  throw new Error ("order not found")
    
    console.log(curOrder?.name);
    

   } catch (error) {
        console.log(error);
            
   }
};

renderPool(ordersArray)














// const curOrder = ordersArray.find(order => order.uid)!;
// console.log(curOrder);
// curOrder.status = "On Delivery"
//   // Get the order element that contains the button
//   const order: HTMLElement = event.target.parentNode as HTMLElement;
//   const pickupBtn: HTMLButtonElement = event.target;
//   // Remove the button from the order element
//   pickupBtn.remove();
//   // Add the finish button to the order element
//   const finishBtn: HTMLButtonElement = document.createElement('button')
//   finishBtn.textContent = 'Finish'
//   finishBtn.className = 'finish-btn'
//   order.appendChild(finishBtn);

//   finishBtn.onclick = function completedOrder(event){
//             const finishBtn: HTMLButtonElement = event.target;
//             const orderDone: HTMLElement = event.target.parentNode as HTMLElement;
//             finishBtn.remove();
//             (document.querySelector('.completed-orders') as HTMLElement).appendChild(order);
// enterOrdersLocalStorage()
// saveInLocalStorage("orders")