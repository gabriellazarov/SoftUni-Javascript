function generateReport() {
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let result = [];
    for (let row of rows) {
        let columns = Array.from(row.children);
        columns = columns.map(a => a.textContent);
        let temp = {};
        let info = Array.from(document.querySelector("body > main > table > thead > tr").children);
        for (let i = 0; i < info.length; i++) {
            if (info[i].children[0].checked) {
                temp[Array.from(info[i].children)[0].name] = columns[i];
            }
        }

        if (Object.keys(temp).length != 0) {
            result.push(temp);
        }
    }
    result = JSON.stringify(result);
    document.getElementById('output').textContent = result;
}