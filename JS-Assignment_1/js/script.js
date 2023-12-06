document.getElementById("alertname").onclick = function () {
  alert("Muhammad Haris Ahsan");

  let statement = 'alert("Muhammad Haris Ahsan")';
  document.getElementById("statement").innerHTML = statement;
  document.getElementById("output").innerHTML = "";
};

document.getElementById("alertnumber").onclick = function () {
  alert("123");
  
  let statement = "alert(123)";
  document.getElementById("statement").innerHTML = statement;
  document.getElementById("output").innerHTML = "";
};

document.getElementById("variablename").onclick = function () {
  let html =
  "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Through a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string 'Floribundas' to the variable <code>rose</code>, and then ask JavaScript for the value assigned to <code>Rose</code>, you'll come up empty.</li></ul>";
  document.getElementById("statement").innerHTML = "";
  document.getElementById("output").innerHTML = html;
};

document.getElementById("camelcaseexample").onclick = function () {
  let html =
  "<h3>Examples :</h3><ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>";
  document.getElementById("statement").innerHTML = "";
  document.getElementById("output").innerHTML = html;
};

document.getElementById("sum2number").onclick = function () {
  let num1 = 10;
  let num2 = 5;

  let sum = num1 + num2;

  document.getElementById("output").innerHTML =
    "<p class='text-center'>" + sum + "</p>";

  let statement =
    "let num1 = " +
    num1 +
    ";<br />let num2 = " +
    num2 +
    ";<br />let sum = num1 + num2";
  document.getElementById("statement").innerHTML = statement;
};

document.getElementById("subtract2number").onclick = function () {
  let num1 = 10;
  let num2 = 5;

  let sum = num1 - num2;

  document.getElementById("output").innerHTML =
    "<p class='text-center'>" + sum + "</p>";

  let statement =
    "let num1 = " +
    num1 +
    ";<br />let num2 = " +
    num2 +
    ";<br />let sum = num1 - num2";
  document.getElementById("statement").innerHTML = statement;
};

document.getElementById("multiply2number").onclick = function () {
  let num1 = 10;
  let num2 = 5;

  let sum = num1 * num2;

  document.getElementById("output").innerHTML =
    "<p class='text-center'>" + sum + "</p>";

  let statement =
    "let num1 = " +
    num1 +
    ";<br />let num2 = " +
    num2 +
    ";<br />let sum = num1 * num2";
  document.getElementById("statement").innerHTML = statement;
};
document.getElementById("divide2number").onclick = function () {
  let num1 = 10;
  let num2 = 5;

  let sum = num1 / num2;

  document.getElementById("output").innerHTML =
    "<p class='text-center'>" + sum + "</p>";

  let statement =
    "let num1 = " +
    num1 +
    ";<br />let num2 = " +
    num2 +
    ";<br />let sum = num1 / num2";
  document.getElementById("statement").innerHTML = statement;
};
document.getElementById("calculatenumber").onclick = function () {
    
    let calculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);
    document.getElementById("output").innerHTML = "<p class='text-center'>" + calculation + "</p>";
    
    let statement =
    "let calculation = " +
    "36 / 6 * 3 + 2 ** 4 - (3 + 5)";

    document.getElementById("statement").innerHTML = statement;
};


document.getElementById("clearstatement").onclick = function () {
    document.getElementById("statement").innerHTML = "";

}

document.getElementById("clearoutput").onclick = function () {
    document.getElementById("output").innerHTML = "";

}


// document.getElementById("goodday").innerHTML = "<h2>Good Day</h2>";

// document.getElementById("goodday") = function(){
//     let firstname = prompt("Please enter your first name");
//     let lastname = prompt("Please enter your last name");

//     var fullname = firstname + " " + lastname;
//     window.onload();
// }

// window.onload = function() {
//     let message = ("Good Day");
//     let username = prompt("Enter your Full Name");
//     let banger = ("!");
//     document.getElementById("username").innerText = message + " " +username + banger;
// }

// Good Day Haris!
