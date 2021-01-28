function attachEventsListeners() {
    function onClick(event) {
        const button = event.target;
        if (button.value == "Convert") {
            const time = Number(button.parentElement.children[1].value);
            if (button.parentElement.children[0].textContent == 'Days: ') {
                document.querySelector('#hours').value = time * 24;
                document.querySelector('#minutes').value = time * 24 * 60;
                document.querySelector('#seconds').value = time * 24 * 60 * 60;
            } else if (button.parentElement.children[0].textContent == 'Hours: ') {
                document.querySelector('#days').value = time / 24;
                document.querySelector('#minutes').value = time * 60;
                document.querySelector('#seconds').value = time * 60 * 60;
            } else if (button.parentElement.children[0].textContent == 'Minutes: ') {
                document.querySelector('#days').value = time / (24 * 60);
                document.querySelector('#hours').value = time / 60;
                document.querySelector('#seconds').value = time * 60;
            } else {
                document.querySelector('#days').value = time / (24 * 60 * 60);
                document.querySelector('#hours').value = time / (60 * 60);
                document.querySelector('#minutes').value = time / 60;
            }
        }
    }
    document.querySelector('body main').addEventListener('click', onClick);
}