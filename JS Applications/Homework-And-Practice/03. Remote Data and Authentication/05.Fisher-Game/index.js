function attachEvents() {



    async function load() {
        const response = await fetch('http://localhost:3030/data/catches');
        const data = await response.json();

        document.getElementById('catches').innerHTML = '';

        data.forEach(a => {
            const div = document.createElement('div');
            div.classList.add('catch');
            div.id = a._ownerId;
            div.innerHTML = `  <label>Angler</label>
                    <input type="text" class="angler" value="${a.angler}" />
                    <hr>
                    <label>Weight</label>
                    <input type="number" class="weight" value="${a.weight}" />
                    <hr>
                    <label>Species</label>
                    <input type="text" class="species" value="${a.species}" />
                    <hr>
                    <label>Location</label>
                    <input type="text" class="location" value="${a.location}" />
                    <hr>
                    <label>Bait</label>
                    <input type="text" class="bait" value="${a.bait}" />
                    <hr>
                    <label>Capture Time</label>
                    <input type="number" class="captureTime" value="${a.captureTime}"/>
                    <hr>
                    <button disabled class="update">Update</button>
                    <button disabled class="delete">Delete</button> `

            document.getElementById('catches').appendChild(div);
        })
    }


    document.getElementsByClassName('load')[0].addEventListener('click', load);
    document.getElementById('addForm').addEventListener('submit', addCatch);
}

attachEvents();

