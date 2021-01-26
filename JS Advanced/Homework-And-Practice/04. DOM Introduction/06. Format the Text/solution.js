function solve() {
  let text = document.getElementById('input').value;
  text += ' ';
  text = text.split('. ').filter(a => {
    if (a.length > 0) return 1;
    else return 0;
  })
  let paragraph = '';
  for (let i = 0; i < text.length; i++) {
    paragraph += text[i] + '. ';
    if ((i + 1) % 3 == 0 || i == text.length - 1) {
      let node = document.createElement("p");
      let textNode = document.createTextNode(paragraph);
      node.appendChild(textNode);
      document.getElementById('output').appendChild(node);
      paragraph = '';
    }
  }
}
