async function solution() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const data = await response.json();

    for (let element of data) {
        let div = document.createElement('div');
        div.classList.add('accordion');

        let head = document.createElement('div');
        head.classList.add('head');
        let span = document.createElement('span');
        span.textContent = element.title;
        head.appendChild(span);
        let button = document.createElement('button');
        button.classList.add('button');
        button.id = element._id;
        button.textContent = 'More';
        button.addEventListener('click', more);
        head.appendChild(button);

        div.appendChild(head);

        document.getElementById('main').appendChild(div);
    }

    async function more(event) {
        if (event.target.textContent == 'More') {
            if (event.target.parentElement.parentElement.children[1] == undefined) {
                let id = event.target.parentElement.children[1].id;

                let response = await fetch('http://localhost:3030/jsonstore/advanced/articles/details/' + id);
                let data = await response.json();

                let div = document.createElement('div');
                div.classList.add('extra');

                let p = document.createElement('p');
                p.textContent = data.content;
                div.appendChild(p);

                event.target.parentElement.parentElement.appendChild(div);
                event.target.parentElement.parentElement.children[1].style.display = 'block';
            } else {
                event.target.parentElement.parentElement.children[1].style.display = 'block';
            }
            event.target.textContent = 'Less';
        } else {
            event.target.parentElement.parentElement.children[1].style.display = 'none';
            event.target.textContent = 'More';
        }
    }
}

solution();