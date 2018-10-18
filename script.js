document.getElementById('yearValue').focus();


var allBttn = document.getElementById('allbttn');
var age;
var month;
var day;
var today = new Date();
allBttn.addEventListener("click", bttnClicked);
var onEnter = document.getElementById('dayValue');

onEnter.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    bttnClicked();
  }
});

dayValue.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    bttnClicked();
  }
})
monthValue.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    bttnClicked();
  }
})
yearValue.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    bttnClicked();
  }
})

function bttnClicked() {
  console.log('Clicked');
  age = parseInt(document.getElementById("yearValue").value);
  month = parseInt(document.getElementById("monthValue").value);
  day = parseInt(document.getElementById("dayValue").value);


  function calculate(startingYear) {
    var today = new Date()
    var currentYear = today.getFullYear()
    return currentYear - startingYear;
  }

  function calculate1(startingMonth) {
    var today = new Date()
    var currentMonth = today.getMonth() + 1
    return currentMonth - startingMonth;
  }

  function calculate2(startingDay) {
    var today = new Date()
    var currentDay = today.getDate()
    return currentDay - startingDay;
  }



  var yearsAlive = calculate(age);
  var monthsAlive = calculate1(month);
  var daysAlive = calculate2(day);
  var currentHour = today.getHours();
  var currentMinutes = today.getMinutes();
  var yearsToDays = (yearsAlive * 365) + (monthsAlive * 30.417) + (daysAlive);
  var daysToSec = (Math.round(yearsToDays * 86400));

  document.getElementById("age-span").innerHTML = yearsAlive;
  document.getElementById("answer").innerHTML = daysToSec;
  document.getElementById("error1").style.display = "none";
  document.getElementById("error2").style.display = "none";
  document.getElementById("youAre").style.textDecoration = "none";
  document.getElementById("youHave").style.textDecoration = "none";
  document.getElementById("age-span").style.display = "inline";
  document.getElementById("age-span2").style.display = "inline";
  document.getElementById("answer").style.display = "inline";
  document.getElementById("answer2").style.display = "inline";



  if (yearsAlive < 0) {
    document.getElementById("youAre").style.textDecoration = "line-through";
    document.getElementById("age-span").style.display = "none";
    document.getElementById("age-span2").style.display = "none";
    document.getElementById("error1").style.display = "inline";
    document.getElementById("error1").innerHTML = "&nbsp;Error";
    document.getElementById("youHave").style.textDecoration = "line-through";
    document.getElementById("answer").style.display = "none";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("error2").style.display = "inline";
    document.getElementById("error2").innerHTML = "&nbsp;We are still in 2018 !";
  }

  if (daysAlive < 0 || daysAlive > 31) {
    document.getElementById("youAre").style.textDecoration = "line-through";
    document.getElementById("age-span").style.display = "none";
    document.getElementById("age-span2").style.display = "none";
    document.getElementById("error1").innerHTML = "&nbsp;Error";
    document.getElementById("youHave").style.textDecoration = "line-through";
    document.getElementById("answer").style.display = "none";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("error2").innerHTML = "&nbsp;Invalid day Input !";
  }

  if (monthsAlive < 0 || monthsAlive > 12) {
    document.getElementById("youAre").style.textDecoration = "line-through";
    document.getElementById("age-span").style.display = "none";
    document.getElementById("age-span2").style.display = "none";
    document.getElementById("error1").innerHTML = "&nbsp;Error";
    document.getElementById("youHave").style.textDecoration = "line-through";
    document.getElementById("answer").style.display = "none";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("error2").innerHTML = "&nbsp; Invalid Month Input !";
  }
}