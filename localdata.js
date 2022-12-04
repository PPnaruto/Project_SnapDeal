// This file is temporaray, just to have some dummy data to work on Page.
let Shirts = [
    {
    image : "https://n3.sdlcdn.com/imgs/k/k/h/230X258_sharpened/Gritstones-Green-Cotton-Blend-Regular-SDL938884433-1-d24b4.webp",
    name : "Gritstones - Green Cotton Blend Regular Fit Men's",
    actual_price : 1599,
    discount_price : 359,
    size : "M",
    rating : 4.1,
    qty : 1,
    },
    {
        image : "https://n2.sdlcdn.com/imgs/k/f/h/230X258_sharpened/Leotude-100-Cotton-Regular-Fit-SDL858624078-1-0d417.JPG",
    name : "Leotude - Multi Cotton Regular Fit Men's T-Shirt ",
    actual_price : 1099,
    discount_price : 359,
    size : "XL",
    rating : 4.2,
    qty : 1,
    },
    {
        image : "https://n1.sdlcdn.com/imgs/k/k/p/230X258_sharpened/UrbanMark-Black-Cotton-Regular-Fit-SDL654394387-1-226c3.webp",
        name : "UrbanMark - Black 100% Cotton Regular Fit Men's T-Shirt",
        actual_price : 599,
        discount_price : 259,
        size : "S",
        rating : 4.4,
        qty : 1,
        },
        {
            image : "https://n4.sdlcdn.com/imgs/k/g/1/230X258_sharpened/Bewakoof-Black-Cotton-Regular-Fit-SDL209460544-1-0f9f9.webp",
        name : "Bewakoof - Black Cotton Regular Fit Men's T-Shirt",
        actual_price : 1299,
        discount_price : 439,
        size : "L",
        rating : 4.0,
        qty : 1,
        },

]

localStorage.setItem("Ordered_Data",JSON.stringify(Shirts));

let total1_pay = ()=>{
    let sum = order.reduce((acc,ele)=>{
        return (ele.actual_price*ele.qty) + acc;
    },0);
    console.log(sum);
    localStorage.setItem("TotalPrice",JSON.stringify(sum));
    document.getElementById("total").innerText = sum;
}
total1_pay();