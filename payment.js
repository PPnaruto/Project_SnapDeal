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
let showhidden_ad=()=>{
    document.getElementById("delivery_ad").style.display = "none";
    // address();
    document.getElementById("address").style.display = "block";

}
document.getElementById("delivery_ad").addEventListener("click",showhidden_ad);

let order = [
    {
    img : "https://n3.sdlcdn.com/imgs/k/k/h/230X258_sharpened/Gritstones-Green-Cotton-Blend-Regular-SDL938884433-1-d24b4.webp",
    name : "Gritstones - Green Cotton Blend Regular Fit Men's",
    actual_price : 1599,
    discount_price : 359,
    size : "M",
    rating : 4.1,
    qty : 1,
    },
    {
    img : "https://n2.sdlcdn.com/imgs/k/f/h/230X258_sharpened/Leotude-100-Cotton-Regular-Fit-SDL858624078-1-0d417.JPG",
    name : "Leotude - Multi Cotton Regular Fit Men's T-Shirt ",
    actual_price : 1099,
    discount_price : 359,
    size : "XL",
    rating : 4.2,
    qty : 1,
    },
    {
        img : "https://n1.sdlcdn.com/imgs/k/k/p/230X258_sharpened/UrbanMark-Black-Cotton-Regular-Fit-SDL654394387-1-226c3.webp",
        name : "UrbanMark - Black 100% Cotton Regular Fit Men's T-Shirt",
        actual_price : 599,
        discount_price : 259,
        size : "S",
        rating : 4.4,
        qty : 1,
        },
        {
        img : "https://n4.sdlcdn.com/imgs/k/g/1/230X258_sharpened/Bewakoof-Black-Cotton-Regular-Fit-SDL209460544-1-0f9f9.webp",
        name : "Bewakoof - Black Cotton Regular Fit Men's T-Shirt",
        actual_price : 1299,
        discount_price : 439,
        size : "L",
        rating : 4.0,
        qty : 1,
        },

]

let order_data = (order)=>{
    console.log(order);
    order.map((ele)=>{
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let div = document.createElement("div");
        div.setAttribute("id","div_order");
        let img_div = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.img;
        img.setAttribute("id","order_img");
        img_div.append(img);

        let info_div = document.createElement("div");
        let name_para = document.createElement("p");
        name_para.innerText = ele.name;
        let size_para = document.createElement("p");
        size_para.innerText ="Size:-"+" "+ ele.size;
        let remove = document.createElement("button");
        remove.innerHTML = "Remove";
        remove.setAttribute("id","remove_order");

        info_div.append(name_para,size_para,remove);

        div.append(img_div,info_div);
        td1.append(div);
       
        let td2 = document.createElement("td");
        let div_qty = document.createElement("div");
        div_qty.style.display = "flex";
        div_qty.style.justifyContent = "Center"
        let h3 = document.createElement("h3");
        h3.innerText = ele.qty;
        div_qty.append(h3);
        td2.append(div_qty);

        let td3 = document.createElement("td");
        let div_tag = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = "5 Dec to 7 Dec"
        let span = document.createElement("span");
        span.innerText = "Free";
        span.style.color = "Green";
        div_tag.append(p,span);
        div_tag.style.display = "flex";
        div_tag.style.alignItems = "center"
        div_tag.style.justifyContent = "center";
        td3.append(div_tag);

        let td4 = document.createElement("td");
        // let div_total = document.createElement("div");
        let h3_total = document.createElement("h3");
        h3_total.innerText = ele.actual_price;
        td4.append(h3_total);
        h3_total.style.display = "flex";
        h3_total.style.justifyContent = "center";
        tr.append(td1,td2,td3,td4);
        document.querySelector("tbody").append(tr);

    })
}
order_data(order);


document.getElementById("credit").addEventListener("click",()=>{
    document.getElementById("way").style.display = "block";
    document.getElementById("cashon_way").style.display = "none";
    document.getElementById("card_type").innerText="Credit Card";
})
document.getElementById("debit").addEventListener("click",()=>{
    document.getElementById("way").style.display = "block";
    document.getElementById("cashon_way").style.display = "none";
    document.getElementById("card_type").innerText="Debit Card";
})
document.getElementById("CashOn").addEventListener("click",()=>{
    console.log("Hi");
    document.getElementById("way").style.display = "none";
    document.getElementById("cashon_way").style.display = "block";
})
