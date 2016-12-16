var login_div = document.createElement("DIV");   
var profile_div = document.createElement("DIV");
var calc_div = document.createElement("DIV");



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

function profile_page(){
    profile_div.setAttribute("id", "profile_div");
    var profile_head = document.createElement("h2");
    profile_head.textContent = "Raphael's Page"
    profile_head.setAttribute("id", "profile_head");
    profile_div.appendChild(profile_head)

	var table = document.createElement("TABLE")
    table.setAttribute("id", "myTable");

    var tblHead = document.createElement("thead");


    var Headers = ["Picture", "ID", "Name", "link", "Interesting stuff on me"];

    var rowHead = document.createElement("tr");
    for (var i = 0; i < 5; i++) {
        var cell = document.createElement("th");
        cell.setAttribute("id", "table_head");
        var cellText = document.createTextNode(Headers[i]);
        cell.appendChild(cellText);
        rowHead.appendChild(cell);
    }
    tblHead.appendChild(rowHead);


    var tblBody = document.createElement("tbody");


    var rowBody = document.createElement("tr");
    var pic_td = document.createElement("td");
    pic_td.setAttribute("id", "table_body");
    var id_td = document.createElement("td");
    id_td.setAttribute("id", "table_body");
    var name_td = document.createElement("td");
    name_td.setAttribute("id", "table_body");
    var link_td = document.createElement("td");
    link_td.setAttribute("id", "table_body");
    var fact_td = document.createElement("td");
    fact_td.setAttribute("id", "table_body");

    var myProImg = document.createElement("IMG");
    myProImg.setAttribute("id", "myProImg");
    myProImg.setAttribute("src", "refi.jpg");
    pic_td.appendChild(myProImg);
    id_td.appendChild(document.createTextNode("305079030"));
    name_td.appendChild(document.createTextNode("Raphael Peretz"));


    var myLinkImg = document.createElement("IMG");
    myLinkImg.setAttribute("id", "myLinkImg");
    myLinkImg.setAttribute("src", "ninegag.png");

    var ninegag_link = document.createElement('a');
    ninegag_link.appendChild(myLinkImg)
    ninegag_link.href = "http://www.9gag.com";
    link_td.appendChild(ninegag_link);

    fact_td.appendChild(document.createTextNode("I am getting married in 3 months"));

    rowBody.appendChild(pic_td)
    rowBody.appendChild(id_td)
    rowBody.appendChild(name_td)
    rowBody.appendChild(link_td)
    rowBody.appendChild(fact_td)

    tblBody.appendChild(rowBody)

    table.appendChild(tblHead);
    table.appendChild(tblBody);
    var table_title = document.createElement("h4");
    table_title.textContent = "Personal info"
    table_title.setAttribute("id", "table_title");
    profile_div.appendChild(table_title)
    profile_div.appendChild(table)

    document.body.appendChild(profile_div);


}

window.onload = function() {

    login_page();
    profile_page();

}
   