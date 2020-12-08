function dicc(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        arr[i] = JSON.parse(input[i]);
    }
    arr.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))
    for (let i = 0; i < arr.length; i++) {
        console.log('Term: ' + Object.keys(arr[i]) + ' => Definition: ' + Object.values(arr[i]));
    }
}


dicc([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])