$(document).ready(function() {
  var schedule = [];

  // Populate the schedule array
  for (var i = 0; i < 24; i++) {
    schedule[i] = localStorage.getItem("hour-" + i) || "";
  }

  // Create input fields for each hour
  for (var i = 0; i < 24; i++) {
    var input = "<input type='text' class='schedule-input' id='hour-" + i + "' value='" + schedule[i] + "'>";
    $("#schedule-container").append("<p>" + i + ":00 " + input + "</p>");
  }

  // Save the schedule when an input field is changed
  $(".schedule-input").change(function() {
    var id = $(this).attr("id");
    var val = $(this).val();
    localStorage.setItem(id, val);
  });
});

$(".save-button").click(function() {
  var textareaId = $(this).data("target");
  var textareaValue = $(textareaId).val();
});

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
})