//Container elements
var save = $(".saveBtn");
var containerEl = $(".container");
var hour9AM = $("9AM");
var hour10AM = $("10AM");
var hour11AM = $("11AM");
var hour12PM = $("12PM");
var hour1PM = $("1PM");
var hour2PM = $("2PM");
var hour3PM= $("3PM");
var hour4PM = $("4PM");
var hour5PM = $("5PM");

//Variables
var hourArray = [
    hour9AM,
    hour10AM,
    hour11AM,
    hour12PM,
    hour1PM,
    hour2PM,
    hour3PM,
    hour4PM,
    hour5PM
];

//Use Moment.js to format the date at the top of the calendar
function updateTime(){

var todayIs = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(todayIs);

//Color code timeblocks
var ppf = moment().format("kk");
for (let i =0; i < hourArray.length;i++){
    hourArray[i].removeClass("past present future");

    if (ppf > hourArray[i].data("hour")){
        hourArray[i].addClass("past");

    } else if(ppf === hourArray[i].data("hour")){
        hourArray[i].addClass("present");

    }else{
        hourArray[i].addClass("future");
    }
}
}