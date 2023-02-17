
restaurants.push(
    new Restaurant("amit", "a", "b", "c", "d"),
    new Restaurant("orel", "e", "f", "g", "h"),
    new Restaurant("dor", "i", "j", "k", "l"),
    new Restaurant("zalts", "m", "n", "o", "p"),
    new Restaurant("karak", "q", "r", "s", "t"),
    new Restaurant("book", "u", "v", "w", "x"),
);



function renderRestaurants() {
    const restaurantRoot: HTMLDivElement | null = document.querySelector("#restaurantRoot");
    if (restaurantRoot) {
        for (let i = 0; i < restaurants.length; i++) {
            const restaurant = document.createElement("div");
            restaurant.innerHTML = `
          <div id=${restaurants[i].uid} class="results__restaurant">
              <div class="results__restaurant__wrapper">
                  <span>Name: ${restaurants[i].name} </span>
                  <span>Address: ${restaurants[i].address} </span>
                  <span>Type: ${restaurants[i].type} </span>
              </div>
              <button onclick="openMenu()">open menu</button>    
          </div>`;
            document.querySelector("#restaurantRoot")?.appendChild(restaurant); //change to += inner html
        }
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