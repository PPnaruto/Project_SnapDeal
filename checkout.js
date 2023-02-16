
let product_item = JSON.parse(localStorage.getItem("mycart")) || [];




let totalPrice=JSON.parse(localStorage.getItem("totalPrice"))|| 0;
document.querySelector("#cross").addEventListener("click",hideCheckoutPopup);
    function hideCheckoutPopup()
    {
        const hide=document.querySelector("#checkout-details");
        hide.style.display="none"
    }

    function displayprice(data){
      var overalltotal = data.reduce(function(acc,ele){
          return acc + (ele.qty*(ele.discount_price));
      },0)
      document.getElementById("pr").innerText = "Rs." + overalltotal;
      document.getElementById("overall_price").innerText = overalltotal;
      document.getElementById("rupee2").innerHTML = overalltotal;
  }

// function qntty()
// {
//     var qty=document.querySelector("#qntty").value;
//     console.log(qty);
//     var totalprice=document.querySelector("#price").innerText;
//     console.log(totalprice);

//     document.getElementById("total-price").innerHTML = qty*totalprice;
//     // if(qty==1)
//     // {
//     //     document.querySelector("#total-price").innerHTML=qty*totalprice;
//     // }
//     // if(qty==2)
//     // {
//     //     document.querySelector("#total-price").innerHTML=qty*totalprice;
//     // }
//     // if(qty==3)
//     // {
//     //     document.querySelector("#total-price").innerHTML=qty*totalprice;
//     // }
//     localStorage.setItem("totalPrice",JSON.stringify(qty*totalprice));
//     document.querySelector("#pr").innerHTML=`Rs. ${qty*totalprice}`;
//     document.querySelector("#price-button").innerHTML=`PROCEED TO PAY Rs. ${qty*totalprice}`;
// }  
 
  console.log(product_item);
  document.getElementById("product_name").innerHTML = product_item[product_item.length-1].name;

  document.getElementById("product_img").src = product_item[product_item.length-1].image;
//   let image = document.createElement("img");
//   image.src = product_item[product_item.length-1].img;

  document.getElementById("product-line").innerHTML = product_item[product_item.length-1].name;

  document.getElementById("rupee1").innerHTML = product_item[product_item.length-1].discount_price;
  


  let addqty =(ele)=>{
    ele.qty++;
    document.getElementById("num").innerText = ele.qty;
    console.log(ele.qty);
    localStorage.setItem("mycart",JSON.stringify(product_item));
    // document.getElementById("num").innerText = ele.qty;
    console.log(product_item);
    cartdata(product_item);
    // displayprice(productdata);
}
let subtractqty = (ele)=>{
    if(ele.qty>1){
        ele.qty--;
    document.getElementById("num").innerText = ele.qty;
    console.log(ele.qty);
    localStorage.setItem("mycart",JSON.stringify(product_item));
    cartdata(product_item);
    // displayprice(productdata);
    }
}

let deletedata = (index)=>{
  product_item.splice(index,1);
  localStorage.setItem("mycart",JSON.stringify(product_item));
  cartdata(product_item);
  displayprice(productdata);
}

// let product_item = JSON.parse(localStorage.getItem("cart")) || [];
  let cartdata = ()=>{
    document.getElementById("table-body").innerHTML = null;
    product_item.map((ele,i)=>{

        let tr = document.createElement("tr");
        tr.setAttribute("id","tr");

        let td1 = document.createElement("td");
        td1.id = "td-1";
        let image = document.createElement("img");
        image.src = ele.image;
        let div = document.createElement("div");

        let p = document.createElement("p");
        p.innerText = ele.name;

        let div_remove = document.createElement("div");
        let remove = document.createElement("span");
        remove.innerHTML = '<i class="fa-solid fa-xmark"></i>' +" "+ "REMOVE"+" " + "| " + " ";
        remove.setAttribute("id","remove");
        remove.addEventListener("click",()=>{
          deletedata(i)
        })

        let wishlist = document.createElement("span");
        wishlist.innerHTML = `<i class="fa-regular fa-heart"></i>` + " " + "MOVE TO SHORTLIST"

        div_remove.append(remove,wishlist);
        div.append(p,div_remove);
        td1.append(image,div);

        let td2 = document.createElement("td");
        td2.id = "price";
        let price  = document.createElement("td");
        price.innerText = ele.discount_price;
        td2.append(price);

        let td3 = document.createElement("td");

        var btndiv = document.createElement("div");
        btndiv.setAttribute("class","qtybox");
        var span1 = document.createElement("span");
        span1.innerText = "-";
        span1.setAttribute("id","minus");
        span1.addEventListener("click",function(){
            subtractqty(ele);
        });
        var span2 = document.createElement("span");
        span2.innerText = ele.qty;
        span2.setAttribute("id","num");
        var span3 = document.createElement("span");
        span3.innerText = "+";
        span3.setAttribute("id","plus");
        span3.addEventListener("click",function(){
            addqty(ele);
        });
        btndiv.append(span1, span2, span3);
        td3.append(btndiv);

        let td4 = document.createElement("td");
        td4.id = "total-price";
        td4.innerHTML = (ele.discount_price*ele.qty);
        
        tr.append(td1,td2,td3,td4);
        document.getElementById("table-body").append(tr);
        displayprice(product_item);
    });

    document.querySelector(".total_item").innerHTML = product_item.length;
    document.querySelector("#total_item1").innerHTML = product_item.length;
   
  }
  document.getElementById("cart-button").addEventListener("click",cartdata());

document.getElementById("checkout-button").addEventListener("click",()=>{
  window.location.href = "./payment.html";
  // alert("Redirect to payment page");
})
document.getElementById("price-button").addEventListener("click",()=>{
  window.location.href = "./payment.html";
  // alert("Redirect to payment page");
})

const redirect = document.getElementById("productpage_tag");
redirect.addEventListener("click",()=>{
    window.location.href="./mensProduct.html";
})

let user_detail = JSON.parse(localStorage.getItem("logged_user")); 
console.log(user_detail);
document.getElementById("signed_user").innerHTML = user_detail.name;



