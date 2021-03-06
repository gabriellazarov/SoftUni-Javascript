function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts/';
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments/';

    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);

    document.getElementById('btnViewPost').addEventListener('click', viewPost);

    async function loadPosts() {
        let options = document.getElementById('posts');

        let response = await fetch(postsURL);
        let data = await response.json();

        for (let el in data) {
            let option = document.createElement('option');
            option.value = el;
            option.textContent = data[el].title;
            options.appendChild(option);
        }
    }

    async function viewPost() {
        let postTitle = document.getElementById('post-title');
        postTitle.textContent = '';
        let postBody = document.getElementById('post-body');
        postBody.innerHTML = '';
        let postComments = document.getElementById('post-comments');
        postComments.innerHTML = '';


        let option = document.getElementById('posts').value;

        const [postResponse, commentsResponse] = await Promise.all([
            fetch(postsURL + option),
            fetch(commentsURL)
        ])

        let postData = await postResponse.json();
        postTitle.textContent = postData.title;
        postBody.textContent = postData.body;

        let commentsData = await commentsResponse.json();
        for (let comment in commentsData) {
            if (commentsData[comment].postId == postData.id) {
                let li = document.createElement('li');
                li.id = commentsData[comment].id;
                li.textContent=commentsData[comment].text;

                postComments.append(li);
            }
        }

    }
}

attachEvents();