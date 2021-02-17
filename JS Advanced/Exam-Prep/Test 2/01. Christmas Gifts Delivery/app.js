function solution() {

    function send(event) {
        let gift = event.target.parentElement;
        gift.remove();

        for (let el of Array.from(gift.children)) {
            el.remove();
        }

        document.getElementsByClassName('card')[2].children[1].appendChild(gift);
    }

    function discard(event) {
        let gift = event.target.parentElement;
        gift.remove();

        for (let el of Array.from(gift.children)) {
            el.remove();
        }

        document.getElementsByClassName('card')[3].children[1].appendChild(gift);
    }

    function addGift() {

        let inputField = document.getElementsByClassName('card')[0].children[1].children[0];
        if (inputField.value == '') return;

        let listOfGifts = document.getElementsByClassName('card')[1].children[1];

        let newGift = document.createElement('li');
        newGift.classList.add('gift');
        newGift.textContent = inputField.value;

        let sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.classList.add('sendButton');
        sendButton.addEventListener('click', send);
        newGift.appendChild(sendButton);

        let discardButton = document.createElement('button');
        discardButton.textContent = 'Discard';
        discardButton.classList.add('discardButton');
        discardButton.addEventListener('click', discard);
        newGift.appendChild(discardButton);

        listOfGifts.appendChild(newGift);

        let sortedGifts = Array.from(listOfGifts.children);
        for (let el of Array.from(listOfGifts.children)) {
            el.remove();
        }

        sortedGifts.sort((a, b) => a.textContent.localeCompare(b.textContent));

        for (let el of sortedGifts) {
            listOfGifts.appendChild(el);
        }

        inputField.value = '';
    }


    document.getElementsByClassName('card')[0].children[1].children[1].addEventListener('click', addGift);
}