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




//---------------------------------------------------------- VIEW
const courierId = document.querySelectorAll("#courierId");
const delieveryPool = document.querySelectorAll("#delieveryPool");

// const resataurant = new Restaurant("name", "password", "email", "address", "type");


// const order1 = new Order("Tal", "new", "courier1", undefined, "Yafe Nof 34", "ready");
// const order2 = new Order("Yuval", "new", "courier2", undefined, "Aharo n 21", "ready");
// const order3 = new Order("Oren", "new", "courier3", undefined, "Ben Gurion 32", "ready");
// const order4 = new Order("Moses", "new", "courier4", undefined, "Balfour 10", "ready");
// const order5 = new Order("Gil", "new", "courier5", undefined, "Tel Nof 21", "ready");
// const orders1: Order[] = [];



// console.log(orders1);






function enterOrdersLocalStorage() {

    const order1 = new Order("Tal", "new", "courier1", undefined, "Yafe Nof 34", "ready");
    const order2 = new Order("Yuval", "new", "courier2", undefined, "Aharo n 21", "ready");
    const order3 = new Order("Oren", "new", "courier3", undefined, "Ben Gurion 32", "ready");
    const order4 = new Order("Moses", "new", "courier4", undefined, "Balfour 10", "ready");
    const order5 = new Order("Gil", "new", "courier5", undefined, "Tel Nof 21", "ready");
    const orders1: Order[] = [];

    orders1.push(order1, order2, order3, order4, order5);
    saveInLocalStorage(orders1 , "orders")
}



