function attachEvents() {

    async function submit(event) {
        event.preventDefault();
        let form = [...document.querySelector("#form > div.inputs").children];
        if (form[0].value == '' || form[1].value == '' || form[2].value == '' || form[3].value == '') return;
        if (!(Number(form[3].value) > -1)) return;
        let regex = /^[0-9]+$/m;
        if (regex.test(form[2].value) == false) return;

        const student = JSON.stringify({ firstName: form[0].value, lastName: form[1].value, facultyNumber: form[2].value, grade: form[3].value });

        await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: student
        });

        form.forEach(a => a.value = '');
        extractStudents();
    }

    async function extractStudents() {
        let tableBody = document.getElementById('results').children[1];
        tableBody.innerHTML = '';

        const response = await fetch('http://localhost:3030/jsonstore/collections/students');
        const data = await response.json();

        Object.entries(data).forEach(a => {
            let tr = document.createElement('tr');

            let firstName = document.createElement('td');
            firstName.textContent = a[1].firstName;
            tr.appendChild(firstName);

            let lastName = document.createElement('td');
            lastName.textContent = a[1].lastName;
            tr.appendChild(lastName);

            let facultyNumber = document.createElement('td');
            facultyNumber.textContent = a[1].facultyNumber;
            tr.appendChild(facultyNumber);

            let grade = document.createElement('td');
            grade.textContent = a[1].grade;
            tr.appendChild(grade);

            tableBody.appendChild(tr);
        });
    }


    document.getElementById('submit').addEventListener('click', submit);
}

attachEvents();