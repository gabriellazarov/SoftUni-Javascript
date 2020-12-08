function valdiate(pass) {
    function checkLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return false;
        }
    }
    function checkContent(pass) {
        let flag = true;
        for (let i = 0; i < pass.length; i++) {
            if (pass[i].charCodeAt(0) < 48 || (pass[i].charCodeAt(0) > 57 && pass[i].charCodeAt(0) < 65) || (pass[i].charCodeAt(0) > 90 && pass[i].charCodeAt(0) < 97) || pass[i].charCodeAt(0) > 122) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    function checkDigits(pass) {
        let br = 0;
        for (let i = 0; i < pass.length; i++) {
            if (pass[i].charCodeAt(0) >= 48 && pass[i].charCodeAt(0) <= 57) {
                br++;
            }
        }
        if (br < 2) return false;
        else return true;
    }
    if (checkDigits(pass) && checkLength(pass) && checkContent(pass)) {
        console.log("Password is valid")
    } else {
        if (checkLength(pass) == false) {
            console.log('Password must be between 6 and 10 characters');
        }
        if (checkContent(pass) == false) {
            console.log('Password must consist only of letters and digits');
        }
        if (checkDigits(pass) == false) {
            console.log('Password must have at least 2 digits');
        }
    }
}
valdiate('mypass123')