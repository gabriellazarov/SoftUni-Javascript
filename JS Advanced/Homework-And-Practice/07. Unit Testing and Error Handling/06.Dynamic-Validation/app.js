function validate() {
    function change(event) {
        let regex = /^[a-z]+@[a-z]+\.[a-z]+$/m;
        if (regex.test(event.target.value) == false) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error')
        }
    }

    document.querySelector("#email").addEventListener('change', change)
}