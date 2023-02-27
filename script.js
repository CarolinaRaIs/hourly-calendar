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
  // (2Q) How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
  // (3Q) How might the id be useful when saving the description in local storage?


  // (1A) Inside the event listener function (CLICK), 'this' refers to the save button that was clicked.
  // (2Q) DOM traversal can be used to get 'timeBlockId' and the user input from the 'description' <textarea>
  // (3A) We can use 'localStorage.setItem' to save the description in local storage but the id is useful because that is what is used to reference the key in local storage. 
  $('.saveBtn').on('click', function () {
    console.log(this)
    var timeBlockId = $('#time-block');
  });

    

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
});
