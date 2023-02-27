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
    console.log(this)
    console.log("hi")
    // (2Q)
    // this.closest('.time-block') --> "Select the closest ancestor element of the saveBtn (this) that has a class of time-block"
    // (closest ancestor element (ie:<div>) of the saveBtn with class time-block).attr('id') ---> get the id attribute of the closest ancestor element of the saveBtn
    // "Get the id of the time-block container (ie: id = "hour-x") that contains the save button that was clicked (this).
    var timeBlockId = $(this).closest('.time-block').attr('id');
    // ".querySelector('.description') for js ---> .find('.description') for jquery---> "Select the first element with a class of description that is a descendant of the time-block element returned by this.closest('.time-block'). "
    // (<textarea>).val() ---> What the user types (input)
    // "Get the user input from the textarea element"
    var description = $(this).closest('.time-block').find('.description').val();
    // (3Q)
    // localStorage.setItem(key, value) -----> key = (timeBlockId = "hour-x"),  value = data stored in local storage that holds input data from <textarea> element
    localStorage.setItem(timeBlockId, description);
  });



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //





  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 

  // PROCESS: How can the id attribute of each time-block be used to do this?
  
  // Retrieve saved data (input text = "referenced by timeBlockId thats name "hour-x") from local storage 
  // ('#hour-x .description) -----> selects the textarea element with a class of .description and an id of hour-x. The <textarea> element is a descendent of the <div> element (has the id of hour-x).
  // (localStorage.getItem("id attribute of each time-block")) --> gets the value stored in local storage under the key "hour-x".
  $('#hour-6 .description').val(localStorage.getItem('hour-6'));
  $('#hour-7 .description').val(localStorage.getItem('hour-7'));
  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#hour-18 .description').val(localStorage.getItem('hour-18'));


  // TODO: Add code to display the current date in the header of the page.

    // moment.js to access live clock
    // $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
});
