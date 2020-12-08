function concatenateDate(fName, lName, sAge, incomeTown) {
    let firstName = fName;
    let lastName = lName;
    let age = Number(sAge);
    let town = incomeTown;

    console.log("You are " + firstName + " " + lastName + ", a " + age + "-years old person from " + town + ".");
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
}
concatenateDate("Gobi","Lazarov","20","Pleven");