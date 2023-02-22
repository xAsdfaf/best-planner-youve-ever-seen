var saveBtnEl = $(".saveBtn");
var currentDate = $("#currentDay");


// calling the color changing function. 
colorChanger();
// adding save button functionality
saveBtnEl.on("click", saveUserInput);
// function to run on each timeblock individually 
$(".time-block").each(function () {

  // selecting each block
  var eachBlock = $(this).attr("id");

  // pulling text from local storage to avoid text loss on refresh
  $("#" + eachBlock + " textarea").text(localStorage.getItem(eachBlock));
});
// changes color based on time
function colorChanger() {
  $(".time-block").each(function () {
    var timeNow = parseInt(dayjs().format("HH"))
    var timeOther = parseInt($(this).attr("id"));
    $(this).removeClass("past present future");

    if (timeNow > timeOther) {
      $(this).addClass("past");
    } else if (timeNow < timeOther) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  })
};
// saving user input into local storage
function saveUserInput() {
  var blockId = $(this).parent().attr("id");
  localStorage.setItem(blockId, $("#" + blockId + " textarea").val());
};

// live day/time display 
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  currentDate.text(rightNow);
};
// calling the day/time display and setting an interval to run it every second
displayTime();
setInterval(displayTime, 1000);

