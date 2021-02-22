function solve() {

   function archive(event) {
      let article = event.target.parentElement.parentElement;
      article.remove();

      let li = document.createElement('li');
      li.textContent = article.children[0].textContent;

      document.querySelector("body > div > div > aside > section.archive-section > ol").appendChild(li);

      let sortedList = Array.from(document.querySelector("body > div > div > aside > section.archive-section > ol").children);

      for (let child of sortedList) {
         child.remove();
      }

      sortedList.sort((a, b) => a.textContent.localeCompare(b.textContent))

      for (let child of sortedList) {
         document.querySelector("body > div > div > aside > section.archive-section > ol").appendChild(child);
      }
   }

   function delet(event) {
      event.target.parentElement.parentElement.remove();
   }

   function create() {
      let author = document.getElementById('creator');
      let title = document.getElementById('title');
      let category = document.getElementById('category');
      let content = document.getElementById('content');

      if (author.value == '' || title.value == '' || category.value == '' || content.value == '') return;

      let article = document.createElement('article');

      let h1 = document.createElement('h1');
      h1.textContent = title.value;
      article.appendChild(h1);

      let p1 = document.createElement('p');
      p1.textContent = 'Category:';
      let p1content = document.createElement('strong');
      p1content.textContent = category.value;
      p1.appendChild(p1content);
      article.appendChild(p1);


      let p2 = document.createElement('p');
      p2.textContent = 'Creator:';
      let p2content = document.createElement('strong');
      p2content.textContent = author.value;
      p2.appendChild(p2content);
      article.appendChild(p2);

      let p3 = document.createElement('p');
      p3.textContent = content.value;
      article.appendChild(p3);

      let div = document.createElement('div');
      div.classList.add('buttons');

      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('delete');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', delet);
      div.appendChild(deleteBtn);

      let archiveBtn = document.createElement('button');
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');
      archiveBtn.textContent = 'Archive';
      archiveBtn.addEventListener('click', archive);
      div.appendChild(archiveBtn);

      article.appendChild(div);

      document.querySelector("body > div > div > main > section").appendChild(article);
   }

   let createButton = document.getElementsByClassName('create btn')[0];
   createButton.type = 'button';
   createButton.addEventListener('click', create);
}


