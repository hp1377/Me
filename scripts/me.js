

function getDateTime() {
        let now     = new Date();
        let year    = now.getFullYear();
        let month   = now.getMonth()+1;
        let day     = now.getDate();
        let hour    = now.getHours();
        let minute  = now.getMinutes();
        let second  = now.getSeconds();

        if(month.toString().length == 1) {
             month = '0'+month;
        }
        if(day.toString().length == 1) {
             day = '0'+day;
        }
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(second.toString().length == 1) {
             second = '0'+second;
        }
        let dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;
         return dateTime;
    }

    setInterval(function(){
        currentTime = getDateTime();
        document.getElementById("digital-clock").innerHTML = currentTime;
    }, 1000);

//date
const title = document.getElementById("greeting");
const day = new Date().getDay();
if (day === 0) {
    title.innerHTML = "Enjoy your weekend!";
    } else if (day === 1) {
    title.innerHTML = "Today is Monday";
    } else if (day === 2) {
    title.innerHTML = "Today is Tuesday";
    } else if (day === 3) {
    title.innerHTML = "Happy Humpday!";
    } else if (day === 4) {
    title.innerHTML = "Today is Thursday";
    } else if (day === 5) {
    title.innerHTML = "Happy Friday!";
    } else if (day === 6) {
    title.innerHTML = "Enjoy your weekend!";
    }