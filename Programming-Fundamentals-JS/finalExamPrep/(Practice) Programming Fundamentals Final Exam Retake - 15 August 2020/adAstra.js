function solve(input) {
  let regex = /([#|])([A-Za-z ]+)\1([0-9]{2}\/[0-9]{2}\/[0-9]+)\1([0-9]{1,5})\1/g;
  let match = regex.exec(input);
  let totalCalories = 0;
  while (match != null) {
    totalCalories += Number(match[4]);
    match = regex.exec(input);
  }
  console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
  let match2 = regex.exec(input);
  while (match2 != null) {
    console.log(`Item: ${match2[2]}, Best before: ${match2[3]}, Nutrition: ${match2[4]} `);
    match2 = regex.exec(input);
  }
}

solve([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);

solve([
  '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
]);