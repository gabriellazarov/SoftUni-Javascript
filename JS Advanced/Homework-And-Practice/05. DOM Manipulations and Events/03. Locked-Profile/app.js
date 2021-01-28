function lockedProfile() {
    function onClick(event) {
        if (event.target.parentElement.children[4].checked) {
            if (event.target.nodeName == "BUTTON") {
                if (event.target.textContent == "Show more") {
                    event.target.parentElement.children[9].style.display = 'block';
                    event.target.textContent = "Hide it";
                } else {
                    event.target.parentElement.children[9].style.display = 'none';
                    event.target.textContent = "Show more";
                }
            }
        }
    }
    document.getElementById('main').addEventListener('click', onClick);
}