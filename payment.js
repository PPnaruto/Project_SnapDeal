// let login = JSON.parse(localStorage.getItem(""));
// document.getElementById("login_id").innerText = login;
let order  = JSON.parse(localStorage.getItem("mycart")) || [];
let address = ()=>{
    document.getElementById("ad_info").innerHTML = null;
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
    document.getElementById("review").style.display = "block";
    order_data(order);
}

let btn = document.getElementById("address_button").addEventListener("click",address);
let showhidden_ad=()=>{
    document.getElementById("delivery_ad").style.display = "none";
    // address();
    document.getElementById("address").style.display = "block";

}
document.getElementById("delivery_ad").addEventListener("click",showhidden_ad);

// let order  = JSON.parse(localStorage.getItem("mycart")) || [];
// let amt = JSON.parse(localStorage.getItem("TotalPrice"));

let total_pay = ()=>{
    let sum = order.reduce((acc,ele)=>{
        return (ele.discount_price*ele.qty) + acc;
    },0);
    localStorage.setItem("TotalPrice",JSON.stringify(sum));
    // console.log(sum);
    document.getElementById("total").innerText = sum;
}

let getdiscount = ()=>{
    let value = document.getElementById("promo_input").value;
    if(value == "masai30"){
        console.log(value);
        let amt_price = JSON.parse(localStorage.getItem("TotalPrice"));
        let discount = Math.ceil(amt_price-amt_price*(30/100));
        console.log(discount);
        localStorage.setItem("TotalPrice",JSON.stringify(discount));
        document.getElementById("total").innerHTML = discount;
    }    
}

let removedata=(index)=>{
    order.splice(index,1);
    localStorage.setItem("OrderedData",JSON.stringify(order));
    total_pay();
    order_data(order);
}

let order_data = (order)=>{
    document.querySelector("tbody").innerHTML = null;
    console.log(order);
    order.map((ele,i)=>{
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let div = document.createElement("div");
        div.setAttribute("id","div_order");
        let img_div = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.image;
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
        remove.addEventListener("click",()=>{
            removedata(i);
        })
        info_div.append(name_para,size_para,remove);

        div.append(img_div,info_div);
        td1.append(div);
       
        let td2 = document.createElement("td");
        let div_qty = document.createElement("div");
        div_qty.style.display = "flex";
        div_qty.style.justifyContent = "Center"
        let h3 = document.createElement("h3");
        h3.innerText = ele.qty;
        console.log(ele.qty);
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
        h3_total.innerText = (ele.qty*ele.discount_price);
        td4.append(h3_total);
        h3_total.style.display = "flex";
        h3_total.style.justifyContent = "center";
        tr.append(td1,td2,td3,td4);
        document.querySelector("tbody").append(tr);
        
    })
    total_pay()
    // let amt = JSON.parse(localStorage.getItem("TotalPrice"));
    // document.getElementById("total").innerText = amt;

}

let hiddendata=()=>{
    document.getElementById("review_info").innerHTML = null;
    document.getElementById("review").style.display = "none";
    document.getElementById("review_box").style.display = "block";
    document.getElementById("review_box").style.display = "flex";


    let order_name = document.createElement("p");
    order_name.innerText = order[0].name;

    let review_div = document.createElement("div");
    review_div.style.display = "flex";
    review_div.style.alignItems = "center";
    review_div.style.gap = "20px";
    review_div.setAttribute("id","review_div");

    let item = document.createElement("p");
    item.innerText = order.length +" "+ "Items";
    let span = document.createElement("span");
    span.innerText = "Review";
    span.style.cursor = "pointer";
    span.style.color = "blue";
    span.addEventListener("click",()=>{
        document.getElementById("review").style.display = "block";
        document.getElementById("review_box").style.display = "none";
        document.getElementById("Payment").style.display = "none";
    })

    review_div.append(item,span);
    document.getElementById("review_info").append(order_name,review_div);
    document.getElementById("Payment").style.display = "block";

}

let pay = document.getElementById("btn_payment");
pay.addEventListener("click",hiddendata)

let promo = document.getElementById("apply");
promo.addEventListener("click",getdiscount);

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
    // console.log("Hi");
    let sum_amt = JSON.parse(localStorage.getItem("TotalPrice"));
    document.getElementById("amt").innerText = sum_amt;
    document.getElementById("way").style.display = "none";
    document.getElementById("cashon_way").style.display = "block";
})

const user = JSON.parse(localStorage.getItem("logged_user")) ;
if(user){
    let user_mail = document.getElementById("login_id");
    console.log(user);
    console.log(user.email);
    user_mail.innerText = user.email;
}

document.querySelector("#btn_cashon").addEventListener("click",()=>{
    if(user){
        alert("Your Order has been Placed Succesfully !");
        window.location.href = "./index.html";
    }else{
        alert("Please Login first");
    }
    
})
let orderPlaced = document.querySelector(".btn_place");
orderPlaced.addEventListener("click",()=>{
    let credit = document.getElementById("credit").value;
    let expiry = document.getElementById("exp_input").value;
    let CVV = document.getElementById("CVV_input").value;
   if(credit == "" || expiry == "" || CVV == ""){
    alert("Please Enter Valid Information");
   }else{
        if(user){
            alert("Your Order has been Placed Succesfully !");
            window.location.href = "./index.html";
        }else{
            alert("Please Login first");
        }
    
   }   
})
