// fade out any flash messages after 2 seconds
if ($('#flash')) {
    $('#flash').delay(5000).fadeOut('slow');
}

// if there are any items in the cart
if ($('#cart-qty').text() > 0) {
    //// TESTING sessionStorage Timer
    const start = sessionStorage.start || Date.now();
    const timespan = 10000000;
    const delay = 1000;


    function countdown() {
        const now = Date.now();
        // show visual timer
        $('#timer-count-down').show('slow');

        // begin visual timer
        $('#timer').html((Math.floor((now - timespan) / 10) * -1));

        if (now - start < timespan) {
            setTimeout(countdown, delay);
        } else {
            delete sessionStorage.start;
        }
    }

    if (!sessionStorage.start) {
        sessionStorage.start = start;
    }

    countdown();
    // // show visual timer
    // $('#timer-count-down').show('slow');
    // // begin visual timer
    // $('#timer').html(00 + ":" + 10);
    // startTimer();

    // start a timer
    // setTimeout(function() {
    // after time runs out, confirm if user wants to clear their cart
    // if(confirm('Clear your cart?')) {
    // send a request to the clearcart route
    $.get('/clearcart', function(response) {
        // remove cart quantity notification from navbar
        $('#cart-qty').text('');
        // redirect to /products
        window.location = '/shopping-cart';
    });
    // }
    // // stop visual timer
    // stopTimer();
    // // hide visual timer
    // $('#timer-count-down').hide('slow');
    // }, 10000);
}

// visual timer code
// var timer;

// function startTimer() {
//   var presentTime = document.getElementById('timer').innerHTML;
//   var timeArray = presentTime.split(/[:]+/);
//   var m = timeArray[0];
//   var s = checkSecond((timeArray[1] - 1));
//   if(s==59){m=m-1}
//   $('#timer').html(m + ":" + s);
//   timer =	setTimeout(startTimer, 1000);
// }

// function stopTimer() {
// 	clearTimeout(timer);
// }

// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
//   if (sec < 0) {sec = "59"};
//   return sec;
// }
// -- end visual timer code