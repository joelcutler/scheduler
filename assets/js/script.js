//moment.js for current date new Date()
//time blocks hardcoded w appropriate classes and ids to work w JS. color code them as past present future (moment.js checks for time)
//use 24hr time 
//create  save event button w listener and handler function
//clicking time block allows text editing
//save button stashes event data in localstorage so it persists
//function for dynamically changing the textcontent of the timeblocks
//loop through each time block and check each timeblock, comparing each hour (is present less than 13 or greater than 13)
//parseInt(moment().format("HH"));
//auditevent function to check time stuff see photo

console.log("asfdfgsdf");
var presentTime = moment();

// var `hr${i}` = document.querySelector(`#${i}-text`);

var hr9 = document.querySelector("#text-9");
console.log(hr9);
var hr10 = document.querySelector("#text-10");
var hr11 = document.querySelector("#text-11");
var hr12 = document.querySelector("#text-12");
var hr13 = document.querySelector("#text-13");
var hr14 = document.querySelector("#text-14");
var hr15 = document.querySelector("#text-15");
var hr16 = document.querySelector("#text-16");
var hr17 = document.querySelector("#text-17");


var textAreaHandler = function() {
    h9.addEventListener("click", setText);
}

var setText = function() {
    h9.textContent = "asdfdfgsdf";
};