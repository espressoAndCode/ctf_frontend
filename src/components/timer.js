function countdown(endDate) {

    let days,
        hours,
        minutes,
        seconds;
        // time format - '04/01/2333 05:00:00 PM'

    const today = new Date();
    const dateString = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear() + ' '+ endDate;

    endDate = new Date(dateString).getTime();


    if (isNaN(endDate)) {
        return;
    }

    setInterval(calculate, 1000);

    function calculate() {
        let startDate = new Date();
        startDate = startDate.getTime();

        let timeRemaining = parseInt((endDate - startDate) / 1000);

        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);

            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);

            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);

            seconds = parseInt(timeRemaining);

            days = parseInt(days, 10);
            hours = ("0" + hours).slice(-2);
            minutes = ("0" + minutes).slice(-2);
            seconds = ("0" + seconds).slice(-2);


            console.log(hours + ':' + minutes + ':' + seconds)

          } else {
            return;
        }
    }
}

export default countdown;
