const amit = new Restaurant("amit", "a", "b", "c", "d");
const orel = new Restaurant("orel", "e", "f", "g", "h");
const dor = new Restaurant("dor", "i", "j", "k", "l");
const zalts = new Restaurant("zalts", "m", "n", "o", "p");
const karako = new Restaurant("karako", "q", "r", "s", "t");
const book = new Restaurant("book", "u", "v", "w", "x");

restaurants.push(amit, orel, dor, zalts, karako, book);



const pasta = new Course("pasta", amit, 10);
const pizza = new Course("pizza", amit, 20);
const ravioli = new Course("ravioli", amit, 30);
const teramisu = new Course("teramisu", amit, 40);

//we get a menu (Course[]), from another page.
if(!restaurants[0].menu) throw new Error("menu undefined");
restaurants[0].menu.push(pasta, pizza, ravioli, teramisu);

console.log("amitMenu", restaurants[0].menu);



restaurants[1].menu.push(
    new Course("eggroll", orel, 50),
    new Course("pad thai", orel, 60),
    new Course("sushi", orel, 70),
    new Course("cake", orel, 80),
)


function renderRestaurants() {
    try {
        const restaurantRoot: HTMLDivElement | null = document.querySelector("#restaurantRoot");
        if (restaurantRoot) {
            for (let i = 0; i < restaurants.length; i++) {
                restaurantRoot.innerHTML += `
                <div id=uid-${restaurants[i].uid} class="results__restaurant">
                <div id=uid-${restaurants[i].uid}Root ></div>
                    <div class="results__restaurant__wrapper">
                        <span>Name: ${restaurants[i].name} </span>
                        <span>Address: ${restaurants[i].address} </span>
                        <span>Type: ${restaurants[i].type} </span>
                    </div>
                    <button onclick="openMenu('${restaurants[i].uid}')">open menu</button>    
                </div>`;
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}

function openMenu(uid: string) {
    try {
        const menu: HTMLElement | null = document.querySelector(`#uid-${uid}Root`);
        if (!menu) throw new Error("could not find root");

        const index = restaurants.findIndex((restaurant) => restaurant.uid === uid);
        menu.innerHTML = `
       <div class="menu">${restaurants[index].name} 
            <button class="menu__close" onclick="closeMenu('${uid}')">close</button>
            <div id=menuRoot${uid}></div>
       </div>
       `
       const menuRoot = document.querySelector(`#menuRoot${uid}`)
        if(menuRoot) menuRoot.innerHTML = renderMenuForCustomer(uid);
    } catch (error) {
        console.error(error);
    }
}

function renderMenuForCustomer(uid): string {
    try {
        const index = restaurants.findIndex((restaurant) => restaurant.uid === uid);
        
        const html = restaurants[index].menu
            .map((course) => {
                return `
            <div class="course">
                <h3>${course.name}</h3>
                <div>Price: ${course.price}</div>
            </div>
            `;
            })
            .join(" ");

        return html;


    } catch (error) {
        console.error(error);
        return "";
    }
}




function closeMenu(uid: string) {
    try {
        const menu: HTMLElement | null = document.querySelector(`#uid-${uid}Root`);
        if (!menu) throw new Error("could not find root");
        menu.innerHTML = "";
    } catch (error) {
        console.error(error);
    }
}


function search(): void {
    try {
        const userInput: Element | null = document.querySelector("#userInput");
        const noResults: HTMLDivElement | null = document.querySelector("#noResultsRoot");

        userInput?.addEventListener("input", (search) => {
            let userInputValue = (search.target as HTMLInputElement).value
            userInputValue = userInputValue.toLocaleLowerCase();

            let results = document.querySelectorAll<HTMLElement>(".results__restaurant");
            for (let i = 0; i < results.length; i++) {
                if (results[i].innerText.toLowerCase().includes(userInputValue) && noResults) {
                    results[i].style.display = "";
                    noResults.style.display = "none";
                } else {
                    results[i].style.display = "none";
                }
            }

            let allrestaurants = document.querySelectorAll<HTMLElement>(".results");
            for (let i = 0; i < results.length; i++) {
                if (!allrestaurants[i].innerText.toLowerCase().includes(userInputValue) && noResults) {
                    noResults.style.display = "";
                    noResults.innerHTML = `Sorry, there isn't a restaurant that icludes <u><b>${userInputValue}</b></u> on Bite Away...`;
                }
            }
        }
        );
    } catch (error) {
        console.error(error);
        return error;
    }
}