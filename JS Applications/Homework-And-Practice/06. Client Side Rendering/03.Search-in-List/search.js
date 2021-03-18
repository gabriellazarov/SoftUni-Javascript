import { towns } from './towns.js';
import { render, html } from '../../node_modules/lit-html/lit-html.js';

const townTemplate = (data) => html`
<ul>
   ${data.map(([town, match]) => html`
   <li class=${match ? "active" : "" }>${town}</li>
   `)}
</ul>`;

function renderTowns() {
   const criteria = document.getElementById('searchText').value.toLowerCase();
   let loadTowns;

   if (criteria != '') {
      loadTowns = towns.map(a => a.toLowerCase().includes(criteria) ? [a, true] : [a, false]);
   } else {
      loadTowns = towns.map(a => [a, false]);
   }
   render(townTemplate(loadTowns), body);
}



const body = document.getElementById('towns');
document.querySelector("body > article > button").addEventListener('click', renderTowns);

renderTowns();


