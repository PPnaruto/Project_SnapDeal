let totalPrice=JSON.parse(localStorage.getItem("totalPrice"))|| 0;
document.querySelector("#cross").addEventListener("click",hideCheckoutPopup);
    function hideCheckoutPopup()
    {
        const hide=document.querySelector("#checkout-details");
        hide.style.display="none"
    }

function qntty()
{
    var qty=document.querySelector("#qntty").value;
    console.log(qty);
    var totalprice=document.querySelector("#price").innerText;
    console.log(totalprice);

    document.getElementById("total-price").innerHTML = qty*totalprice;
    // if(qty==1)
    // {
    //     document.querySelector("#total-price").innerHTML=qty*totalprice;
    // }
    // if(qty==2)
    // {
    //     document.querySelector("#total-price").innerHTML=qty*totalprice;
    // }
    // if(qty==3)
    // {
    //     document.querySelector("#total-price").innerHTML=qty*totalprice;
    // }
    localStorage.setItem("totalPrice",JSON.stringify(qty*totalprice));
    document.querySelector("#pr").innerHTML=`Rs. ${qty*totalprice}`;
    document.querySelector("#price-button").innerHTML=`PROCEED TO PAY Rs. ${qty*totalprice}`;
}  
  let product_item = JSON.parse(localStorage.getItem("cart"));
  console.log(product_item);
  document.getElementById("product_name").innerHTML = product_item[product_item.length-1].name;

  document.getElementById("product_img").src = product_item[product_item.length-1].img;
//   let image = document.createElement("img");
//   image.src = product_item[product_item.length-1].img;

  document.getElementById("product-line").innerHTML = product_item[product_item.length-1].name;

  document.getElementById("rupee1").innerHTML = product_item[product_item.length-1].actual_price;
  document.getElementById("rupee2").innerHTML = product_item[product_item.length-1].actual_price;




  
  let cartdata = ()=>{
    event.preventDefault();
    product_item.map((ele)=>{

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.id = "td1";
        let image = document.createElement("img");
        image.src = ele.img;
        let p = document.createElement("p");
        p.innerText = ele.name;

        td1.append(image,p);

        let td2 = document.createElement("td");
        td2.id = "price";
        let price  = document.createElement("td");
        price.innerText = ele.actual_price;
        td2.append(price);

        let td3 = document.createElement("td");

        // price-button-start

        // var btndiv = document.createElement("div");
        // btndiv.setAttribute("class","qtybox");
        // var span1 = document.createElement("span");
        // span1.innerText = "-";
        // span1.setAttribute("id","minus");
        // span1.addEventListener("click",function(){
        //     subtractqty(ele)
        // });
        // var span2 = document.createElement("span");
        // span2.innerText = ele.qty;
        // span2.setAttribute("id","num");
        // var span3 = document.createElement("span");
        // span3.innerText = "+";
        // span3.setAttribute("id","plus");
        // span3.addEventListener("click",function(){
        //     addqty(ele)
        // });
        // btndiv.append(span1, span2, span3);
        // td3.append(btndiv);



        // price-button-end



        let quantity = document.createElement("input");
        quantity.value = 1;
        quantity.id = "qntty";
        quantity.type = "number";
        // let select = document.createElement("select");
        // select.id = "qntty";
        
        // let opt1 = document.createElement("option");
        // opt1.value = "1";
        // opt1.innerHTML = 1;
        // let opt2 = document.createElement("option");
        // opt2.value = "2";
        // opt2.innerHTML = 2;
        // let opt3 = document.createElement("option");
        // opt3.value = "3";
        // opt3.innerHTML = 3;
        // select.append(opt1,opt2,opt3);
        td3.append(quantity);
        quantity.addEventListener("input",qntty);

        let td4 = document.createElement("td");
        td4.id = "total-price";
        td4.innerHTML = ele.actual_price;
        
        tr.append(td1,td2,td3,td4);
        document.getElementById("table-body").append(tr);




        // let price  = document.createElement("td");
        // price.innerText = ele.actual_price;
    });

    // document.getElementById("qntty").addEventListener("change",qntty);
  }
// document.getElementById("qntty").addEventListener("change",qntty);
