function search() {
   let list = [...document.getElementsByTagName('li')];
   let query = document.getElementById('searchText').value;
   console.log(query);
   let br = 0;
   for (let el of list) {
      if (el.textContent.includes(query)) {
         el.style.textDecoration = "underline";
         el.style.fontWeight = "bold";
         br++;
      }
   }
   document.getElementById('result').textContent = br + " matches found";
}
