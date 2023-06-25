const signUsers = [];

function signup() {

    debugger;

    let sgEmail = document.querySelector("#floatingInput").value;
    let sgPassword = document.querySelector("#floatingPassword").value;

    let sgObj = {
        objEmail : sgEmail,
        objPassword : sgPassword
    };

    signUsers.push(sgObj);

    let stSignUsers = JSON.stringify(signUsers);

    localStorage.setItem('signUsers', stSignUsers);

    console.log(localStorage.getItem('signUsers'));
    window.location.href = "../index.html" , "_blank";
}

function login(){
    debugger;
    
    let lgEmail = document.querySelector("#floatingInput").value;
    let lgPassword = document.querySelector("#floatingPassword").value;

    var rtSignUser = localStorage.getItem('signUsers');
    var users = JSON.parse(rtSignUser);
    
    for (var i = 0; i < users.length; i++) {
        var obj = users[i];
        console.log(obj.objEmail);
        if(obj.objEmail == lgEmail && obj.objPassword == lgPassword){
            window.location.href = "main/index.html" , "_blank";
        }
        else{
            alert("Invalid Credentials..!");
            lgEmail.setValue("");
            lgPassword.setValue("");                
        }
    }
    
}
