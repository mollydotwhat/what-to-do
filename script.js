// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var saveButton = $(".saveBtn");
 
  //var timeBlock = document.createElement("div")??? or just put empty divs for each hour in html??
    //DO IT THE SIMPLE WAY *FIRST* w/html in html file.
      //maybe make global element to generate the time blocks, and then LATER fill them and analyze relative time??? but later.
  //for each hour according to dayjs, so they can be compared to current time more easily?

  // timeBlock.textContent = anHour.itemText

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function saveToTimeBlock (event) {
    event.preventDefault();
    console.log("save item function");
    // var timeBlock = {
      // divId;
      // paraText;
      //definitely, definitely not right, but I do need an object like this to hold values for each time block
    // };
    var itemText = divIdparaVariable.val();
    this.timeBlock.textContent = itemText;
    //that syntax is garbage but it's the general idea    
    //create object that contains values for time block
    //save variables to local storage
    //set element(s) of page to display this
  };

  //saveButton.on('click', saveToTimeBlock);

  //show hour blocks containing what's been entered to local storage so far (should start empty)



 
  //make it specific to each block--should each block be an object with that property?
  //



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
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


