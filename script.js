// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//var rowEl = $('<tr>')
$(function () {
  var today = dayjs().startOf('day');
  var displayCurrent =  $('#currentDay');
  displayCurrent.text(today);

  // var agendaDisplay = $('#agenda-display');
  // can I just do this programatically on page load? it would make more sense.
  // var nineAm = $('.hour-nine');
  // var tenAm = $('.hour-ten');
  // var elevAM = $('.hour-eleven');
  // var twelveNoon = $('.hour-twelve');
  // var onePm = $('.hour-thirteen');
  // var twoPm = $('.hour-fourteen');
  // var threePm = $('.hour-fifteen');
  // var fourPm = $('.hour-sixteen');
  // var fivePm = $('.hour-seventeen');


  // var taskText = ('.description') ;
  // save time blocks to storage & make loadAgenda function? agenda starts empty but I still have to display the time
  // var agenda = []

  function makeTimeBlock(){
  //var timeBlock = document.createElement("div")??? or just put empty divs for each hour in html??
  
  // need parseInt for hour? different way of identifying hour????


  
  };
  

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
  // make var timeBlock with parseInt div id
  if (timeBlock.isBefore(dayjs().hour() )) {
    rowEl.addClass('past');
  } else if (timeBlock.isSame(dayjs().hour() )) {
    rowEl.addClass('present');
  } else if (timeBlock.isAfter(dayjs().hour() )){
    rowEl.addClass('future');
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function loadAgenda(){
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
};
  //
  
  
  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
    console.log("call time!");
    //change dayjs formatting to central time
      setInterval (function()
    {
      var currentTime = dayjs();
      $("#currentDay").text(currentTime.format('dddd, MMMM DD, YYYY -- HH:mm'));
    }, );
    }
    displayTime();

  
});


