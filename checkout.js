document.querySelector("#cross").addEventListener("click",hideCheckoutPopup);
    function hideCheckoutPopup()
    {
        const hide=document.querySelector("#checkout-details");
        hide.style.display="none"
    }