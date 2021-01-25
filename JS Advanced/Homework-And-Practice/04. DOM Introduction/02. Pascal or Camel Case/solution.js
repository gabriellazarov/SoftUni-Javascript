function solve() {
  let input = document.getElementById('text').value;
  input = input.toLowerCase().split(' ');
  let req = document.getElementById('naming-convention').value;
  let output = '';
  if (req == 'Camel Case') {
    output = input[0];
    for (let i = 1; i < input.length; i++) {
      let firstLetter = input[i][0].toUpperCase();
      let theRest = input[i].slice(1);
      output += firstLetter + theRest;
    }
  } else if (req == 'Pascal Case') {
    for (let i = 0; i < input.length; i++) {
      let firstLetter = input[i][0].toUpperCase();
      let theRest = input[i].slice(1);
      output += firstLetter + theRest;
    }
  } else {
    output = "Error!";
  }
  document.getElementById('result').innerHTML = output;
}