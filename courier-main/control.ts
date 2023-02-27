
function renderPool(array) {
    try {
        const delieveryPool = document.querySelector(".open-orders");
        if (delieveryPool) {
            for (let i = 0; i < orders1.length; i++) {
                delieveryPool.innerHTML += `
                <div class="order">
                    <h1> ${orders1[i].name} </h1>
                    <h1> ${orders1[i].restaurantId} </h1>
                    <h3> ${orders1[i].destination} </h3>
                    <h3> ${orders1[i].status} </h3>
                    <button  onclick="pickup(event)" class="pickupBtn">Pick Up</button>
                </div>
                `;
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}

const pickUpBtns = document.querySelectorAll('.pick-up-btn');

// Add event listener to each pick-up button
function pickup(event) {
      // Get the order element that contains the button
      const order: HTMLElement = event.target.parentNode as HTMLElement;
      const pickupBtn: HTMLButtonElement = event.target;
      // Remove the button from the order element
      pickupBtn.remove();
      // Add the finish button to the order element
      const finishBtn: HTMLButtonElement = document.createElement('button')
      finishBtn.textContent = 'Finish'
      finishBtn.className = 'finish-btn'
      order.appendChild(finishBtn);
      // Add the order element to the active orders section
      (document.querySelector('.active-orders') as HTMLElement).appendChild(order);
      finishBtn.onclick = function completedOrder(event){
                const finishBtn: HTMLButtonElement = event.target;
                const orderDone: HTMLElement = event.target.parentNode as HTMLElement;
                finishBtn.remove();
                (document.querySelector('.completed-orders') as HTMLElement).appendChild(order);
          }
      };

renderPool(orders1)