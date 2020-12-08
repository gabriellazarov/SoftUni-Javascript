function onTime(arg1, arg2, arg3, arg4) {
    let examHour = Number(arg1);
    let examMinute = Number(arg2);
    let arrivalHour = Number(arg3);
    let arrivalMinute = Number(arg4);
    if (examHour === arrivalHour) {
        if (examMinute === arrivalMinute) console.log("On time");
        else if ((examMinute < arrivalMinute + 30) && (examMinute > arrivalMinute)) {
            console.log("On time");
            console.log(`${examMinute - arrivalMinute} minutes before the start`);
        } else if (examMinute > arrivalMinute) {
            console.log("Early");
            console.log(`${examMinute - arrivalMinute} minutes before the start`);
        }
        else {
            console.log("Late");
            console.log(`${arrivalMinute - examMinute} minutes after the start`);
        }
    } else if (examHour > arrivalHour) {
        if (examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute <= 30) {
            console.log("On time");
            if (examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute < 60) {
                console.log(`${examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute} minutes before the start`);
            } else {
                if ((examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute) % 60 < 10) {
                    console.log(`${Math.floor((examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute) / 60)}:0${(examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute) % 60} hours before the start`);
                } else {
                    console.log(`${Math.floor((examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute) / 60)}:${(examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute) % 60} hours before the start`);
                }
            }
        } else {
            console.log("Early");
            if (examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute < 60) {
                console.log(`${examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute} minutes before the start`);
            } else {
                if ((examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute) % 60 < 10) {
                    console.log(`${Math.floor((examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute) / 60)}:0${(examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute) % 60} hours before the start`);
                } else {
                    console.log(`${Math.floor((examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute) / 60)}:${(examHour * 60 + examMinute - arrivalHour * 60 - arrivalMinute) % 60} hours before the start`);
                }
            }
        }
    } else if (examHour < arrivalHour) {
        console.log("Late");
        if (arrivalHour * 60 + arrivalMinute - examHour * 60 - examMinute < 60) {
            console.log(`${arrivalHour * 60 + arrivalMinute - examHour * 60 - examMinute} minutes after the start`)
        } else {
            if ((-examHour * 60 - examMinute + arrivalHour * 60 + arrivalMinute) % 60 < 10) {
                console.log(`${Math.floor((-examHour * 60 - examMinute + arrivalHour * 60 + arrivalMinute) / 60)}:0${(-examHour * 60 - examMinute + arrivalHour * 60 + arrivalMinute) % 60} hours after the start`);
            } else {
                console.log(`${Math.floor((-examHour * 60 - examMinute + arrivalHour * 60 + arrivalMinute) / 60)}:${(-examHour * 60 - examMinute + arrivalHour * 60 + arrivalMinute) % 60} hours after the start`);
            }
        }
    }
}
onTime(9, 0, 10, 30)