// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
    // TODO: Add code to display the current date in the header of the page.
  var today = dayjs().startOf('day');
  var displayCurrent =  $('#currentDay');
  displayCurrent.text(today);

  var saveButton = $(".saveBtn");

  function saveToTimeBlock (event) {
    event.preventDefault();
    console.log("save item function");
   var whatTask = $(this).siblings(".description").val();
    var whatTime = $(this).parent().attr("id");
    // simpler is better?
    localStorage.setItem(whatTime, whatTask)
  };

  saveButton.on('click', saveToTimeBlock);
  
 
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function colorCode(){
    var hour = dayjs().hour();
    console.log(hour);
    //
    $(".time-block").each(function (){
      let parseHour = $(this).attr("id").split("hour");
      let thisHour = parseInt(parseHour[1]);
      console.log(thisHour);
      if (thisHour < hour) {
        $(".time-block").addClass('past');
      } else if (thisHour === hour) {
        $(".time-block").addClass('present');
      } else if (thisHour > hour ){
        $(".time-block").addClass('future');
      };
    });
  }
 


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function loadAgenda(){
    $('#hour9 .description').val(localStorage.getItem('hour9'));
    $('#hour10 .description').val(localStorage.getItem('hour10'));
    $('#hour11 .description').val(localStorage.getItem('hour11'));
    $('#hour12 .description').val(localStorage.getItem('hour12'));
    $('#hour13 .description').val(localStorage.getItem('hour13'));
    $('#hour14 .description').val(localStorage.getItem('hour14'));
    $('#hour15 .description').val(localStorage.getItem('hour15'));
    $('#hour16 .description').val(localStorage.getItem('hour16'));
    $('#hour17 .description').val(localStorage.getItem('hour17'));
  
};
loadAgenda();
colorCode();

});


