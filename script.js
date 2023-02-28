// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// This function waits until the entire DOM has loaded before executing any code that is passed to it as a callback function.
$(document).ready(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 

  // PROCESS: 
  // (1Q) What does `this` reference in the click listener function? 
      // (1A) Inside the event listener function (CLICK), 'this' refers to the save button that was clicked.
  // (2Q) How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
      // (2Q) DOM traversal can be used to get 'timeBlockId' and the user input from the 'description' <textarea>
  // (3Q) How might the id be useful when saving the description in local storage?
      // (3A) We can use 'localStorage.setItem' to save the description in local storage. The id is useful because that is what is used to reference the key in local storage. 
  
  $('.saveBtn').on('click', function () {
    console.log(this);
    console.log("hi")
    // (2Q)
    // this.closest('.time-block') --> "Select the closest ancestor element of the saveBtn (this) that has a class of time-block"
    // (closest ancestor element (ie:<div>) of the saveBtn with class time-block).attr('id') ---> get the id attribute of the closest ancestor element of the saveBtn
    // "Get the id of the time-block container (ie: id = "hour-x") that contains the save button that was clicked (this).
    var timeBlockId = $(this).closest('.time-block').attr('id');
    console.log(timeBlockId);
    // ".querySelector('.description') for js ---> .find('.description') for jquery---> "Select the first element with a class of description that is a descendant of the time-block element returned by this.closest('.time-block'). "
    // (<textarea>).val() ---> What the user types (input)
    // "Get the user input from the textarea element"
    var description = $(this).closest('.time-block').find('.description').val();
    // (3Q)
    // localStorage.setItem(key, value) -----> key = (timeBlockId = "hour-x"),  value = data stored in local storage that holds input data from <textarea> element
    localStorage.setItem(timeBlockId, description);
  });



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  // PROCESS: 
  // (1Q) How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? 
      // (1A) The id attribute of each time-block (hour-i) can be used to compare its value to the current time.
  // (2Q) How can Day.js be used to get the current hour in 24-hour time?
      // (2A) dayjs().hour() ---> gets current hour (just the value of the hour) in 24-hour time format
  
  //(2A)
  var currentTime = dayjs().hour()
  
  // (1A)
  // Instead of checking each time block (#hour-i) independently, iterate conditional with a for loop (i starts at 6 AM, ends at 6PM = (i=18))
  for(var i =6; i<=18; i++) {
    console.log(currentTime);
    // `` ---> creates a template literal so that can use dynamic value (i) into the string
    var timeBlockId = $(`#hour-${i}`);

    if (i < currentTime) {
    // .addClass ---> jQuery function used to add class "past" (change styling) to an element
    timeBlockId.addClass("past");
    } else if (i === currentTime) {
    // .removeClass ---> jQuery function used to remove class "past" (change styling) to an element
    timeBlockId.removeClass("past");
    timeBlockId.addClass("present");
    } else {
    timeBlockId.removeClass("past");
    timeBlockId.removeClass("present");
    timeBlockId.addClass("future");
    }
  }
  







  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 

  // PROCESS: How can the id attribute of each time-block be used to do this?
  
  // Retrieve saved data (input text = "referenced by timeBlockId thats name "hour-x") from local storage 
  // ('#hour-x .description) -----> selects the textarea element with a class of .description and an id of hour-x. The <textarea> element is a descendent of the <div> element (has the id of hour-x).
  // (localStorage.getItem("id attribute of each time-block")) --> gets the value stored in local storage under the key "hour-x".
  
  // Use iteration (for loop) to simplify code:
      // ${} ---> Use of string interpolation to embed variable i. i will be converted to a string
      // .val() ----> to get the value from local storage and set it as the value of the input field ($(`#hour-${i} .description`)).
      // $(`#hour-${i} .description`).val(localStorage.getItem('hour-${i}'));
      // Using back ticks (``) not single quotes ('') to interpolate the i value of the string
        // $('#hour-6 .description').val(localStorage.getItem('hour-6')); .......
        // $('#hour-18 .description').val(localStorage.getItem('hour-18')); .........
        // Can confirm that task was succesfully achieved because in "Application" tab in Devtools, you can see that key "hour-i" (key) is associated to the input typed in (value) in the local storage
  for (var i=6; i <= 18; i++) {
    userInput = $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
    console.log(userInput);
  }

  // TODO: Add code to display the current date in the header of the page.

    // day.js to access live clock
    // day() = a function in day.js that repressents current date and time
    // format() = takes string argument for format that want to use
    // "MMMM Do YYYY, h:mm:ss a" = "Month Day Year, Hour:Minute:Second AM/PM".
    // link day.js in html for this code to work

  var currentDayEl = $('#currentDay');

  function displayCurrentTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(rightNow);
    console.log(displayCurrentTime);
  }

  displayCurrentTime();
  // Set interval to have time continually update instead of only when refresh the page
  setInterval(displayCurrentTime, 1000);

});
