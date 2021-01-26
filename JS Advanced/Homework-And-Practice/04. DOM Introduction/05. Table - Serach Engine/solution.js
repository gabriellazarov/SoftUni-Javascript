function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let query = document.getElementById('searchField').value;
      document.getElementById('searchField').value = '';
      let table = [...document.querySelectorAll('table tbody tr')];
      for (let el of table) {
         let children = Array.from(el.children);
         for (let child of children) {
            if (child.textContent.toLowerCase().includes(query.toLowerCase())) {
               el.classList.add('select')
               break;
            }
            else {
               el.classList.remove('select')
            }
         }
      }
   }
}