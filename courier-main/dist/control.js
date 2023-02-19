function renderPool(array) {
    try {
        var delieveryPool = document.querySelector(".open-orders");
        if (delieveryPool) {
            for (var i = 0; i < orders1.length; i++) {
                delieveryPool.innerHTML += "\n                <div class=\"order\">\n                    <h1> " + orders1[i].name + " </h1>\n                    <h1> " + orders1[i].restaurant.name + " </h1>\n                    <h3> " + orders1[i].destination + " </h3>\n                    <h3> " + orders1[i].status + " </h3>\n                    <button  onclick=\"pickup(event)\" class=\"pickupBtn\">Pick Up</button>\n                </div>\n                ";
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
var pickUpBtns = document.querySelectorAll('.pick-up-btn');
// Add event listener to each pick-up button
function pickup(event) {
    // Get the order element that contains the button
    var order = event.target.parentNode;
    var pickupBtn = event.target;
    // Remove the button from the order element
    pickupBtn.remove();
    // Add the finish button to the order element
    var finishBtn = document.createElement('button');
    finishBtn.textContent = 'Finish';
    finishBtn.className = 'finish-btn';
    order.appendChild(finishBtn);
    // Add the order element to the active orders section
    document.querySelector('.active-orders').appendChild(order);
    finishBtn.onclick = function completedOrder(event) {
        var finishBtn = event.target;
        var orderDone = event.target.parentNode;
        finishBtn.remove();
        document.querySelector('.completed-orders').appendChild(order);
    };
}
;
renderPool(orders1);
