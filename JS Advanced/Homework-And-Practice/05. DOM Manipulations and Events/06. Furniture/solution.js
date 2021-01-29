function solve() {

  function generate() {
    const products = JSON.parse(document.querySelector('#exercise > textarea:nth-child(2)').value);
    for (let item of products) {
      let newElement = document.createElement('tr');
      let td1 = document.createElement('td');
      let image = document.createElement('img');
      image.src = item.img;
      td1.appendChild(image);
      newElement.appendChild(td1);

      let td2 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = item.name;
      td2.appendChild(p2);
      newElement.appendChild(td2);

      let td3 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = Number(item.price);
      td3.appendChild(p3);
      newElement.appendChild(td3);

      let td4 = document.createElement('td');
      let p4 = document.createElement('p');
      p4.textContent = Number(item.decFactor);
      td4.appendChild(p4);
      newElement.appendChild(td4);

      let td5 = document.createElement('td');
      let check = document.createElement('input');
      check.type = 'checkbox';
      td5.appendChild(check);
      newElement.appendChild(td5);

      document.querySelector('#exercise > div > div > div > div > table > tbody').appendChild(newElement);
    }
  }


  function buy() {
    const items = Array.from(document.querySelector('#exercise > div > div > div > div > table > tbody').children);
    let names = 'Bought furniture: ';
    let totalPrice = 0;
    let avgDecorationFactor = 0;
    let br = 0;
    for (let item of items) {
      if (item.children[4].children[0].checked) {
        names += item.children[1].children[0].textContent + ', ';
        totalPrice += Number(item.children[2].textContent);
        avgDecorationFactor += Number(item.children[3].textContent);
        br++;
      }
    }
    names = names.slice(0,-2);
    document.querySelector('#exercise > textarea:nth-child(5)').textContent = names + '\n' + `Total price: ${totalPrice.toFixed(2)}` + '\n' + `Average decoration factor: ${avgDecorationFactor / br}`;
  }


  document.querySelector('#exercise > button:nth-child(3)').addEventListener('click', generate);
  document.querySelector('#exercise > button:nth-child(6)').addEventListener('click', buy);
}