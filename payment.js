let address = ()=>{
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mob_no").value;
    let address = document.getElementById("address_box").value;
    let locality = document.getElementById("locality").value;
    let city = document.getElementById("city").value;
    let pincode = document.getElementById("pincode").value;
    let state = document.getElementById("state").value;
    
    console.log(name,mobile,address,locality,city,pincode,state);

    let name_p = document.createElement("p");
    name_p.innerText = (name +"    "+"Mobile-"+mobile);

    let address_p = document.createElement("p");
    address_p.innerText = address+"    "+locality;

    let city_p = document.createElement("p");
    city_p.innerText = (city+"-"+pincode + "    "+ state);

    document.getElementById("ad_info").append(name_p,address_p,city_p);

    document.getElementById("address").style.display = "none";
    document.getElementById("delivery_ad").style.display = "block";
    document.getElementById("delivery_ad").style.display = "flex";

}

let btn = document.getElementById("address_button").addEventListener("click",address);


let order = [
    {
    img : "https://n3.sdlcdn.com/imgs/k/k/h/230X258_sharpened/Gritstones-Green-Cotton-Blend-Regular-SDL938884433-1-d24b4.webp",
    name : "Gritstones - Green Cotton Blend Regular Fit Men's",
    actual_price : 1599,
    discount_price : 359,
    size : "M",
    rating : 4.1
    },
    {
    img : "https://n2.sdlcdn.com/imgs/k/f/h/230X258_sharpened/Leotude-100-Cotton-Regular-Fit-SDL858624078-1-0d417.JPG",
    name : "Leotude - Multi Cotton Regular Fit Men's T-Shirt ",
    actual_price : 1099,
    discount_price : 359,
    size : "XL",
    rating : 4.2
    },
    {
        img : "https://n1.sdlcdn.com/imgs/k/k/p/230X258_sharpened/UrbanMark-Black-Cotton-Regular-Fit-SDL654394387-1-226c3.webp",
        name : "UrbanMark - Black 100% Cotton Regular Fit Men's T-Shirt",
        actual_price : 599,
        discount_price : 259,
        size : "S",
        rating : 4.4
        },
        {
        img : "https://n4.sdlcdn.com/imgs/k/g/1/230X258_sharpened/Bewakoof-Black-Cotton-Regular-Fit-SDL209460544-1-0f9f9.webp",
        name : "Bewakoof - Black Cotton Regular Fit Men's T-Shirt",
        actual_price : 1299,
        discount_price : 439,
        size : "L",
        rating : 4.0
        },

]
