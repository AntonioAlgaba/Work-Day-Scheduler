var textareaTxt = $("textarea.description")
var saveBtn = $(".saveBtn")
var timeBlockEl = $(".time-block")
var hourEl = $(".hour")
var pastEl = $(".past")
var presentEl = $(".present")
var futureEl = $(".future")
var saveBtnEl = $(".savebtn")
var currentDayEl = $("#currentDay")
var containerEl = $(".container")


    //console.log(now)


var timer = setInterval(function(){
  //var today = moment().subtract(5, 'hours');
  var today = moment() 
$("#currentDay").text(today.format("dddd, MMMM Do HH:mm:ss"));

}, 1000)
  

  
  var row = $('<div>')
  $(containerEl).append(row);
  $(row).addClass('row');

  // MAKE the 8 rows
  for (let i = 0; i <= 8; i++) {

    var divEl = $("<div>");
    var textareaEl = $("<textarea>");
    var buttonEl = $("<button>");
    var imgEl = $("<i>");
    var time = moment().hour(i + 9).format("h a")
    var now = moment().format("h a")
    var compareTime = moment(time, "h:mma")
    var nowCompare = moment(now, "h:mma")
    //console.log(time)
    
    buttonEl.attr("id", i + 9)
    //console.log(now)
    
   
  $(row).append(divEl);
  $(divEl).addClass("time-block col-1")
  $(divEl).text(moment().hour(i + 9).format("H A"));

  $(row).append(textareaEl)
  $(textareaEl).addClass("description saveData col-10")
  $(textareaEl).attr("style", "border: 1px solid white")
  

  $(row).append(buttonEl)
  $(buttonEl).addClass('saveBtn col-1')
  $(buttonEl).append(imgEl)
  $(imgEl).addClass('fas fa-save')

  // Compare the time
  if (moment(compareTime).isBefore(nowCompare)) {
    textareaEl.addClass("past");
  } else if (moment(compareTime).isAfter(nowCompare)) {
    textareaEl.addClass("future");
  } else {
    textareaEl.addClass("present");
  }
}



// Retrieve data from local storage

$(".description").each(function(index){
  var textareaId =  "description" + index  
  var textareaValue = localStorage.getItem(textareaId);
  if (textareaValue) {
    $(this).val(textareaValue);
  }
});



// Save data to local storage on button click

  $(".saveBtn").on("click", function(e){
    e.preventDefault();
    //console.log('clicked')
    var textareaIndex = $(".saveBtn").index(this);
    var textareaId = "description" + textareaIndex;
    var textareaValue = $(".description").eq(textareaIndex).val();
    localStorage.setItem(textareaId, textareaValue);
   
   });


   
 
 
  

   
 
  



