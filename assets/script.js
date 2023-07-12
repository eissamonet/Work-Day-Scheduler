// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var today = $('#currentDay');


// TODO: Add code to display the current date in the header of the page.
var today = dayjs().format('dddd, MMMM D YYYY');
var displayDate = document.getElementById('currentDay');
displayDate.innerHTML = today;
var currentHour = dayjs().format('HH');


// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour.
$('.time-div').each(function () {
  var timeDiv = $(this).attr('id').split('-')[1];
  if (currentHour == timeDiv){
    $(this).addClass('present');
    $(this).children('.description').addClass('present');

  } else if (currentHour < timeDiv) {
    $(this).removeClass('present');
    $(this).addClass('future');

  } else if (currentHour > timeDiv) {
    $(this).removeClass('future');
    $(this).addClass('past');
  }  
});


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage.
$('.saveBtn').on('click', function (event) {
  event.preventDefault();
  var value = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id').split('-')[1];
  localStorage.setItem(time,value);
});


// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements.
$('#hour-09 .description').val(localStorage.getItem('09'));
$('#hour-10 .description').val(localStorage.getItem('10'));
$('#hour-11 .description').val(localStorage.getItem('11'));
$('#hour-12 .description').val(localStorage.getItem('12'));
$('#hour-13 .description').val(localStorage.getItem('13'));
$('#hour-14 .description').val(localStorage.getItem('14'));
$('#hour-15 .description').val(localStorage.getItem('15'));
$('#hour-16 .description').val(localStorage.getItem('16'));
$('#hour-17 .description').val(localStorage.getItem('17'));

