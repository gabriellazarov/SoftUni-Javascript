function validate() {
    document.getElementById('submit').type = 'button';

    let usernameRegex = /^[a-zA-Z0-9]{3,20}$/m;
    let passwordRegex = /^[a-zA-Z0-9_]{5,15}$/m;
    let emailRegex = /.*@.*\..*/m;

    let companyInfo = document.getElementById('companyInfo');

    function checkbox(event) {
        if (companyInfo.style.display == 'none') {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }
    function submit() {
        let flag = true;
        if (companyInfo.style.display != 'none') {
            if (document.querySelector("#companyNumber").value >= 1000 && document.querySelector("#companyNumber").value < 10000) {
                document.querySelector("#companyNumber").style.border = 'none';
            } else {
                document.querySelector("#companyNumber").style.borderColor = 'red';
                flag = false;
            }
        }

        if (usernameRegex.test(document.getElementById('username').value)) {
            document.getElementById('username').style.border = 'none';
        } else {
            document.getElementById('username').style.borderColor = 'red';
            flag = false;
        }

        if (emailRegex.test(document.getElementById('email').value)) {
            document.getElementById('email').style.border = 'none';
        } else {
            document.getElementById('email').style.borderColor = 'red';
            flag = false;
        }

        if (passwordRegex.test(document.getElementById('password').value)) {
            document.getElementById('password').style.border = 'none';
            if (document.getElementById('password').value === document.getElementById('confirm-password').value) {
                document.getElementById('confirm-password').style.border = 'none';
            } else {
                document.getElementById('confirm-password').style.borderColor = 'red';
                flag = false;
            }
        } else {
            document.getElementById('password').style.borderColor = 'red';
            document.getElementById('confirm-password').style.borderColor = 'red';
            flag = false;
        }


        if (flag == false) {
            document.getElementById('valid').style.display = 'none';
        } else {
            document.getElementById('valid').style.display = 'block';
        }
    }

    document.getElementById('company').addEventListener('change', checkbox);
    document.getElementById('submit').addEventListener('click', submit);
}
