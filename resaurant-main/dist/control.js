var menu = []; //change to the relevant menu of the logged in resataurant
var courseRoot = document.querySelector("#courseRoot"); //view
restaurants.push(new Restaurant('Amit', '1234', 'amitzalts@gmail.com', 'ela', 'italian'));
function loggedInRestaurant() {
    var restaurant = restaurants.find(function (restaurant) { return restaurant.uid; });
    if (!restaurant) {
        throw new Error("could not find logged in restaurant");
    }
    else {
        return restaurant;
    }
}
function handleAddCourse(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var price = ev.target.elements.price.valueAsNumber;
        var restaurant = loggedInRestaurant();
        menu.push(new Course(name, restaurant, price));
        ev.target.reset();
        if (!courseRoot)
            throw new Error("courseRoot is null");
        courseRoot.innerHTML = renderMenu(menu);
        saveInLocalStorage(restaurants, "restaurants");
    }
    catch (error) {
        console.error(error);
    }
}
function renderRestaurantHeader() {
    try {
        var restaurantHeader = document.querySelector("#restaurantHeader");
        var restaurant = loggedInRestaurant();
        if (restaurant && restaurantHeader) {
            restaurantHeader.innerText = "" + restaurant.name;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderMenu(menu) {
    try {
        var restaurant = loggedInRestaurant();
        if (!restaurant)
            throw new Error("logged in restaurant not found");
        if (!menu || !Array.isArray(menu))
            throw new Error("menu is not an array");
        var html = menu
            .map(function (course) {
            return "\n\n            <div class=\"course\">\n                <h3>" + course.name + "</h3>\n                <div>Price: " + course.price + " <button onclick=\"handleUpdatePrice()\">Update</button></div>\n                <div>uid: " + course.uid + "</div>\n                <div>restaurant: " + course.restaurant.name + "</div>\n                <button onclick=\"handleDeleteItem('" + course.uid + "')\">Remove</button>\n            </div>\n            ";
        })
            .join(" ");
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function handleDeleteItem(uid) {
    try {
        var index = menu.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("course not found");
        menu.splice(index, 1);
        if (!courseRoot)
            throw new Error("courseRoot is undefined");
        courseRoot.innerHTML = renderMenu(menu);
        saveInLocalStorage(restaurants, "restaurants");
    }
    catch (error) {
        console.error(error);
    }
}
// USER SETTING OREL
// function checkMatchUserDetails(emailUser: string, passwordUser: string , array:Restaurant[] | Customer[] | Courier[]): boolean{
//     try {
//          const userType= array.findIndex(user=>emailUser.toLowerCase() === user.email.toLowerCase() && passwordUser === user.password)
//             if(userType === -1) return false 
//             else  {
//                 if(userType)
//                 localStorage.setItem("userIndex", userType.toString())
//                 return true
//             }
//     } catch (error) {
//         console.error(error);
//         return false
//     }
// }
// function checksIfUserExists(emailUser: string , array:Restaurant[] | Customer[] | Courier[]): boolean): boolean{
//     try {
//         const userCur = users.find(user => user.email === emailUser)
//         if (!userCur) return false
//         else {
//             return true
//         }
//     } catch (error) {
//         console.error(error);
//         return false
//     }
// }
// function openMenuLogoutBtn(): void {
//     try {
//         const collapseUserLogout = document.querySelector(".user-box-profile-collapse")! as HTMLDListElement;
//         const collapseUserLogoutIcon = document.querySelector(".user-box-profile i") as HTMLElement;
//         const userBoxProfileClick = document.querySelector('.user-box-profile ')! as HTMLDListElement;;
//         userBoxProfileClick?.addEventListener('click', (e) => {
//             collapseUserLogout.classList.toggle('active')
//             if (collapseUserLogout.classList.contains('active')) {
//                 collapseUserLogoutIcon.style.rotate = '180deg'
//             } else {
//                 collapseUserLogoutIcon.style.rotate = '0deg'
//             }
//         })
//     } catch (error) {
//         console.error(error);
//     }
// }
// function logOut(): void {
//     try {
//         localStorage.setItem("userLogIn", "false")
//     } catch (error) {
//         console.error(error);
//     }
// }
// function insideTheUser(): boolean | undefined {
//     try {
//         if (localStorage.getItem("userLogIn") === "true") {
//             return true
//         } else {
//             return false
//         }
//     } catch (error) {
//         console.error(error);
//         return false
//     }
// }
// // LOGIN 
// function handleSubmitLogIn(ev: any) {
//     try {
//         ev.preventDefault()
//         const { emailLogin, passwordLogin } = ev.target.elements
//         const errorMsgEmailInputLog: HTMLElement = document.getElementById('errorMsgEmailInputLOG')! as HTMLElement;
//         const errorMsgPasswordInputLog: HTMLElement = document.getElementById('errorMsgPasswordInputLOG')! as HTMLElement;
//         if (emailLogin.value == '') {
//             errorMsgEmailInputLog.innerText = "Please enter your ProList username or email address."
//             errorMsgEmailInputLog.parentElement!.classList.add("empty")
//             return
//         } else {
//             errorMsgEmailInputLog.parentElement!.classList.remove("empty")
//         }
//         if (passwordLogin.value == '') {
//             errorMsgPasswordInputLog!.innerText = "Please enter your password."
//             errorMsgPasswordInputLog.parentElement!.classList.add("empty")
//             return
//         } else {
//             errorMsgPasswordInputLog.parentElement!.classList.remove("empty")
//         }
//         if (checkMatchUserDetails(emailLogin.value, passwordLogin.value)) {
//             ev.target.reset()
//             return location.href = './index.html';
//         } else {
//             const textWarning = document.getElementById('pNotLoginSucc')! as HTMLParagraphElement
//             textWarning.innerHTML =
//                 `
//              <i class="fa-solid fa-triangle-exclamation"></i>
//               The email or password not match!
//               `
//             textWarning.style.color = "red";
//         }
//     }
//     catch (error) {
//         console.error(error);
//     }
// }
