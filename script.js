
let slideshow_images = [
    {
        image: "https://n4.sdlcdn.com/imgs/j/t/8/Web1min-cbb30.jpg",
    },
    {
        image: "https://n4.sdlcdn.com/imgs/j/t/8/Web03min-79ecd.jpg",
    },
    {
        image: "https://n1.sdlcdn.com/imgs/j/w/0/BedsheetsWeb_27sep-840b8.jpg",
    },
    {
        image: "https://n1.sdlcdn.com/imgs/j/w/0/KitchenwareWeb_27sep-1b2d5.jpg",
    },
    {
        image: "https://n2.sdlcdn.com/imgs/j/w/0/LightingsWeb_27sep-b4418.jpg",
    },
    {
        image: "https://n1.sdlcdn.com/imgs/j/w/0/OrganizeHomeWeb_27sep-9e6e0.jpg",
    },
    {
        image: "https://n2.sdlcdn.com/imgs/j/w/0/KitchenStorageWeb_27sep-7484d.jpg",
    },
    {
        image: "https://n2.sdlcdn.com/imgs/j/w/0/KitchenAppliancesWeb_27sep-f91a3.jpg",
    }

];

//Setting inital localStorage
if (localStorage.getItem("users" === null)) {
    localStorage.setItem("users", JSON.stringify([]));
}

function showSlideShow() {
    let img = document.createElement("img");
    let counter = 0;
    img.src = slideshow_images[counter].image;
    counter++;
    let div = document.getElementById("slideshow");
    div.append(img);
    setInterval(() => {
        div.innerHTML = "";
        if (counter == slideshow_images.length) {
            counter = 0;
        }
        img.src = slideshow_images[counter].image;
        div.append(img);
        counter++;
    }, 4000);
}

showSlideShow();


//code for login and signup starts

function showLogin() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    displayLoginAttribute(1);
    document.getElementById("login-area").style.display = "flex";
    document.getElementById("cart-overlay").style.display = "none";
}

function removeOverlay() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    document.getElementById("otp_code").value = null;
    document.getElementById("signup_email").value = null;
    document.getElementById("signup_mobile").value = null;
    document.getElementById("signup_name").value = null;
    document.getElementById("signup_dob").value = null;
    document.getElementById("signup_password").value = null;

    // window.onscroll = function(){};
}

const redirect = document.getElementById("productpage_tag");
redirect.addEventListener("click",()=>{
    window.location.href="./mensProduct.html";
})

let user = null; //User is defined here so that every function can access it.

if (localStorage.getItem("logged_user") === null) {
    localStorage.setItem("logged_user", "");
}


if (localStorage.getItem("logged_user") != "") {
    let logged_user = JSON.parse(localStorage.getItem("logged_user"));
    user = logged_user;
    // console.log(user);
    completeLogin();
}

function validateUser() {
    if (localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify([]));
    };
    let users = JSON.parse(localStorage.getItem("users"));
    let entry = document.getElementById("login_number_email");

    if (entry.value === "") {
        alert("Please enter a valid mobile number or email");
        return;
    }

    let user_found = false;
    users.forEach(e => {
        if (e.number == entry.value || e.email == entry.value) {
            user = e;
            user_found = true;
        }
    })

    //if user not found then showing signup area instead of login.
    if (!user_found) {
        displayLoginAttribute(2);
    } else {
        displayLoginAttribute(3);
        setEmailForOtp(user.email);
    }
    entry.value = "";

}

function completeLogin(e) {
    if (e != undefined) {
        e.preventDefault();
    }
    // alert("Logged in successfully.");
    let nav_login = document.querySelector("#nav_signin > p:nth-of-type(1)");
    // console.log(user);
    let first_name = user.name.split(" ");
    nav_login.textContent = first_name[0];
    document.querySelector("#nav_signin > ul").style.left = "-60px";
    removeOverlay();
    localStorage.setItem("logged_user", JSON.stringify(user));
    let login_btn = document.querySelector("#nav_signin > ul > div > button");
    login_btn.style.backgroundColor = "#555";
    login_btn.textContent = "LOGOUT";
    let login_top_txt = document.querySelectorAll("#nav_signin > ul > div > p");
    login_top_txt[0].style.display = "none";
    login_top_txt[1].style.display = "none";
    document.querySelector("#nav_signin > ul > div").onclick = function () {
        logout();
    }

}

function logout() {
    let login_btn = document.querySelector("#nav_signin > ul > div > button");
    login_btn.style.backgroundColor = "#e40046";
    login_btn.textContent = "LOGIN";
    let login_top_txt = document.querySelectorAll("#nav_signin > ul > div > p");
    login_top_txt[0].style.display = "block";
    login_top_txt[1].style.display = "block";
    localStorage.setItem("logged_user", "");
    document.querySelector("#nav_signin > ul > div").onclick = function () {
        showLogin();
    }
    document.querySelector("#nav_signin > p:nth-of-type(1)").textContent = "Sign in";
    document.querySelector("#nav_signin > ul").style.left = "-70px";
}

//This function will take number and change display attribute of login and signup.
function displayLoginAttribute(b) {
    let login = document.querySelector("#login-area>div:nth-of-type(2)");
    let signup = document.querySelector("#login-area>div:nth-of-type(3)");
    let otp = document.querySelector("#login-area>div:nth-of-type(4)");


    if (b == 1) {
        login.style.display = "flex";
        signup.style.display = "none";
        otp.style.display = "none";
    } else if (b == 2) {
        login.style.display = "none";
        signup.style.display = "flex";
        otp.style.display = "none";

    } else if (b == 3) {
        login.style.display = "none";
        signup.style.display = "none";
        otp.style.display = "flex";
    }

}

function setEmailForOtp(e) {
    let email = document.getElementById("verification_email");
    email.textContent = e;
}

function addUser(e) {
    e.preventDefault();

    let email = document.getElementById("signup_email");
    let number = document.getElementById("signup_mobile");
    let name = document.getElementById("signup_name");
    let dob = document.getElementById("signup_dob");
    let password = document.getElementById("signup_password");

    if (localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify([]));
    };

    let users = JSON.parse(localStorage.getItem("users"));

    let obj = {
        email: email.value,
        number: number.value,
        name: name.value,
        dob: dob.value,
        password: password.value
    }

    // console.log(users);

    let user_exists = false;

    users.forEach(e => {
        if (e.email == email.value || e.number == number.value) {
            alert("User already exists");
            user_exists = true;
        };
    });

    if (!user_exists) {
        users.push(obj);
        localStorage.setItem("users", JSON.stringify(users));
        alert("sign up successfull")
        removeOverlay();
    }
}

//Code for signin dropdown starts
let signin_btn = document.querySelector(".signinButton")
signin_btn.onmouseenter = function () { showSigninDropDown(1) };
signin_btn.onmouseleave = function () { showSigninDropDown(2) };

function showSigninDropDown(b) {
    let menu = document.querySelector("#nav_signin > ul");
    if (b == 1) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}
//Code for signin dropdown ends

//Code for going to top of page
function goToTop() {
    window.scrollTo(0, 0);
}


//Code from product_catalogue starts
// let products = [
//     {
//         image1: "https://n3.sdlcdn.com/imgs/k/j/d/230X258_sharpened/YHA-Sea-Green-Cotton-Regular-SDL853500645-1-17799.webp",
//         name: "YHA - Sea Green 100% Cotton Regular Fit Men's Casual Shirt",
//         price: "890",
//         discount_price: "1678",
//         size: "M",
//         rating: "4",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n1.sdlcdn.com/imgs/k/k/x/230X258_sharpened/Vida-Loca-Navy-Cotton-Blend-SDL298375529-1-c942f.webp",
//         name: "Vida Loca - Navy Cotton Blend Slim Fit Men's Casual Shirt ( Pack of 1 ",
//         price: "744",
//         discount_price: "1888",
//         size: "L",
//         rating: "5",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n3.sdlcdn.com/imgs/k/k/q/230X258_sharpened/UrbanMark-White-Cotton-Slim-Fit-SDL262615929-1-ac180.webp",
//         name: "UrbanMark - White Cotton Slim Fit Men's Casual Shirt ( Pack of 1 )",
//         price: "199",
//         discount_price: "899",
//         size: "L",
//         rating: "4",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n4.sdlcdn.com/imgs/k/j/y/230X258_sharpened/YHA-Beige-Cotton-Regular-Fit-SDL774316171-1-2c071.webp",
//         name: "YHA - Beige 100% Cotton Regular Fit Men's Casual Shirt ( Pack of 1 )",
//         price: "777",
//         discount_price: "5555",
//         size: "M",
//         rating: "3",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n3.sdlcdn.com/imgs/k/l/e/230X258_sharpened/Comey-White-Cotton-Regular-Fit-SDL241105338-1-01a39.webp",
//         name: "Comey - White Cotton Regular Fit Men's Casual Shirt ( Pack of 1 )",
//         price: "889",
//         discount_price: "1888",
//         size: "M",
//         rating: "2",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n2.sdlcdn.com/imgs/k/k/g/230X258_sharpened/Gritstones-Black-Cotton-Blend-Regular-SDL238564844-1-76bb3.webp",
//         name: "Gritstones - Black Cotton Blend Regular Fit Men's Casual Shirt",
//         price: "581",
//         discount_price: "1767",
//         size: "S",
//         rating: "3",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n2.sdlcdn.com/imgs/k/j/n/230X258_sharpened/YHA-Peach-Cotton-Regular-Fit-SDL347357260-1-c7e39.webp",
//         name: "YHA - Peach 100% Cotton Regular Fit Men's Casual Shirt ( Pack of 1 )",
//         price: "596",
//         discount_price: "1678",
//         size: "M",
//         rating: "4",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n3.sdlcdn.com/imgs/k/l/k/230X258_sharpened/UrbanMark-Navy-100-Cotton-Slim-SDL638135298-1-72d2e.webp",
//         name: "UrbanMark - Navy 100% Cotton Slim Fit Men's Casual Shirt ( Pack of 1 )",
//         price: "999",
//         discount_price: "1999",
//         size: "L",
//         rating: "5",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n4.sdlcdn.com/imgs/k/j/q/230X258_sharpened/xohy-Green-Quilted-Bomber-Jacket-SDL762486088-1-b29d4.webp",
//         name: "xohy Green Quilted & Bomber Jacket",
//         price: "235",
//         discount_price: "745",
//         size: "S",
//         rating: "3",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n3.sdlcdn.com/imgs/k/k/f/230X258_sharpened/Devhim-Black-Polyester-Regular-Fit-SDL971598610-1-1268b.webp",
//         name: "Devhim - Black Polyester Regular Fit Men's Windcheater Jacket ",
//         price: "466",
//         discount_price: "1245",
//         size: "M",
//         rating: "4",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n2.sdlcdn.com/imgs/j/k/6/230X258_sharpened/xohy-Navy-Quilted-Bomber-Jacket-SDL095157494-1-43ad5.jpeg",
//         name: "xohy Navy Quilted & Bomber Jacket",
//         price: "454",
//         discount_price: "988",
//         size: "L",
//         rating: "5",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n4.sdlcdn.com/imgs/k/j/q/230X258_sharpened/xohy-Black-Quilted-Bomber-Jacket-SDL982512240-1-70c87.webp",
//         name: "xohy Black Quilted & Bomber Jacket",
//         price: "358",
//         discount_price: "4673",
//         size: "S",
//         rating: "2",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n2.sdlcdn.com/imgs/k/m/a/230X258_sharpened/Forbro-White-Nylon-Regular-Fit-SDL329231733-1-7269d.webp",
//         name: "Forbro - White Nylon Regular Fit Men's Windcheater Jacket ",
//         price: "877",
//         discount_price: "5778",
//         size: "M",
//         rating: "3",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n2.sdlcdn.com/imgs/k/l/t/230X258_sharpened/UrbanMark-Navy-Polyester-Regular-Fit-SDL873575657-1-1fe69.webp",
//         name: "UrbanMark - Navy Polyester Regular Fit Men's Down Jacket ( Pack of 1 )",
//         price: "345",
//         discount_price: "5789",
//         size: "L",
//         rating: "4",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n2.sdlcdn.com/imgs/k/i/d/230X258_sharpened/GIYSI-Black-Polyester-Men-s-SDL913036569-1-a815e.webp",
//         name: "GIYSI - Black Polyester Men's Gym Jacket ( Pack of 1 )",
//         price: "1345",
//         discount_price: "2358",
//         size: "XL",
//         rating: "5",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n3.sdlcdn.com/imgs/k/c/w/230X258_sharpened/NUEVOSPORTA-Orange-Biker-Jacket-SDL671607491-1-23d53.JPG",
//         name: "NUEVOSPORTA Orange Biker Jacket",
//         price: "457",
//         discount_price: "6789",
//         size: "XXL",
//         rating: "4",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n2.sdlcdn.com/imgs/k/j/v/230X258_sharpened/Veirdo-Black-Cotton-Regular-Fit-SDL088180178-1-3e9b1.webp",
//         name: "UrbanMark - Black 100% Cotton Regular Fit Men's T-Shirt ( Pack of 1",
//         price: "446",
//         discount_price: "7667",
//         size: "S",
//         rating: "2",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n3.sdlcdn.com/imgs/k/e/z/230X258_sharpened/AUSK-Cotton-Blend-Regular-Fit-SDL714380742-1-d3c44.webp",
//         name: "UrbanMark - Black 100% Cotton Regular Fit Men's T-Shirt ( Pack of 1",
//         price: "570",
//         discount_price: "1395",
//         size: "M",
//         rating: "3",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n1.sdlcdn.com/imgs/k/i/x/230X258_sharpened/FUEL2FASH-Blue-Cotton-Blend-Color-SDL186738444-1-2d87f.webp",
//         name: "Bewakoof - Black Cotton Regular Fit Men's T-Shirt ( Pack of 1 )",
//         price: "999",
//         discount_price: "1288",
//         size: "L",
//         rating: "4",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n1.sdlcdn.com/imgs/k/h/p/230X258_sharpened/Bewakoof-Black-Cotton-Regular-Fit-SDL152310119-1-5b933.webp",
//         name: "FUEL2FASH - Blue Cotton Blend Regular Fit Men's T-Shirt ( Pack of 1",
//         price: "889",
//         discount_price: "1799",
//         size: "XL",
//         rating: "5",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n2.sdlcdn.com/imgs/k/e/1/230X258_sharpened/Katso-Cotton-Blend-Regular-Fit-SDL130889173-1-7ac1b.webp",
//         name: "Katso - Mustard Cotton Blend Regular Fit Men's T-Shirt ( Pack of ",
//         price: "478",
//         discount_price: "899",
//         size: "S",
//         rating: "2",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n3.sdlcdn.com/imgs/k/k/m/230X258_sharpened/UrbanMark-White-Cotton-Regular-Fit-SDL743874160-1-1d974.jpeg",
//         name: "UrbanMark - White 100% Cotton Regular Fit Men's T-Shirt ( Pack of 1",
//         price: "456",
//         discount_price: "877",
//         size: "M",
//         rating: "5",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n3.sdlcdn.com/imgs/k/f/a/230X258_sharpened/HVBK-Cotton-Blend-Regular-Fit-SDL880819784-1-0029a.webp",
//         name: "HVBK - Green Cotton Blend Regular Fit Men's T-Shirt ( Pack of 1 )",
//         price: "457",
//         discount_price: "999",
//         size: "L",
//         rating: "3",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n2.sdlcdn.com/imgs/k/f/i/230X258_sharpened/3BROS-Navy-Cotton-Blend-Solid-SDL808111568-1-57e38.webp",
//         name: "3BROS - Navy Cotton Blend Regular Fit Men's Polo T Shirt ( Pack of 1 )",
//         price: "649",
//         discount_price: "1399",
//         size: "XL",
//         rating: "4",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n4.sdlcdn.com/imgs/k/l/k/230X258_sharpened/UrbanMark-Wine-100-Cotton-Slim-SDL182791554-1-a212c.webp",
//         name: "Gritstones Cotton Blend Pink Shirt",
//         price: "575",
//         discount_price: "1799",
//         size: "XXL",
//         rating: "5",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n1.sdlcdn.com/imgs/k/k/y/230X258_sharpened/MAJESTIC-MAN-Olive-100-Cotton-SDL498671552-1-1ee27.webp",
//         name: "Solemio - Navy Cotton Regular Fit Men's Formal Shirt ( Pack of 1 )",
//         price: "619",
//         discount_price: "1299",
//         size: "S",
//         rating: "3",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n4.sdlcdn.com/imgs/k/i/l/230X258_sharpened/Jansons-White-Cotton-Blend-Regular-SDL586601689-1-be39e.webp",
//         name: "MAJESTIC MAN - Orange 100% Cotton Slim Fit Men's Casual Shirt (",
//         price: "449",
//         discount_price: "949",
//         size: "S",
//         rating: "2",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n1.sdlcdn.com/imgs/k/l/m/230X258_sharpened/Paul-Street-Blue-Cotton-Blend-SDL744055579-1-21010.webp",
//         name: "YHA - Light Blue 100% Cotton Regular Fit Men's Casual Shirt (",
//         price: "349",
//         discount_price: "1299",
//         size: "L",
//         rating: "4",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n2.sdlcdn.com/imgs/k/h/d/230X258_sharpened/YHA-Teal-Cotton-Regular-Fit-SDL637147082-1-26a73.webp",
//         name: "GESPO - Green Cotton Blend Regular Fit Men's Casual Shirt (Pack",
//         price: "249",
//         discount_price: "809",
//         size: "M",
//         rating: "3",
//         qty: 0,
//         discount: 34
//     },
//     {
//         image1: "https://n1.sdlcdn.com/imgs/k/e/u/230X258_sharpened/P-V-Cotton-Blend-Regular-SDL099083513-1-00fa7.webp",
//         name: "YHA - Red 100% Cotton Regular Fit Men's Casual Shirt ( Pack of 1 )",
//         price: "299",
//         discount_price: "999",
//         size: "L",
//         rating: "4",
//         qty: 0,
//         discount: 34
//     }
// ];
let products = [
    {
        image: "https://n3.sdlcdn.com/imgs/k/j/d/230X258_sharpened/YHA-Sea-Green-Cotton-Regular-SDL853500645-1-17799.webp",
        name: "YHA - Sea Green 100% Cotton Regular Fit Men's Casual Shirt",
        discount_price: "890",
        price: "1678",
        size: "M",
        rating: "4",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n1.sdlcdn.com/imgs/k/k/x/230X258_sharpened/Vida-Loca-Navy-Cotton-Blend-SDL298375529-1-c942f.webp",
        name: "Vida Loca - Navy Cotton Blend Slim Fit Men's Casual Shirt ( Pack of 1 ",
        discount_price: "744",
        price: "1888",
        size: "L",
        rating: "5",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n3.sdlcdn.com/imgs/k/k/q/230X258_sharpened/UrbanMark-White-Cotton-Slim-Fit-SDL262615929-1-ac180.webp",
        name: "UrbanMark - White Cotton Slim Fit Men's Casual Shirt ( Pack of 1 )",
        discount_price: "199",
        price: "899",
        size: "L",
        rating: "4",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n4.sdlcdn.com/imgs/k/j/y/230X258_sharpened/YHA-Beige-Cotton-Regular-Fit-SDL774316171-1-2c071.webp",
        name: "YHA - Beige 100% Cotton Regular Fit Men's Casual Shirt ( Pack of 1 )",
        discount_price: "777",
        price: "5555",
        size: "M",
        rating: "3",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n3.sdlcdn.com/imgs/k/l/e/230X258_sharpened/Comey-White-Cotton-Regular-Fit-SDL241105338-1-01a39.webp",
        name: "Comey - White Cotton Regular Fit Men's Casual Shirt ( Pack of 1 )",
        discount_price: "889",
        price: "1888",
        size: "M",
        rating: "2",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n2.sdlcdn.com/imgs/k/k/g/230X258_sharpened/Gritstones-Black-Cotton-Blend-Regular-SDL238564844-1-76bb3.webp",
        name: "Gritstones - Black Cotton Blend Regular Fit Men's Casual Shirt",
        discount_price: "581",
        price: "1767",
        size: "S",
        rating: "3",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n2.sdlcdn.com/imgs/k/j/n/230X258_sharpened/YHA-Peach-Cotton-Regular-Fit-SDL347357260-1-c7e39.webp",
        name: "YHA - Peach 100% Cotton Regular Fit Men's Casual Shirt ( Pack of 1 )",
        discount_price: "596",
        price: "1678",
        size: "M",
        rating: "4",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n3.sdlcdn.com/imgs/k/l/k/230X258_sharpened/UrbanMark-Navy-100-Cotton-Slim-SDL638135298-1-72d2e.webp",
        name: "UrbanMark - Navy 100% Cotton Slim Fit Men's Casual Shirt ( Pack of 1 )",
        discount_price: "999",
        price: "1999",
        size: "L",
        rating: "5",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n4.sdlcdn.com/imgs/k/j/q/230X258_sharpened/xohy-Green-Quilted-Bomber-Jacket-SDL762486088-1-b29d4.webp",
        name: "xohy Green Quilted & Bomber Jacket",
        discount_price: "235",
        price: "745",
        size: "S",
        rating: "3",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n3.sdlcdn.com/imgs/k/k/f/230X258_sharpened/Devhim-Black-Polyester-Regular-Fit-SDL971598610-1-1268b.webp",
        name: "Devhim - Black Polyester Regular Fit Men's Windcheater Jacket ",
        discount_price: "466",
        price: "1245",
        size: "M",
        rating: "4",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n2.sdlcdn.com/imgs/j/k/6/230X258_sharpened/xohy-Navy-Quilted-Bomber-Jacket-SDL095157494-1-43ad5.jpeg",
        name: "xohy Navy Quilted & Bomber Jacket",
        discount_price: "454",
        price: "988",
        size: "L",
        rating: "5",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n4.sdlcdn.com/imgs/k/j/q/230X258_sharpened/xohy-Black-Quilted-Bomber-Jacket-SDL982512240-1-70c87.webp",
        name: "xohy Black Quilted & Bomber Jacket",
        discount_price: "358",
        price: "4673",
        size: "S",
        rating: "2",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n2.sdlcdn.com/imgs/k/m/a/230X258_sharpened/Forbro-White-Nylon-Regular-Fit-SDL329231733-1-7269d.webp",
        name: "Forbro - White Nylon Regular Fit Men's Windcheater Jacket ",
        discount_price: "877",
        price: "5778",
        size: "M",
        rating: "3",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n2.sdlcdn.com/imgs/k/l/t/230X258_sharpened/UrbanMark-Navy-Polyester-Regular-Fit-SDL873575657-1-1fe69.webp",
        name: "UrbanMark - Navy Polyester Regular Fit Men's Down Jacket ( Pack of 1 )",
        discount_price: "345",
        price: "5789",
        size: "L",
        rating: "4",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n2.sdlcdn.com/imgs/k/i/d/230X258_sharpened/GIYSI-Black-Polyester-Men-s-SDL913036569-1-a815e.webp",
        name: "GIYSI - Black Polyester Men's Gym Jacket ( Pack of 1 )",
        discount_price: "1345",
        price: "2358",
        size: "XL",
        rating: "5",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n3.sdlcdn.com/imgs/k/c/w/230X258_sharpened/NUEVOSPORTA-Orange-Biker-Jacket-SDL671607491-1-23d53.JPG",
        name: "NUEVOSPORTA Orange Biker Jacket",
        discount_price: "457",
        price: "6789",
        size: "XXL",
        rating: "4",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n2.sdlcdn.com/imgs/k/j/v/230X258_sharpened/Veirdo-Black-Cotton-Regular-Fit-SDL088180178-1-3e9b1.webp",
        name: "UrbanMark - Black 100% Cotton Regular Fit Men's T-Shirt ( Pack of 1",
        discount_price: "446",
        price: "7667",
        size: "S",
        rating: "2",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n3.sdlcdn.com/imgs/k/e/z/230X258_sharpened/AUSK-Cotton-Blend-Regular-Fit-SDL714380742-1-d3c44.webp",
        name: "UrbanMark - Black 100% Cotton Regular Fit Men's T-Shirt ( Pack of 1",
        discount_price: "570",
        price: "1395",
        size: "M",
        rating: "3",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n1.sdlcdn.com/imgs/k/i/x/230X258_sharpened/FUEL2FASH-Blue-Cotton-Blend-Color-SDL186738444-1-2d87f.webp",
        name: "Bewakoof - Black Cotton Regular Fit Men's T-Shirt ( Pack of 1 )",
        discount_price: "999",
        price: "1288",
        size: "L",
        rating: "4",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n1.sdlcdn.com/imgs/k/h/p/230X258_sharpened/Bewakoof-Black-Cotton-Regular-Fit-SDL152310119-1-5b933.webp",
        name: "FUEL2FASH - Blue Cotton Blend Regular Fit Men's T-Shirt ( Pack of 1",
        discount_price: "889",
        price: "1799",
        size: "XL",
        rating: "5",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n2.sdlcdn.com/imgs/k/e/1/230X258_sharpened/Katso-Cotton-Blend-Regular-Fit-SDL130889173-1-7ac1b.webp",
        name: "Katso - Mustard Cotton Blend Regular Fit Men's T-Shirt ( Pack of ",
        discount_price: "478",
        price: "899",
        size: "S",
        rating: "2",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n3.sdlcdn.com/imgs/k/k/m/230X258_sharpened/UrbanMark-White-Cotton-Regular-Fit-SDL743874160-1-1d974.jpeg",
        name: "UrbanMark - White 100% Cotton Regular Fit Men's T-Shirt ( Pack of 1",
        discount_price: "456",
        price: "877",
        size: "M",
        rating: "5",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n3.sdlcdn.com/imgs/k/f/a/230X258_sharpened/HVBK-Cotton-Blend-Regular-Fit-SDL880819784-1-0029a.webp",
        name: "HVBK - Green Cotton Blend Regular Fit Men's T-Shirt ( Pack of 1 )",
        discount_price: "457",
        price: "999",
        size: "L",
        rating: "3",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n2.sdlcdn.com/imgs/k/f/i/230X258_sharpened/3BROS-Navy-Cotton-Blend-Solid-SDL808111568-1-57e38.webp",
        name: "3BROS - Navy Cotton Blend Regular Fit Men's Polo T Shirt ( Pack of 1 )",
        discount_price: "649",
        price: "1399",
        size: "XL",
        rating: "4",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n4.sdlcdn.com/imgs/k/l/k/230X258_sharpened/UrbanMark-Wine-100-Cotton-Slim-SDL182791554-1-a212c.webp",
        name: "Gritstones Cotton Blend Pink Shirt",
        discount_price: "575",
        price: "1799",
        size: "XXL",
        rating: "5",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n1.sdlcdn.com/imgs/k/k/y/230X258_sharpened/MAJESTIC-MAN-Olive-100-Cotton-SDL498671552-1-1ee27.webp",
        name: "Solemio - Navy Cotton Regular Fit Men's Formal Shirt ( Pack of 1 )",
        discount_price: "619",
        price: "1299",
        size: "S",
        rating: "3",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n4.sdlcdn.com/imgs/k/i/l/230X258_sharpened/Jansons-White-Cotton-Blend-Regular-SDL586601689-1-be39e.webp",
        name: "MAJESTIC MAN - Orange 100% Cotton Slim Fit Men's Casual Shirt (",
        discount_price: "449",
        price: "949",
        size: "S",
        rating: "2",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n1.sdlcdn.com/imgs/k/l/m/230X258_sharpened/Paul-Street-Blue-Cotton-Blend-SDL744055579-1-21010.webp",
        name: "YHA - Light Blue 100% Cotton Regular Fit Men's Casual Shirt (",
        discount_price: "349",
        price: "1299",
        size: "L",
        rating: "4",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n2.sdlcdn.com/imgs/k/h/d/230X258_sharpened/YHA-Teal-Cotton-Regular-Fit-SDL637147082-1-26a73.webp",
        name: "GESPO - Green Cotton Blend Regular Fit Men's Casual Shirt (Pack",
        discount_price: "249",
        price: "809",
        size: "M",
        rating: "3",
        qty: 0,
        discount: 34
    },
    {
        image: "https://n1.sdlcdn.com/imgs/k/e/u/230X258_sharpened/P-V-Cotton-Blend-Regular-SDL099083513-1-00fa7.webp",
        name: "YHA - Red 100% Cotton Regular Fit Men's Casual Shirt ( Pack of 1 )",
        discount_price: "299",
        price: "999",
        size: "L",
        rating: "4",
        qty: 0,
        discount: 34
    }
];

let load_btn = document.getElementById("loadMore");
load_btn.onclick = function () {
    showProducts(products);
}

let productsDisplay = document.getElementById("productsDisplay");

let counter = 0;


//This is only for home page.
function showProducts(p) {
    let temp = 15;
    while (temp > 0) {
        if (counter >= products.length) {
            counter = 0;
        }
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = p[counter].image;
        let name = document.createElement("div");//
        name.innerText = p[counter].name;
        // name.style.textOverflow = "ellipsis";
        // name.style.height = "36px";

        let star = document.createElement("div");
        star.innerText = getStar(p[counter].rating);
        star.style.color = "#ffc544";
        star.className = "star-rating";


        let pricing = document.createElement("div");

        let mrp = document.createElement("span");
        mrp.innerText = "Rs " + p[counter].price + " ";
        mrp.style.textDecoration = "line-through";
        mrp.style.marginRight = "2px";

        let discountPrice = document.createElement("span");
        discountPrice.innerText = "Rs " + p[counter].discount_price ;
        discountPrice.style.marginRight = "5px";
        discountPrice.style.color = "black";

        let discount = document.createElement("div");
        discount.style.display = "inline-block";
        discount.innerText = Math.round(((p[counter].price-p[counter].discount_price)/ p[counter].price)*100)+ "% OFF";
        discount.style.border = "1px solid #999";
        discount.style.boxSizing = "border-box";
        discount.style.padding = "4px";
        discount.style.fontSize = "10px";
        discount.style.marginLeft = "4px";

        pricing.append(mrp, discountPrice, discount);
        div.append(img, name, star, pricing);
        productsDisplay.append(div);

        let n = counter;
        div.onclick = function () {
            details(p[n]);
        }

        temp--;
        counter++;
    }


}


showProducts(products);

function getStar(r) {
    switch (Math.floor(r)) {
        case 0:
            return "☆☆☆☆☆";
        case 1:
            return "★☆☆☆☆";
        case 2:
            return "★★☆☆☆";
        case 3:
            return "★★★☆☆";
        case 4:
            return "★★★★☆";
        case 5:
            return "★★★★★";
    }
}

function details(p) {
    // console.log(p)


    localStorage.setItem("single_product", JSON.stringify(p))

    window.location.href = "./single_product_details_page.html"

}

//Code from product_catalogue ends


//Code for trending area

function showTrendingProducts(p) {
    let temp = 6;
    let counter = 10;
    while (temp > 0) {
        if (counter >= products.length) {
            counter = 0;
        }
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = p[counter].image;
        let name = document.createElement("div");//
        name.innerText = p[counter].name;
        // name.style.textOverflow = "ellipsis";
        // name.style.height = "36px";

        let star = document.createElement("div");
        star.innerText = getStar(p[counter].rating);
        star.style.color = "#ffc544";
        star.className = "star-rating";
        //Temporary Code
        // let star_img = document.createElement("img");
        // star_img.src = "https://www.pngfind.com/pngs/m/668-6687141_star-rating-png-487848-5-stars-transparent-background.png";
        // star_img.style.height = "17px";
        // star.append(star_img);
        //Temporary Code

        let pricing = document.createElement("div");

        let mrp = document.createElement("span");
        mrp.innerText = "Rs " + p[counter].price + " ";
        mrp.style.textDecoration = "line-through";
        mrp.style.marginRight = "2px";

        let discountPrice = document.createElement("span");
        discountPrice.innerText = "Rs " + p[counter].discount_price;
        discountPrice.style.marginRight = "5px";
        discountPrice.style.color = "black";

        let discount = document.createElement("div");
        discount.style.display = "inline-block";
        discount.innerText = Math.round(((p[counter].price-p[counter].discount_price)/ p[counter].price)*100)+ "% OFF";
        discount.style.border = "1px solid #999";
        discount.style.boxSizing = "border-box";
        discount.style.padding = "4px";
        discount.style.fontSize = "10px";
        discount.style.marginLeft = "4px";

        pricing.append(mrp, discountPrice, discount);
        div.append(img, name, star, pricing);

        let trending = document.querySelector("#trending_products > div");
        trending.append(div);

        let n = counter;
        div.onclick = function () {
            details(p[n]);
        }

        temp--;
        counter++;
    }
}

showTrendingProducts(products);

// Code for login slider card starts
let sideNextbtn = document.querySelector('.sidedivNextbtn')

function nextSideDiv() {
    let img = document.createElement('img')
    img.src = 'images/location logo.png'
    img.id = "snap2"

    let p1 = document.createElement('p');
    p1.textContent = 'Your Delivery Pincode';
    p1.className = 'p1';

    let hr = document.createElement('hr')
    hr.style.width = '10px'

    let p2 = document.createElement('p')
    p2.textContent = "Enter your pincode to check"
    p2.className = 'p2';
    let p3 = document.createElement('p')
    p3.textContent = "availability and faster delivery options"
    p3.className = 'p3';

    let p4 = document.createElement('p')
    p4.textContent = "Pincode:"
    p4.className = 'p4';
    let input = document.createElement("input");
    input.placeholder = "Enter pincode";
    let button1 = document.createElement('button')
    button1.id = 'firstbtn'
    button1.textContent = 'CHANGE PINCODE'

    let button2 = document.createElement('button')
    button2.className = 'sidedivNextbtn'
    button2.textContent = 'NEXT'
    document.querySelector('.sideDiv').style.backgroundColor = "white"

    document.querySelector('.sideDiv').innerHTML = null
    document.querySelector('.sideDiv').append(img, p1, hr, p2, p3, p4, input, button1, button2)


    button2.onclick = function () {
        nextSideDiv11()
    }

}

function nextSideDiv11() {
    document.querySelector('.sideDiv').innerHTML = null
    let img = document.createElement('img')
    img.src = "images/snapdeal pic.png"
    img.id = "snap"

    let p2 = document.createElement('p')
    p2.textContent = "Login to your"
    p2.className = 'sidedivPare';
    let p3 = document.createElement('p')
    p3.textContent = "Snapdeal account"
    p3.className = 'sidedivPare';

    let button1 = document.createElement('button')
    button1.id = 'sidedivBtn'
    button1.textContent = 'LOG IN'
    button1.onclick = function () {
        showLogin();
    }

    let div = document.createElement('div')

    let label = document.createElement('label')
    label.textContent = 'New user? Register'

    let button2 = document.createElement('button')
    button2.className = 'sidedivNextbtn'
    button2.textContent = 'NEXT'
    div.append(label, button2)

    button2.onclick = function () {
        nextSideDiv()
    }
    document.querySelector('.sideDiv').append(img, p2, p3, button1, div)

}

document.getElementById("men_section").addEventListener("click",()=>{
    window.location.href = "./mensProduct.html";
})
// Code for login slider card ends