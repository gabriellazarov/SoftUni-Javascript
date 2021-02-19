function solve() {

    function start(event) {
        let task = event.target.parentElement.parentElement;
        task.remove();
        task.children[3].children[0].remove();

        let finishButton = document.createElement('button');
        finishButton.textContent = 'Finish';
        finishButton.classList.add('orange');
        finishButton.addEventListener('click', finish);
        task.children[3].appendChild(finishButton);

        document.getElementById('in-progress').appendChild(task);
    }

    function delet(event) {
        event.target.parentElement.parentElement.remove();
    }

    function finish(event) {
        let task = event.target.parentElement.parentElement;
        task.remove();
        task.children[3].remove();

        document.querySelector("body > main > div > section:nth-child(4) > div:nth-child(2)").appendChild(task);
    }

    function add() {
        let task = document.getElementById('task');
        let description = document.getElementById('description');
        let date = document.getElementById('date');

        if (task.value == '' || description.value == '' || date.value == '') return;

        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = task.value;
        article.appendChild(h3);

        let p1 = document.createElement('p');
        p1.textContent = `Description: ${description.value}`;
        article.appendChild(p1);

        let p2 = document.createElement('p');
        p2.textContent = `Due Date: ${date.value}`;
        article.appendChild(p2);

        let div = document.createElement('div');
        div.classList.add('flex');

        let startButton = document.createElement('button');
        startButton.textContent = 'Start';
        startButton.classList.add('green');
        startButton.addEventListener('click', start);
        div.appendChild(startButton);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('red');
        deleteButton.addEventListener('click', delet);
        div.appendChild(deleteButton);

        article.appendChild(div);

        document.querySelector("body > main > div > section:nth-child(2) > div:nth-child(2)").appendChild(article);
    }

    let addButton = document.getElementById('add');
    addButton.type = "button";
    addButton.addEventListener('click', add);
}