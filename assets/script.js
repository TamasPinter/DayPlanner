// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    let timeNow = dayjs().format('ddd MMM-D-YYY H:m');
    $("#currentDay").text(timeNow);

    // using the save button, info tracked through hour div and text input div, logged to localstorage
$(".saveBtn").on('click', function() {
    let timeBox = $(this).parent().attr('id');
    let inputText = $(this).siblings('.description').val();
    localStorage.setItem(timeBox, inputText);
    console.log(localStorage);
    return;
});
 
//check if entered event is in past/present/future and assign variable colours
const thisHour = dayjs().format('H');
$('.time-block').each(function () {
    let divId = $(this).attr('id'); // divId tied to entered hour id
    if (divId < currentHour) { 
        const element = document.getElementById('id') //check to make sure current iD is before
        $(this).element.classList.add('.past'); //assign current frame past
    } else if (divId > currentHour) {  //entered id greater than current time
        $(this).addClass('#future'); //assign class future
    } else if (divId === currentHour) { //if Id is current hour
        $(this).addClass('#present');
    }
});
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
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
  });
  