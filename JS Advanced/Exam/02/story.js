class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this.likes = [];
    }

    set likes(value) {
        this._likes = value;
    }
    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`
        }
        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (this.creator == username) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (this._likes.includes(username) == 0) {
            throw new Error("You can't dislike this story!");
        }
        this._likes.splice(this._likes.indexOf(username), 1);
        return `${username} disliked ${this.title}`
    }

    comment(...params) {
        let username = params[0];
        let content = params[1];
        let id = params[2];

        if (id == undefined || this.comments.length < id || id < 0) {
            this.comments.push({ id: this.comments.length + 1, username: username, content: content, replies: [] });
            return `${username} commented on ${this.title}`;
        }

        if (this.comments.length >= id) {
            this.comments[id - 1].replies.push({ id: `${id}.${this.comments[id - 1].replies.length + 1}`, username: username, content: content });
            return 'You replied successfully';
        }
    }

    toString(sortingType) {
        if (sortingType == 'desc') {
            this.comments.sort((a, b) => b.id - a.id);
            for (let comment of this.comments) {
                comment.replies.sort((a, b) => Number(b.id) - Number(a.id));
            }
        } else if (sortingType == 'asc') {
            this.comments.sort((a, b) => a.id - b.id);
            for (let comment of this.comments) {
                comment.replies.sort((a, b) => Number(a.id) - Number(b.id));
            }
        } else if (sortingType == 'username') {
            this.comments.sort((a, b) => a.username.localeCompare(b.username));
            for (let comment of this.comments) {
                comment.replies.sort((a, b) => a.username.localeCompare(b.username));
            }
        }

        let output = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`;

        for (let comment of this.comments) {
            output += `\n-- ${comment.id}. ${comment.username}: ${comment.content}`;
            for (let reply of comment.replies) {
                output += `\n--- ${reply.id}. ${reply.username}: ${reply.content}`;
            }
        }
        return output;
    }
}

let art = new Story("My Story", "Anny");
console.log(art.like("John"));
//assert.equal(art.like("John"), "John liked My Story!");
console.log(art.likes);
//assert.equal(art.likes, "John likes this story!");
//console.log(art.dislike("Sally"));
//assert.throw(()=>art.dislike("Sally"), "You can't dislike this story!");
console.log(art.like("Ivan"));
//assert.equal(art.like("Ivan"),"Ivan liked My Story!");
console.log(art.like("Steven"));
//assert.equal(art.like("Steven"), "Steven liked My Story!");
console.log(art.likes);
//assert.equal(art.likes, "John and 2 others like this story!");
console.log(art.comment("Anny", "Some Content"));
//assert.equal(art.comment("Anny", "Some Content"),"Anny commented on My Story");
console.log(art.comment("Ammy", "New Content", 1));
//assert.equal(art.comment("Ammy", "New Content", 1),"You replied successfully");
console.log(art.comment("Zane", "Reply", 2));
//assert.equal(art.comment("Zane", "Reply", 2),"Zane commented on My Story");
console.log(art.comment("Jessy", "Nice :)"));
//assert.equal(art.comment("Jessy", "Nice :)"), "Jessy commented on My Story");
console.log(art.comment("SAmmy", "Reply@", 2));
//assert.equal(art.comment("SAmmy", "Reply@", 2), "You replied successfully");

