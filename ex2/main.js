var login_div = document.createElement("DIV");   
var profile_div = document.createElement("DIV");
var calc_div = document.createElement("DIV");
var calcCounter = 0;



function login_page(){

	login_div.setAttribute("id", "login_div");
	
	var login_head = document.createElement("h1");
	var logInBtn = document.createElement("button");
    logInBtn.setAttribute("id", "logInBtn");
    login_head.setAttribute("id", "login_head");
	login_head.textContent = "Please login\n";
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
        document.body.style.background = "url('back.jpg') no-repeat";
        document.body.style.backgroundSize = "100%";
        login_div.style.display = 'none'
        profile_div.style.display = 'block'
    } else {
	    alert("username or password incorrect\n Please contact your administrator.");
    }

}
function profile_to_calc(){
    document.body.style.background = "url('math.jpg') no-repeat";
    document.body.style.backgroundSize = "100%";
    profile_div.style.display = 'none'
    calc_div.style.display = 'block'
}

function profile_page(){
    profile_div.setAttribute("id", "profile_div");
    var profile_head = document.createElement("h2");
    profile_head.textContent = "Raphael's Page";
    profile_head.setAttribute("id", "profile_head");
    profile_div.appendChild(profile_head);

    var profileToCalcBtn = document.createElement("button");
    profileToCalcBtn.setAttribute("id", "profileToCalcBtn");
    profileToCalcBtn.setAttribute("type", "submit");
    profileToCalcBtn.setAttribute("onclick", "profile_to_calc()");
    profileToCalcBtn.textContent = "Calculator";
    profile_div.appendChild(profileToCalcBtn);

	var table = document.createElement("TABLE");
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

function calc_to_profile(){
    document.body.style.background = "url('back.jpg') no-repeat";
    document.body.style.backgroundSize = "100%";

    calc_div.style.display = 'none'
    profile_div.style.display = 'block'

}


function curDisplayCalc(displayToUpdateId, toDisplay) {

    var displayId = "dispInput"+displayToUpdateId.toString();
    switch(toDisplay) {
    case "C":
        document.getElementById(displayId).value = '';
        break;
    case "=":
        document.getElementById(displayId).value = eval(document.getElementById(displayId).value);
        break;
    default:
    	document.getElementById(displayId).value += toDisplay;
    }
}




function Calc() {

    var calc_body = document.createElement("div");
    var num = calcCounter++;
    calc_body.setAttribute("id", "calc_body");
    var calcTable = document.createElement("table");
    calcTable.setAttribute("id", "tableOfCalc");

    //the display row, including its input:
    var disp = document.createElement("tr");
    var dispTd = document.createElement("td");
    dispTd.setAttribute("colspan", "4");
    var dispInput = document.createElement("input");
    dispInput.setAttribute("id", "dispInput"+num.toString());
    dispInput.setAttribute("type", "text");
    dispTd.appendChild(dispInput);
    disp.appendChild(dispTd);
    calcTable.appendChild(disp);

    //this is how the calculator's keyboard will look like:
    var buttons = ['7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        'C', '0', '=', '/',
		'(',')','.','%'];

    //create the buttons:
    for (var i=0;i<5;++i) {
        var row = document.createElement("tr");
        row.setAttribute("id", "row"+i.toString());

        for (var j=i*4; j<i*4+4; ++j) {
            var col = document.createElement("td");
            col.setAttribute("id", (j%4).toString());
            var btn = document.createElement("button");
            var buttVal = buttons[j];
            btn.setAttribute("id", "btnOfCalc");
            btn.textContent = buttVal;
            btn.setAttribute("onclick", "curDisplayCalc(\""+num+"\" ,\""+buttVal+"\")");
            col.appendChild(btn);
            row.appendChild(col);
        }
        calcTable.appendChild(row);
    }
    calc_body.appendChild(calcTable);
    calc_div.appendChild(calc_body);
}

/**
 * add another calculator to the calculator screen.
 */
function addCalc() {
    new Calc();
}


/**
 * create the components of the calculator screen
 */
 function calc_page() {
    calc_div.setAttribute("id", "calc_div")

    var addCalculator = document.createElement("button");
    addCalculator.setAttribute("id", "addCalc");
    addCalculator.textContent = "Add calculator";
    addCalculator.setAttribute("onclick", "addCalc()");

    var goToProfileBtn = document.createElement("button");
    goToProfileBtn.setAttribute("id", "goToProfileBtn");
    goToProfileBtn.textContent = "Profile page";
    goToProfileBtn.setAttribute("onclick", "calc_to_profile()");


    calc_div.appendChild(addCalculator);
    calc_div.appendChild(document.createElement("br"))
    calc_div.appendChild(goToProfileBtn);
    calc_div.appendChild(document.createElement("br"))
    calc_div.appendChild(document.createElement("br"))



    new Calc();
    document.body.appendChild(calc_div);

}

window.onload = function() {

    login_page();
    profile_page();
    calc_page();
    login_div.style.display = 'block'
    calc_div.style.display = 'none'
    profile_div.style.display = 'none'
    document.body.style.background = "url('welcome.jpg') no-repeat";
    document.body.style.backgroundSize = "100%";


}
   