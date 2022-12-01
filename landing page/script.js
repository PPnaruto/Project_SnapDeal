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
//code for signin dropdown ends

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
// Code for login slider card ends