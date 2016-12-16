var login_div = document.createElement("DIV");   
var profile_div = document.createElement("DIV");         


function profile_page(){
	var myTable = document.createElement("TABLE");
    myTable.setAttribute("id", "myTable");
    document.body.appendChild(x);

    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);

    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);
}


function login_page(){

	login_div.setAttribute("id", "login_div");
	
	var login_head = document.createElement("h1");
	var logInBtn = document.createElement("button");
	login_head.textContent = "Please login\n"
	var login_input_user = document.createElement("INPUT"); 
	var login_input_password = document.createElement("INPUT");
	
	
	login_input_user.setAttribute("type","text")
	login_input_user.setAttribute("placeholder", "username");
	login_input_user.setAttribute("id", "login_input_user");
	login_input_password.setAttribute("type","password")
	login_input_password.setAttribute("placeholder", "password");
	login_input_password.setAttribute("id", "login_input_password");
	
	logInBtn.setAttribute("type", "submit");
 
    logInBtn.setAttribute("onclick", "check_login_usr_pass(login_input_user.value, login_input_password.value)");
	
	logInBtn.textContent = "Login";
	
	login_div.appendChild(login_head)
	login_div.appendChild(login_input_user);
	login_div.appendChild(document.createElement("br"))
	login_div.appendChild(login_input_password);
	login_div.appendChild(document.createElement("br"))
	login_div.appendChild(logInBtn);
	document.body.appendChild(login_div);
}

function check_login_usr_pass(usr,pass){
    if (usr == 'admin' && pass == 'admin') {
        alert("Sucess");
    } else {
	    alert("username or password incorrect\n Please contact your administrator.");
        //changeScreens(loginDiv, profileDiv, false);
        //passwordIn.value = "";
    }

}
  
login_page()
   