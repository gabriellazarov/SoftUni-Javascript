function create(words) {
   function onClick(event) {
      const target = event.target;
      target.children[0].style.display = '';
   }

   document.getElementById('content').addEventListener('click', onClick);
   for (let el of words) {
      const newDiv = document.createElement('div');
      const newParagraph = document.createElement('p');
      newParagraph.textContent = el;
      newParagraph.style.display = 'none';
      newDiv.appendChild(newParagraph);
      document.getElementById('content').appendChild(newDiv);
   }
}