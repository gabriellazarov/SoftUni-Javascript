function subtract() {
    const first = document.getElementById('firstNumber').value;
    const second = document.getElementById('secondNumber').value;
    const answer = Number(first) - Number(second);
    document.getElementById('result').textContent = answer;
}