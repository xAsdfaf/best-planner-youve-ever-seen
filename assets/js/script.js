var saveBtnEl = $(".saveBtn");
var currentDate = $("#currentDay");



  colorChanger();
  setInterval(colorChanger, 60000);

  saveBtnEl.on("click", saveUserInput);

$(".time-block").each(function() {

// selecting each block
  var eachBlock = $(this).attr("id");

// pulling text from local storage to avoid text loss on refresh
$("#" + eachBlock + " textarea").text(localStorage.getItem(eachBlock));
});

function colorChanger() {
  var timeNow = parseInt(dayjs().format("h"))
  var timeOther = parseInt($(this).attr("id"));
  $(this).removeClass("past present future");

  if (timeNow > timeOther) {
    $(this).addClass("past");
  } else if (timeNow < timeOther) {
    $(this).addClass("future");
  } else {
    $(this).addClass("present");
  }
};

function saveUserInput() {
  var blockId = $(this).parent().attr("id");
  localStorage.setItem(blockId, $("#" + blockId + " textarea").val());
};

// live day/time display 
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  currentDate.text(rightNow);
};

displayTime();
setInterval(displayTime, 1000);