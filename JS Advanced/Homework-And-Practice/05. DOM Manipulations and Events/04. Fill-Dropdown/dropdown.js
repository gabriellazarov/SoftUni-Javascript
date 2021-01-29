function addItem() {
    const text = document.querySelector('#newItemText');
    const value = document.querySelector('#newItemValue');
    const newElement = document.createElement('option');
    newElement.textContent = text.value;
    newElement.value = value.value;
    document.getElementById('menu').appendChild(newElement);
    text.value = '';
    value.value = '';
}