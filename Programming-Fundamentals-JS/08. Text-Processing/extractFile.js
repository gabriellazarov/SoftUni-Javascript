function solve(input) {
    let temp = input.split('\\');
    let file = temp[temp.length - 1];
    console.log(`File name: ${file.slice(0, file.lastIndexOf('.'))}`);
    console.log(`File extension: ${file.slice(file.lastIndexOf('.') + 1)}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx')