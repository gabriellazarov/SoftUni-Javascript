function addListeners() {

    let body;
    let id;

    async function loadPosts() {
        let topicsDiv = document.querySelector("body > div > main > div.topic-title");
        topicsDiv.innerHTML = '';

        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
        const topics = await response.json();

        Object.entries(topics).forEach(a => {
            let html = `<div class="topic-container" id=${a[0]}>
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <a class="normal">
                        <h2>${a[1].topic}</h2>
                    </a>
                    <div class="columns">
                        <div>
                            <p>Date: <Date>${a[1].time}</Date></p>
                            <div class="nick-name">
                                <p>Username: <span>${a[1].username}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
            topicsDiv.innerHTML += html;
        })
        Array.from(topicsDiv.children).forEach(a => a.addEventListener('click', comment));
    }

    async function newTopic(event) {
        event.preventDefault();

        const formData = new FormData(event.target)

        const topic = formData.get('topicName');
        const username = formData.get('username');
        const text = formData.get('postText');

        if (topic == '' || username == '' || text == '') return alert('All fields are required!');

        const date = new Date()
        const time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}Z`;


        await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic, username, text, time })
        })

        clearSubmission();

        loadPosts();
    }

    function comment(event) {
        body = document.querySelector("body > div > main");

        let idFinder = event.target;
        while (idFinder.id == '') {
            idFinder = idFinder.parentElement;
        }
        id = idFinder.id;

        commentLoad();

    }

    async function commentLoad() {

        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + id);
        const data = await response.json();


        document.querySelector("body > div").innerHTML = `<div class="theme-content">
        <div class="theme-title">
            <div class="theme-name-wrapper">
                <div class="theme-name">
                    <h2>${data.topic}</h2>
                    <p>Date: <time>${data.time}</time></p>
                </div>
            </div>
        </div>
        <div id="commentInsert">
             <div class="comment">
                <header class="header">
                     <p><span>${data.username}</span> posted on <time>${data.time}</time></p>
                 </header>
                <div class="comment-main">
                    <div class="userdetails">
                       <img src="./static/profile.png" alt="avatar">
                    </div>
                    <div class="post-content">
                    <p>${data.text}</p>
                    </div>
                </div>
             </div>
        </div>
        <div class="answer-comment">
            <p><span>currentUser</span> comment:</p>
            <div class="answer">
                <form>
                    <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                    <div>
                        <label for="username">Username <span class="red">*</span></label>
                        <input type="text" name="username" id="username">
                    </div>
                    <button>Post</button>
                </form>
            </div>
        </div>`;

        if (data['comments'] != undefined) {

            Object.entries(data.comments).forEach(a => {
                document.getElementById("commentInsert").innerHTML += `<div class="comment">
                <header class="header">
                    <p><span>${a[1].username}</span></p>
                </header>
                <div class="comment-main">
                    <div class="userdetails">
                        <img src="./static/profile.png" alt="avatar">
                    </div>
                    <div class="post-content">
                        <p> ${a[1].content}</p>
                    </div>
                </div>
                </div>
            `
            })
        }

        document.querySelector("body > div > div > div.answer-comment > div > form > button").addEventListener('click', submit);
    }

    async function submit(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const content = document.getElementById('comment').value;

        if (username == '' || content == '') return alert('All fields are required!');
        fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + id + '/comments', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, content })
        })
        commentLoad();
    }

    function goHome() {
        if (body != undefined) {
            document.querySelector("body > div").innerHTML = '';
            document.querySelector("body > div").appendChild(body);
        }
    }

    function clearSubmission() {
        document.querySelector("#topicName").value = '';
        document.querySelector("#username").value = '';
        document.querySelector("#postText").value = '';
    }

    function cancelSubmission(event) {
        event.preventDefault();
        clearSubmission();
    }

    loadPosts();

    document.querySelector("body > div > main > div.new-topic-border > form").addEventListener('submit', newTopic);

    document.querySelector("body > header > nav > ul > li > a").addEventListener('click', goHome)

    document.querySelector("body > div > main > div.new-topic-border > form > div.new-topic-buttons > button.cancel").addEventListener('click', cancelSubmission);
}

addListeners();