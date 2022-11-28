document.querySelector("#cross").addEventListener("click",hideCheckoutPopup);
    function hideCheckoutPopup()
    {
        const hide=document.querySelector("#checkout-details");
        hide.style.display="none"
    }
document.querySelector("#qnty").addEventListener("change",qntty);
function qntty()
{
    var qty=document.querySelector("#qnty").value;
    if(qty===1)
    {
        document.querySelector("#total-price").innerHTML=10*qty;
    }
    else if(qty===2)
    {
        document.querySelector("#total-price").innerHTML=20*qty;
    }
}    