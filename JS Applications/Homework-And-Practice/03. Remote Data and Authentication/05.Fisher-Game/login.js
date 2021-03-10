function attachEvents() {

    async function register(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('rePass');

        //clearing form fields for aesthetics
        document.querySelector("#exercise > div > div > div > div > form:nth-child(2) > label:nth-child(1) > input[type=text]").value = '';
        document.querySelector("#exercise > div > div > div > div > form:nth-child(2) > label:nth-child(2) > input[type=password]").value = '';
        document.querySelector("#exercise > div > div > div > div > form:nth-child(2) > label:nth-child(3) > input[type=password]").value = '';

        if (password != rePass) return alert('Passwords must match!');
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        if (response.ok) {
            const data = await response.json();
            sessionStorage.setItem('authToken', data.accessToken);
        } else {
            const error = await response.json();
            alert(error.message);
        }
    }

    async function login(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const email = formData.get('email');
        const password = formData.get('password');

        //clearing form fields for aesthetics
        document.querySelector("#exercise > div > div > div > div > form:nth-child(5) > label:nth-child(1) > input[type=text]").value = '';
        document.querySelector("#exercise > div > div > div > div > form:nth-child(5) > label:nth-child(2) > input[type=password]").value = '';

        const response = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        if (response.ok) {
            const data = await response.json();
            sessionStorage.setItem('authToken', data.accessToken);
        } else {
            const error = await response.json();
            alert(error.message);
        }
    }

    document.querySelector("#exercise > div > div > div > div > form:nth-child(2)").addEventListener('submit', register);
    document.querySelector("#exercise > div > div > div > div > form:nth-child(5)").addEventListener('submit', login);
}

attachEvents();

