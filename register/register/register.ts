function handleGetTypeRegister(): string {
    try {
        const chooseTypeSelect = document.getElementById('chooseTypeSelect')! as HTMLOptionElement

        if (!chooseTypeSelect) throw new Error("The Type Value option not found");

        return chooseTypeSelect.value
    } catch (error) {
        console.error(error);
        return ''
    }
}

function changeFormByTypeUser(typeUser: string) {
    try {

        // RESET ALL 
        const form = document.getElementById('formRegister')! as HTMLFormElement;
        const formInput = form.querySelectorAll('input');
        const formSelect = form.querySelectorAll('select');
        formInput.forEach(input => input.classList.remove('active'))
        formSelect.forEach(select => select.classList.remove('active'))

        const name = form.querySelector('.name')! as HTMLInputElement
        const password = form.querySelector('.password')! as HTMLInputElement
        const email = form.querySelector('.email')! as HTMLInputElement
        const address = form.querySelector('.address')! as HTMLInputElement
        const area = form.querySelector('.area')! as HTMLInputElement
        const vehicle = form.querySelector('.vehicle')! as HTMLInputElement
        const age = form.querySelector('.age')! as HTMLInputElement
        const restaurantType = form.querySelector('.restaurant_type')! as HTMLInputElement

        console.log(form);
        switch (typeUser) {
            case "customer":
                name.classList.add('active');
                password.classList.add('active');
                email.classList.add('active')
                address.classList.add('active')
                break;

            case "restaurant":
                name.classList.add('active');
                password.classList.add('active');
                email.classList.add('active')
                address.classList.add('active');
                restaurantType.classList.add('active')
                break;

            case "courier":
                name.classList.add('active');
                password.classList.add('active');
                email.classList.add('active')
                area.classList.add('active');
                vehicle.classList.add('active');
                age.classList.add('active')
                break
        }
    } catch (error) {
        console.error(error);
    }
}

function handleSubmitFormRegister(ev: any) {
    try {
        ev.preventDefault()

        const { name, password, email, address, area, vehicle, age, restaurant_type } = ev.target.elements 
        console.log(name);
        switch (handleGetTypeRegister()) {
            case "customer":
                customers.push(new Customer(name.value, password.value, email.value, address.value))
                saveInLocalStorage(customers , "customers");
                break;

            case "restaurant":
                restaurants.push(new Restaurant(name.value, password.value, email.value, address.value, restaurant_type.value))
                saveInLocalStorage(restaurants , "restaurants");
                break;

            case "courier":
                couriers.push(new Courier(name.value,password.value,email.value,area.value, vehicle.value ,parseInt(age.value)))
                saveInLocalStorage(couriers , "couriers");
                break;
        }
            ev.target.reset();

            return window.location.href = '../../login/login.html'
    } catch (error) {
        console.error(error);
    }
}