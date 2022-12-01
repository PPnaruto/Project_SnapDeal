let totalPrice=Json.parse(localStorage.getItem("totalPrice"))|| 0;
document.querySelector("#cross").addEventListener("click",hideCheckoutPopup);
    function hideCheckoutPopup()
    {
        const hide=document.querySelector("#checkout-details");
        hide.style.display="none"
    }

function qntty()
{
    var qty=document.querySelector("#qntty").value;
    var totalprice=document.querySelector("#price").innerHTML;
    if(qty==1)
    {
        document.querySelector("#total-price").textContent=qty*totalprice;
    }
    else if(qty==2)
    {
        document.querySelector("#total-price").innerHTML=qty*totalprice;
    }
    else if(qty==3)
    {
        document.querySelector("#total-price").innerHTML=qty*totalprice;
    }
    localStorage.setItem("totalPrice",JSON.stringify(qty*totalprice));
    document.querySelector("#pr").innerHTML=`Rs. ${qty*totalprice}`;
    document.querySelector("#price-button").innerHTML=`PROCEED TO PAY Rs. ${qty*totalprice}`;
}    