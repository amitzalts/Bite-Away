var pickUpBtns = document.querySelectorAll('.pick-up-btn');
var ordersArray = getInfoFromStorage("orderPool");
console.dir(ordersArray);
console.log("orderpool", orderPool);
function renderPool(array) {
    try {
        var delieveryPool_1 = document.querySelector(".open-orders");
        if (delieveryPool_1) {
            var html = array
                .map(function (array) {
                delieveryPool_1.innerHTML += "\n                <div class=\"order\">\n                    <h1> " + array.name + " </h1>\n                    <h1> " + array.restaurantId + " </h1>\n                    <h3> " + array.destination + " </h3>\n                    <h3 class=\"status\"> " + array.status + " </h3>\n                    <button  onclick=\"pickup(event)\" class=\"pickupBtn\">Pick Up</button>\n                </div>\n                ";
            });
            console.log(ordersArray);
        }
    }
    catch (error) {
        console.error(error);
    }
}
// Add event listener to each pick-up button
function pickup(event) {
}
;
renderPool(ordersArray);
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
