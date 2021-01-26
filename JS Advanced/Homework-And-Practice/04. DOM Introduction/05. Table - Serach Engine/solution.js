function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //remove select class
      const selected = [...document.getElementsByClassName('select')];
      selected.forEach(a => a.removeAttribute('class'));
      //save query to variable
      let query = document.getElementById('searchField').value;
      //remove the query text
      document.getElementById('searchField').value = '';
      //search for the query within the rable and add class tag where it matches
      let table = [...document.querySelectorAll('table tbody tr')];
      for (let el of table) {
         let children = [...el.children];
         for (let child of children) {
            if (child.textContent.includes(query)) {
               el.classList.add('select')
               break;
            }
         }
      }
   }
}