function handleGetTypeRegister() {
    try {
        var chooseTypeSelect = document.getElementById('chooseTypeSelect');
        if (!chooseTypeSelect)
            throw new Error("The Type Value option not found");
        return chooseTypeSelect.value;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
function changeFormByTypeUser(typeUser) {
    try {
        // RESET ALL 
        var form = document.getElementById('formRegister');
        var formInput = form.querySelectorAll('input');
        var formSelect = form.querySelectorAll('select');
        formInput.forEach(function (input) { return input.classList.remove('active'); });
        formSelect.forEach(function (select) { return select.classList.remove('active'); });
        var name = form.querySelector('.name');
        var password = form.querySelector('.password');
        var email = form.querySelector('.email');
        var address = form.querySelector('.address');
        var area = form.querySelector('.area');
        var vehicle = form.querySelector('.vehicle');
        var age = form.querySelector('.age');
        var restaurantType = form.querySelector('.restaurant_type');
        console.log(form);
        switch (typeUser) {
            case "customer":
                name.classList.add('active');
                password.classList.add('active');
                email.classList.add('active');
                address.classList.add('active');
                break;
            case "restaurant":
                name.classList.add('active');
                password.classList.add('active');
                email.classList.add('active');
                address.classList.add('active');
                restaurantType.classList.add('active');
                break;
            case "courier":
                name.classList.add('active');
                password.classList.add('active');
                email.classList.add('active');
                area.classList.add('active');
                vehicle.classList.add('active');
                age.classList.add('active');
                break;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleSubmitFormRegister(ev) {
    try {
        ev.preventDefault();
        var _a = ev.target.elements, name = _a.name, password = _a.password, email = _a.email, address = _a.address, area = _a.area, vehicle = _a.vehicle, age = _a.age, restaurant_type = _a.restaurant_type;
        console.log(name);
        switch (handleGetTypeRegister()) {
            case "customer":
                customers.push(new Customer(name.value, password.value, email.value, address.value));
                saveInLocalStorage(customers, "customers");
                break;
            case "restaurant":
                restaurants.push(new Restaurant(name.value, password.value, email.value, address.value, restaurant_type.value));
                saveInLocalStorage(restaurants, "restaurants");
                break;
            case "courier":
                couriers.push(new Courier(name.value, password.value, email.value, area.value, vehicle.value, parseInt(age.value)));
                saveInLocalStorage(couriers, "couriers");
                break;
        }
        ev.target.reset();
        return window.location.href = '../../login/login.html';
    }
    catch (error) {
        console.error(error);
    }
}
