function hotelRoom(arg1, arg2) {
    let month = arg1;
    let days = Number(arg2);
    let apartmentPrice = 1;
    let studioPrice = 1;
    if (days > 14) apartmentPrice = apartmentPrice * 0.9;
    if (month === "May" || month === "October") {
        if (days > 14) studioPrice = studioPrice * 0.7;
        else if (days > 7) studioPrice = studioPrice * 0.95;
        studioPrice = studioPrice * 50;
        apartmentPrice = apartmentPrice * 65;
    } else if (month === "June" || month === "September") {
        if (days > 14) studioPrice = studioPrice * 0.8;
        studioPrice = studioPrice * 75.2;
        apartmentPrice = apartmentPrice * 68.7;
    } else {
        studioPrice = studioPrice * 76;
        apartmentPrice = apartmentPrice * 77;
    }
    console.log(`Apartment: ${(apartmentPrice * days).toFixed(2)} lv.`)
    console.log(`Studio: ${(studioPrice * days).toFixed(2)} lv.`)
}
hotelRoom("May", 15)