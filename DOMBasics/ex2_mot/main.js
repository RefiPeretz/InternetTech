
var loginDiv = document.createElement("div");
var usernameIn = document.createElement("input");
var passwordIn = document.createElement("input");
var profileDiv = document.createElement("div");
var calcDiv = document.createElement("div");
var logOutMsg = document.createElement("p");

window.onload = function() {

    createLoginScreen();
    createProfileScreen();
    createCalcScreen();
    changeScreens(null,loginDiv, false);
}

/**
 * change the current view and components of the page.
 * @param oldDiv - the old div of screen we want to leave
 * @param newDiv - the new screen div
 * @param isLogOut - boolean, determine whither to show logout msg or not.
 */
var changeScreens = function(oldDiv, newDiv, isLogOut) {

    if (oldDiv) oldDiv.style.display = 'none';
    if (isLogOut) logOutMsg.style.display = 'block';
    newDiv.style.display = 'block';
}

/**
 * check the user input for login.
 * @param name the username input
 * @param password the password input
 */
var checkUser = function(name, password) {

    if (name !== 'admin' || password !== 'admin') {
        alert("Hi!\nIt's not the correct username/password. please kindly try again.");
    } else {
        changeScreens(loginDiv, profileDiv, false);
        passwordIn.value = "";
    }
}

/**
 * create the components of the login screen
 */
var createLoginScreen = function() {

    loginDiv.style.display = 'none';
    var submit = document.createElement("button");

    loginDiv.setAttribute("id", "loginDiv");
    usernameIn.setAttribute("type", "text");
    usernameIn.setAttribute("placeholder", "username");
    usernameIn.setAttribute("id", "usernameIn");
    usernameIn.setAttribute("autofocus", "true");
    passwordIn.setAttribute("type", "password");
    passwordIn.setAttribute("placeholder", "password");
    passwordIn.setAttribute("id", "passwordIn");
    submit.setAttribute("id", "submitButton");
    submit.setAttribute("type", "submit");
    submit.setAttribute("onclick", "checkUser(usernameIn.value, passwordIn.value)");
    submit.textContent = "Login";
    logOutMsg.setAttribute("id", "logOutMsg");
    logOutMsg.textContent = "You have successfully logged out!";
    logOutMsg.style.display = 'none';

    loginDiv.appendChild(usernameIn);
    loginDiv.appendChild(passwordIn);
    loginDiv.appendChild(submit);
    loginDiv.appendChild(logOutMsg);

    document.body.appendChild(loginDiv);
}


/**
 * helper function the switch pictures when mouse hover the img.
 * @param imgElem the element of the img we want to switch
 * @param srcImg the img we want to show.
 */
function hover(imgElem, srcImg) {
    var currImg = (srcImg === 1)? 'as1.jpg': 'as2.jpg';
    imgElem.setAttribute('src', currImg);
}


/**
 * creates the profileDiv only by using innerHTML,
 * first because it simple to use our profile from ex1 and second
 * to use a different way to create a "screen" than the "createLoginScreen"
 */
var createProfileScreen = function() {

    profileDiv.style.display = 'none';
    var profileButtonsDiv = document.createElement("div");
    profileButtonsDiv.setAttribute("id", "profileButtonsDiv")

    var logOutButton = document.createElement("button");
    logOutButton.setAttribute("id", "logOutButton");
    logOutButton.textContent = "LogOut";
    logOutButton.setAttribute("onclick", "changeScreens(profileDiv, loginDiv, true)");

    var calcButton = document.createElement("button");
    calcButton.setAttribute("id", "calcButton");
    calcButton.textContent = "Calculator";
    calcButton.setAttribute("onclick", "changeScreens(profileDiv, calcDiv, false)");

    profileButtonsDiv.appendChild(calcButton);
    profileButtonsDiv.appendChild(logOutButton);
    profileDiv.appendChild(profileButtonsDiv);

    var profileContent = document.createElement("div");
    profileContent.setAttribute("id", "profileContent");
    profileContent.innerHTML =
        "<hr color='black'>"+
        "<h2>My name is Austin Powers,</br>" +
        "<b>Welcome to my profile!</b>" +
        "</h2>"+
        "<img id='photo' src='as1.jpg' width='350' height='350' onmouseover='hover(this ,2);' " +
                                                                "onmouseout='hover(this, 1);'>"+
        "<h3>Here are some details about me:</h3>"+
        "<ul>"+
            "<li>Im a student of Computer Engineering, in my 3rd year.</li>"+
            "<li>I live in Jerusalem city center.</li>"+
            "<li>This is my second exercise in this course.</li>"+
        "</ul>"+
        "<h3>And Here are some details about Austin Powers, by himself:</h3>"+
        "<blockquote>"+
            "\"The details of my life are quite inconsequential... Very well, where do I begin?<br>"+
            "My father was a relentlessly self-improving boulangerie owner from Belgium<br>"+
            "with low grade narcolepsy and a penchant for buggery. My mother was a fifteen year-old French prostitute<br>"+
            "named Chloe with webbed feet. My father would womanize, he would drink. He would make outrageous claims<br>"+
            "like he invented the question mark. Sometimes he would accuse chestnuts of being lazy.<br>"+
            "The sort of general malaise that only the genius possess and the insane lament. My childhood was typical.<br>"+
            "Summers in Rangoon, luge lessons. In the spring, we'd make meat helmets. When I was insolent, I was placed<br>"+
            "in a burlap bag and beaten with reeds - pretty standard, really. At the age of twelve, I received my first scribe.<br>"+
            "At the age of fourteen a Zoroastrian named Vilma ritualistically shaved my testicles.<br>"+
            "There really is nothing like a shorn scrotum.<br>"+
            "It's breathtaking - I suggest you try it.\"<br>"+
        "</blockquote>"+
        "<hr color='black'>";

    profileDiv.appendChild(profileContent);
    document.body.appendChild(profileDiv);
}


/**
 * change the display a calculator
 * @param displayToUpdateId the id of the display/calculator
 * @param toDisplay the new char to display.
 */
var displayOfCalc = function(displayToUpdateId, toDisplay) {

    var displayId = "dispInput"+displayToUpdateId.toString();
    if (toDisplay === "C") {
        document.getElementById(displayId).value = '';

    } else if (toDisplay === "=") {
        document.getElementById(displayId).value = eval(document.getElementById(displayId).value);

    } else {
        document.getElementById(displayId).value += toDisplay;
    }
}


var calcSerialNum = 0; //serial number for calculators
/**
 * create new element of calculator
 * @constructor
 */
function Calc() {

    var calc = document.createElement("div");
    var num = calcSerialNum++;
    calc.setAttribute("id", "calc");
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
                   'C', '0', '=', '/'];

    //create the buttons:
    for (var i=0;i<4;++i) {
        var row = document.createElement("tr");
        row.setAttribute("id", "row"+i.toString());

        for (var j=i*4; j<i*4+4; ++j) {
            var col = document.createElement("td");
            col.setAttribute("id", (j%4).toString());
            var btn = document.createElement("button");
            var buttVal = buttons[j];
            btn.setAttribute("id", "btnOfCalc");
            btn.textContent = buttVal;
            btn.setAttribute("onclick", "displayOfCalc(\""+num+"\" ,\""+buttVal+"\")");
            col.appendChild(btn);
            row.appendChild(col);
        }
        calcTable.appendChild(row);
    }
    calc.appendChild(calcTable);
    calcDiv.appendChild(calc);
}

/**
 * add another calculator to the calculator screen.
 */
var addCalc = function() {
    new Calc();
}


/**
 * create the components of the calculator screen
 */
var createCalcScreen = function() {

    calcDiv.style.display = 'none';

    var anotherCalcButton = document.createElement("button");
    anotherCalcButton.setAttribute("id", "anotherCalcButton");
    anotherCalcButton.textContent = "Get Another Calculator";
    anotherCalcButton.setAttribute("onclick", "addCalc()");

    var returnToProfile = document.createElement("button");
    returnToProfile.setAttribute("id", "returnToProfile");
    returnToProfile.setAttribute("onclick", "changeScreens(calcDiv, profileDiv , false)");
    returnToProfile.textContent = "return to profile";

    calcDiv.appendChild(anotherCalcButton);
    calcDiv.appendChild(returnToProfile);

    new Calc();
    document.body.appendChild(calcDiv);

}




