import { render, html } from '../../node_modules/lit-html/lit-html.js';

function renderRows() {
   const criteria = document.getElementById('searchField');
   let renderData;

   if (criteria.value != '') {
      renderData = data.map(a => {
         let isMatching = false;

         let attributes = Object.values(a);
         attributes[0] += ' ' + attributes[1];
         attributes.splice(1, 1);

         for (let i = 0; i < 3; i++) {
            if (attributes[i].toLowerCase().includes(criteria.value.toLowerCase())) {
               isMatching = true;
               break;
            }
         }
         return isMatching ? [a, true] : [a, false];
      })
   } else {
      renderData = data.map(a => [a, false]);
   }

   criteria.value = '';
   
   renderData = renderData.map(rowTemplate);
   render(renderData, table);
}


const data = Object.values(await (await fetch('http://localhost:3030/jsonstore/advanced/table')).json());
document.querySelector('#searchBtn').addEventListener('click', renderRows);
const table = document.getElementById('table');

const rowTemplate = ([data, match]) => html`
<tr class=${match ? "select" : '' }>
   <td>${data.firstName} ${data.lastName}</td>
   <td>${data.email}</td>
   <td>${data.course}</td>
</tr>`;

renderRows();