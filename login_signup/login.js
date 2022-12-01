 
        //  1
    if (localStorage.getItem("users" === null)) {
        localStorage.setItem("users", JSON.stringify([]));
    }

   


        //  2

    function displayloginuser() {
        
        
        var overlay = document.getElementById("overlay");
        overlay.style.display = "block";
        displayLoginAttribute(1);
        document.getElementById("login-box").style.display = "flex";
        document.getElementById("cart-overlay").style.display = "none";



    }
            //    3


    function Overlayremover() {
        
        
        
        var overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        document.getElementById("otp_code").value = null;
        document.getElementById("signup_email").value = null;
        document.getElementById("signup_mobile").value = null;
        document.getElementById("signup_name").value = null;
        document.getElementById("signup_dob").value = null;
        // document.getElementById("signup_password").value = null;

        
    }

            //  4
   
    var user = null; 

    if (localStorage.getItem("logged_user") === null) {
        localStorage.setItem("logged_user", "");
    }

                //   5


    if (localStorage.getItem("logged_user") != "") {
        var logged_user = JSON.parse(localStorage.getItem("logged_user"));
        user = logged_user;
        
        compvareLogin();
    }

                // 6
   
    function authanticate() {
        
        // alert("5737 is your verification code to login to your Snapdeal account.")
       
        if (localStorage.getItem("users") === null) {
            localStorage.setItem("users", JSON.stringify([]));
        };
        
        
        var users = JSON.parse(localStorage.getItem("users"));
        var entry = document.getElementById("login_number_email");

        if (entry.value === "") {
            alert("Please enter a valid mobile number or email");
            return;
        }

                // 7
        
        var user_found = false;
        users.forEach(e => {
            if (e.number == entry.value || e.email == entry.value) {
                user = e;
                user_found = true;
            }
        })
                //  8
        
        if (!user_found) {
            displayLoginAttribute(2);
        } else {
            displayLoginAttribute(3);
            setEmailForOtp(user.email);
        }
        
        
        entry.value = "";

    }

                       9 //    

    function compvareLogin(e) {
        
        
        
        if (e != undefined) {
            e.preventDefault();
        }
        
        var nav_login = document.querySelector("#nav_signin > p:nth-of-type(1)");
        
        var first_name = user.name.split(" ");
        nav_login.textContent = first_name[0];
        document.querySelector("#nav_signin > ul").style.left = "-60px";
        Overlayremover();
        localStorage.setItem("logged_user", JSON.stringify(user));
        var login_btn = document.querySelector("#nav_signin > ul > div > button");
        login_btn.style.backgroundColor = "#555";
        login_btn.textContent = "LOGOUT";
        var login_top_txt = document.querySelectorAll("#nav_signin > ul > div > p");
        login_top_txt[0].style.display = "none";
        login_top_txt[1].style.display = "none";
        document.querySelector("#nav_signin > ul > div").onclick = function () {
            logout();
        }

    }
    // function displayotp(){
    //     alert("Your OTP is 5737");
    // }

    
    
    
    
                //  10
    
    function logout() {
       
       
       
        var login_btn = document.querySelector("#nav_signin > ul > div > button");
        login_btn.style.backgroundColor = "#e40046";
        login_btn.textContent = "LOGIN";
        var login_top_txt = document.querySelectorAll("#nav_signin > ul > div > p");
        login_top_txt[0].style.display = "block";
        login_top_txt[1].style.display = "block";
        localStorage.setItem("logged_user", "");
        document.querySelector("#nav_signin > ul > div").onclick = function () {
            displayloginuser();
        }
        document.querySelector("#nav_signin > p:nth-of-type(1)").textContent = "Sign in";
        document.querySelector("#nav_signin > ul").style.left = "-70px";
    }

    
   
                // 11
   
    function displayLoginAttribute(b) {
        
        
        
        
        var login = document.querySelector("#login-box>div:nth-of-type(2)");
        var signup = document.querySelector("#login-box>div:nth-of-type(3)");
        var otp = document.querySelector("#login-box>div:nth-of-type(4)");


        if (b == 1) {
            login.style.display = "flex";
            signup.style.display = "none";
            otp.style.display = "none";
        } else if (b == 2) {
            login.style.display = "none";
            signup.style.display = "flex";
            otp.style.display = "none";

        } else if (b == 3) {
            login.style.display = "none";
            signup.style.display = "none";
            otp.style.display = "flex";
        }

    }

            //    12
   
    function setEmailForOtp(e) {
        
        
        
        var email = document.getElementById("verification_email");
        email.textContent = e;
    }

   
            //    13


    function addUser(e) {
        
        
        e.preventDefault();

        var email = document.getElementById("signup_email");
        var number = document.getElementById("signup_mobile");
        var name = document.getElementById("signup_name");
        var dob = document.getElementById("signup_dob");
        // var password = document.getElementById("signup_password");

        
        
        if (localStorage.getItem("users") === null) {
            localStorage.setItem("users", JSON.stringify([]));
        };

       
       
        var users = JSON.parse(localStorage.getItem("users"));

                    //   14
        
        var obj = {
            email: email.value,
            number: number.value,
            name: name.value,
            dob: dob.value,
            // password: password.value
        }

        

        var user_exists = false;

        users.forEach(e => {
            
            
            if (e.email == email.value || e.number == number.value) {
                alert("User already exists");
                user_exists = true;
            };
        });

        
        
        if (!user_exists) {
            users.push(obj);
            localStorage.setItem("users", JSON.stringify(users));
            Overlayremover();
        }
    }

                    //  15
   
   
    var signin_btn = document.querySelector(".signinButton")
    signin_btn.onmouseenter = function () { showSigninDropDown(1) };
    signin_btn.onmouseleave = function () { showSigninDropDown(2) };

   
   
    function showSigninDropDown(b) {
        var menu = document.querySelector("#nav_signin > ul");
        
        
        if (b == 1) {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    }