function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs>textarea').value);
      input = input.map(a => a.split(' - '));
      for (let el of input) {
         el[1] = el[1].split(', ');
      }
      const restaurants = {};
      for (let el of input) {
         if (restaurants[el[0]] == undefined) {
            restaurants[el[0]] = {};
            for (let worker of el[1]) {
               worker = worker.split(' ');
               restaurants[el[0]][worker[0]] = Number(worker[1]);
            }
         } else {
            for (let worker of el[1]) {
               worker = worker.split(' ');
               restaurants[el[0]][worker[0]] = Number(worker[1]);
            }
         }
      }
      let keys = Object.keys(restaurants);
      for (let key of keys) {
         let values = Object.values(restaurants[key]);
         let max = 0;
         let average = 0;
         for (let value of values) {
            average += value;
            if (value > max) max = value;
         }
         average /= values.length;
         restaurants[key]["average"] = average;
         restaurants[key]["max"] = max;
         console.log(values);
      }
      let best = keys[0];
      for (let i = 1; i < keys.length; i++) {
         if (restaurants[keys[i]].average > restaurants[best].average) {
            best = keys[i];
         }
      }
      let workersOutput = '';
      let outputKeys = Object.keys(restaurants[best]);
      outputKeys = outputKeys.filter(a => a != "max" && a != "average");
      for (let key of outputKeys) {
         workersOutput += `Name: ${key} With Salary: ${restaurants[best][key]} `;
      }


      document.querySelector('#bestRestaurant p').textContent = `Name: ${best} Average Salary: ${(restaurants[best].average).toFixed(2)} Best Salary: ${(restaurants[best].max).toFixed(2)}`;
      document.querySelector('#workers p').textContent = workersOutput;
   }
}