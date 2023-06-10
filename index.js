function login(){
    debugger;
   // alert("raheel");
    let emailInput = document.querySelector("#floatingInput").value;
    let passwordInput = document.querySelector("#floatingPassword").value;
    if(emailInput == "raheel@gmail.com" && passwordInput == "admin"){
    //alert(emailInput);
    window.location.href = "https://www.google.com" , "_blank";
    }
    else if( emailInput != "raheel@gmail.com"){
        alert("Invalid Email")
    }
    else if(passwordInput != "admin"){
        alert("Invalid Password")
    }
}