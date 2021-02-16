
function solve() {
    let addButton = document.querySelector("body > main > section.admin-view.section-view > div > div > form > div:nth-child(4) > button");
    addButton.type = 'button';

    function deleteClick(event) {
        let module = event.target.parentElement.parentElement.parentElement;
        event.target.parentElement.remove();
        if (module.children[1].children.length == 0) module.remove();
    }



    function addClick() {
        let lectureName = document.querySelector("body > main > section.admin-view.section-view > div > div > form > div:nth-child(1) > input[type=text]");
        let date = document.querySelector("body > main > section.admin-view.section-view > div > div > form > div:nth-child(2) > input[type=datetime-local]");
        let module = document.querySelector("body > main > section.admin-view.section-view > div > div > form > div:nth-child(3) > select");

        if (module.selectedIndex != 0 && date.value != '' && lectureName.value != '') {
            let li = document.createElement('li');
            li.classList.add('flex');

            let h4 = document.createElement('h4');
            let formatedDate = date.value.split('T');
            formatedDate[0] = formatedDate[0].split('-');
            formatedDate[0] = formatedDate[0].join('/');
            formatedDate = formatedDate.join(' - ');
            h4.textContent = `${lectureName.value} - ${formatedDate}`;
            li.appendChild(h4);

            let delButton = document.createElement('button');
            delButton.type = 'button';
            delButton.classList.add('red');
            delButton.textContent = 'Del';
            delButton.addEventListener('click', deleteClick);
            li.appendChild(delButton);


            let trainings = document.querySelector("body > main > section.user-view.section-view > div");

            let moduleExists = 0;
            for (let child of Array.from(trainings.children)) {
                if (child.children[0].textContent == (module.value.toUpperCase() + '-MODULE')) {
                    moduleExists = child;
                    break;
                }
            }

            if (moduleExists != 0) {
                moduleExists.children[1].appendChild(li);
                let toSort = Array.from(moduleExists.children[1].children);
                for (let child of Array.from(moduleExists.children[1].children)) {
                    child.remove();
                }

                toSort.sort((a, b) => a.children[0].textContent.split(' - ')[1].localeCompare(b.children[0].textContent.split(' - ')[1]));
                for (let child of toSort) {
                    moduleExists.children[1].appendChild(child);
                }
            } else {
                let div = document.createElement('div');
                div.classList.add('module');

                let h3 = document.createElement('h3');
                h3.textContent = module.value.toUpperCase() + '-MODULE';
                div.appendChild(h3);

                let ul = document.createElement('ul');
                ul.appendChild(li);

                div.appendChild(ul);

                trainings.appendChild(div);
            }
        }
    }

    addButton.addEventListener('click', addClick)
}

