// Wrap all code that interacts with the DOM in a call to jQuery 
$(document).ready(function(){
    let currentHour = dayjs().hour();
    console.log(currentHour);
    var entry = $('textarea');
    var hour = $('.hour');
    
  $(function () {
    //Time and Date Display with dayjs:
    var timeAndDate = dayjs().format('ddd MMM DD, YYYY  hh:mm:ss a');
    $('#currentDay').text(timeAndDate);
    
    //Goes through each of the time blocks and checks it against the currentHour to decide what colour it should be:
    for (i = 0; i < 9; i++){
        $('.time-block').each(function(){
            var blockHour = parseInt($(this).attr('id').split('-')[1]);
            if(blockHour < currentHour){
                $(this).addClass('past');
            }
            else if (blockHour === currentHour){
                $(this).removeClass('past');
                $(this).addClass('present');
            }
            else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            } });};

    //When the save button is clicked it stores contents of entry in localStorage with the hour:
    $('.saveBtn').on('click', function(){
        var hour = $(this).parent().attr('id');
        console.log(hour);
        var entry = $(this).siblings('.description').val();
        console.log(entry);
        localStorage.setItem(hour, entry);
  
    });
    //This gets the items hour and entry from the local stroage:
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  });
  });