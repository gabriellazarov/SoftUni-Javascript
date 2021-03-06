async function lockedProfile() {
    let response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    let userInfo = await response.json();

    let userNumber = 0;

    for (let el in userInfo) {
        let user = userInfo[el];
        userNumber++;

        let profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');

        let img = document.createElement('img');
        img.src = './iconProfile2.png';
        img.classList.add('userIcon');
        profileDiv.appendChild(img);

        let lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';
        profileDiv.appendChild(lockLabel);

        let radioBtn1 = document.createElement('input');
        radioBtn1.type = 'radio';
        radioBtn1.name = userNumber + 'Locked';
        radioBtn1.value = 'lock';
        radioBtn1.checked = true;
        profileDiv.appendChild(radioBtn1);

        let unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock';
        profileDiv.appendChild(unlockLabel);

        let radioBtn2 = document.createElement('input');
        radioBtn2.type = 'radio';
        radioBtn2.name = userNumber + 'Locked';
        radioBtn2.value = 'unlock';
        radioBtn2.checked = false;
        profileDiv.appendChild(radioBtn2);

        profileDiv.appendChild(document.createElement('br'));
        profileDiv.appendChild(document.createElement('hr'));

        let usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';
        profileDiv.appendChild(usernameLabel);

        let usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.name = 'user1Username';
        usernameInput.value = user.username;
        usernameInput.disabled = true;
        usernameInput.readOnly = true;
        profileDiv.appendChild(usernameInput);


        let hiddenFields = document.createElement('div');
        hiddenFields.id = 'user1HiddenFields';

        hiddenFields.appendChild(document.createElement('hr'));

        let email = document.createElement('label')
        email.textContent = 'Email:';
        hiddenFields.appendChild(email);

        let inputEmail = document.createElement('input');
        inputEmail.type = 'email';
        inputEmail.name = 'user1Email';
        inputEmail.value = user.email;
        inputEmail.disabled = true;
        inputEmail.readOnly = true;
        hiddenFields.appendChild(inputEmail);

        let age = document.createElement('label')
        age.textContent = 'Age:';
        hiddenFields.appendChild(age);

        let inputAge = document.createElement('input');
        inputAge.type = 'email';
        inputAge.name = 'user1Age';
        inputAge.value = user.age;
        inputAge.disabled = true;
        inputAge.readOnly = true;
        hiddenFields.appendChild(inputAge);

        profileDiv.appendChild(hiddenFields);

        let button = document.createElement('button');
        button.textContent = 'Show more';
        button.addEventListener('click', showMore);
        profileDiv.appendChild(button);


        document.getElementById('main').appendChild(profileDiv);
    }

    function showMore(event) {

        if (!event.target.parentElement.children[2].checked) {
            if (event.target.textContent == 'Show more') {
                event.target.textContent = 'Hide it';

                let hiddenFields = event.target.parentElement.children[9];
                hiddenFields.style.display = 'block';
            } else {
                event.target.textContent = 'Show more';

                let hiddenFields = event.target.parentElement.children[9];
                hiddenFields.style.display = 'none'; 
            }
        }
    }

    console.log(userInfo)
}