function guess(pass) {
    let result = pass.localeCompare("s3cr3t!P@ssw0rd");
    if (result === 0) {
        console.log("Welcome");
    }
    else console.log("Wrong password!")

}
guess("s3cr3t!P@s");