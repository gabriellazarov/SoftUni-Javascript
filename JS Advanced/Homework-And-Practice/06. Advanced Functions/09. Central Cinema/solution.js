function solve() {
    function clear(event) {
        let list = Array.from(event.target.parentElement.children[1].children)
        list.forEach(a => a.remove());
    }
    function remove(event) {
        event.target.parentElement.remove();
    }
    function archive(event) {
        if (event.target.parentElement.children[1].value != '' && Number(event.target.parentElement.children[1].value) > -1) {
            let li = document.createElement('li');

            let span = document.createElement('span');
            span.textContent = event.target.parentElement.parentElement.children[0].textContent;
            li.appendChild(span);

            let strong = document.createElement('strong');
            strong.textContent = `Total amount: ${(Number(event.target.parentElement.children[0].textContent) * Number(event.target.parentElement.children[1].value)).toFixed(2)}`;
            li.appendChild(strong);

            let button = document.createElement('button');
            button.textContent = 'Delete';
            button.addEventListener('click', remove);
            li.appendChild(button);

            document.querySelector('#archive ul').appendChild(li);
            event.target.parentElement.parentElement.remove();
        }
    }
    function onScreen(event) {
        let textBoxElements = event.target.parentElement.children;
        if (textBoxElements[0].value.length != 0) {
            if (textBoxElements[1].value.length != 0) {
                if (textBoxElements[2].value.length != 0 && Number(textBoxElements[2].value) > -1) {
                    let li = document.createElement('li');

                    let span = document.createElement('span');
                    span.textContent = textBoxElements[0].value;
                    li.appendChild(span);

                    let strong = document.createElement('strong');
                    strong.textContent = `Hall: ${textBoxElements[1].value}`;
                    li.appendChild(strong);

                    let div = document.createElement('div');

                    let divStrong = document.createElement('strong');
                    divStrong.textContent = Number(textBoxElements[2].value).toFixed(2);
                    div.appendChild(divStrong);

                    let divInput = document.createElement('input');
                    divInput.type = 'text';
                    divInput.placeholder = 'Tickets Sold';
                    div.appendChild(divInput);

                    let divButton = document.createElement('button');
                    divButton.textContent = 'Archive';
                    divButton.addEventListener('click', archive)
                    div.appendChild(divButton);

                    li.appendChild(div);

                    document.querySelector('#movies ul').appendChild(li);
                }
            }
        }
        textBoxElements[0].value = '';
        textBoxElements[1].value = '';
        textBoxElements[2].value = '';
    }
    document.querySelector('button').type = 'button';
    document.querySelector('button').addEventListener('click', onScreen);
    document.querySelector("#archive > button").addEventListener('click', clear);

}