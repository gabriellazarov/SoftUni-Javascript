function scholarship(arg1, arg2, arg3) {
    let dohod = arg1;
    let uspeh = arg2;
    let minZaplata = arg3;
    let socialScholarship = minZaplata * 0.35;
    let resultScholarship = uspeh * 25;
    if (uspeh < 4.5) {
        console.log("You cannot get a scholarship!")
    }
    else {
        if (uspeh <= 5.5) {
            if (dohod <= minZaplata) {
                console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`)
            }
            else {
                console.log("You cannot get a scholarship!")
            }
        }
        else if (socialScholarship > resultScholarship) {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`)
        }
        else console.log(`You get a scholarship for excellent results ${Math.floor(resultScholarship)} BGN`)
    }

}
scholarship(300, 5.65, 420)