function encodeAndDecodeMessages() {
    function onClick1(event) {
        let text = event.target.parentElement.children[1].value.split('');
        event.target.parentElement.children[1].value = '';
        for (let i = 0; i < text.length; i++) {
            text[i] = String.fromCharCode(text[i].charCodeAt(0) + 1);
        }
        document.querySelector('#main > div:nth-child(2) > textarea').textContent = text.join('');
    }
    function onClick2(event) {
        let text = event.target.parentElement.children[1].value.split('');
        for (let i = 0; i < text.length; i++) {
            text[i] = String.fromCharCode(text[i].charCodeAt(0) - 1);
        }
        document.querySelector('#main > div:nth-child(2) > textarea').textContent = text.join('');
    }
    document.querySelector('#main > div:nth-child(1) > button').addEventListener('click', onClick1);
    document.querySelector('#main > div:nth-child(2) > button').addEventListener('click', onClick2);
}