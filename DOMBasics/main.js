//Pages divs
var login_div = document.createElement("DIV");
var profile_div = document.createElement("DIV");
var calc_div = document.createElement("DIV");
var calcCounter = 0;


/**
 * create the login page elements and design
 */
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
/**
 * Verify login user name and password if correct transfer
 * you to the profile page else yields alert
 */
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
/**
 * Transfer the user from profile page to calc page.
 */
function profile_to_calc(){
    document.body.style.background = "url('math.jpg') no-repeat";
    document.body.style.backgroundSize = "100%";
    profile_div.style.display = 'none'
    calc_div.style.display = 'block'
}
/**
 * Create the profile page elements and design
 * like ex1 but in javascript
 */
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
    id_td.appendChild(document.createTextNode("99999999"));
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

/**
 * Transfer user form calc page back to profile.
 */
function calc_to_profile(){
    document.body.style.background = "url('back.jpg') no-repeat";
    document.body.style.backgroundSize = "100%";

    calc_div.style.display = 'none'
    profile_div.style.display = 'block'

}

/**
 * Determine the current display of each caclc by
 * element id.
 */
function curDisplayCalc(curId, curCalcScreen) {

    var displayIdString = "displayInput"+curId.toString();
    switch(curCalcScreen) {
    case "C":
        document.getElementById(displayIdString).value = '';
        break;
    case "=":
        document.getElementById(displayIdString).value = eval(document.getElementById(displayIdString).value);
        break;
    default:
    	document.getElementById(displayIdString).value += curCalcScreen;
    }
}



/**
 * The constructor of calc. when call define new calculator
 * and add to the cacl_div(calc page)
 */
function Calc() {

    var calc_body = document.createElement("div");

    calc_body.setAttribute("id", "calc_body");
    var calcTable = document.createElement("table");
    calcTable.setAttribute("id", "calcTable");

    //Create calculator display screen.
    var curId = calcCounter++;
    var display = document.createElement("tr");
    var displayTd = document.createElement("td");
    //4 buttons is a row.
    displayTd.setAttribute("colspan", "4");
    var displayInput = document.createElement("input");
    displayInput.setAttribute("id", "displayInput"+curId.toString());
    displayInput.setAttribute("type", "text");
    displayTd.appendChild(displayInput);
    display.appendChild(displayTd);
    calcTable.appendChild(display);

    //Determine calc buttons 4 in a row.
    var calcButtons = ['7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        'C', '0', '=', '/',
		'(',')','.','%'];


    //Create body
    for (var i=0;i<5;++i) {
        var row = document.createElement("tr");
        row.setAttribute("id", "row"+i.toString());

        for (var j=i*4; j<i*4+4; ++j) {
            var col = document.createElement("td");
            col.setAttribute("id", (j%4).toString());
            var btn = document.createElement("button");
            var buttVal = calcButtons[j];
            btn.setAttribute("id", "btnOfCalc");
            btn.textContent = buttVal;
            btn.setAttribute("onclick", "curDisplayCalc(\""+curId+"\" ,\""+buttVal+"\")");
            col.appendChild(btn);
            row.appendChild(col);
        }
        calcTable.appendChild(row);
    }

    calc_body.appendChild(calcTable);
    calc_div.appendChild(calc_body);
}

/**
 * Adds another calculator to the page inline
 * activates the calc constructor.
 */
function addCalc() {
    new Calc();
}


/**
 * Create the calc page elements and design
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
/**
 * Load all the relevant pages on start in order
 * and determine first page to show.
 */
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
   
