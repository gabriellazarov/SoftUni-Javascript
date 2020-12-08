function summerOutfit(arg1, arg2) {
    let time = arg2;
    let degrees = Number(arg1);
    let clothes;
    let shoes;
    if (degrees >= 10 && degrees <= 18) {
        if (time === "Morning") {
            clothes = "Sweatshirt";
            shoes = "Sneakers";
        }
        else if (time === "Afternoon" || time === "Evening") {
            clothes = "Shirt";
            shoes = "Moccasins";
        }
    } else if (degrees > 18 && degrees <= 24) {
        if (time === "Morning" || time === "Evening") {
            clothes = "Shirt";
            shoes = "Moccasins";
        }
        else if (time === "Afternoon") {
            clothes = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (degrees > 24) {
        if (time === "Morning") {
            clothes = "T-Shirt";
            shoes = "Sandals";
        }
        else if (time === "Afternoon") {
            clothes = "Swim Suit";
            shoes = "Barefoot";
        }
        else if (time === "Evening") {
            clothes = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`);
}