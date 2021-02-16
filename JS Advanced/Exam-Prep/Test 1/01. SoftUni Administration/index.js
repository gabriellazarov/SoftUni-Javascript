function solve() {
    let addButton = document.querySelector("body > main > section.admin-view.section-view > div > div > form > div:nth-child(4) > button");
    addButton.type = 'button';

    function deleteClick(event) {
        let module = event.target.parentElement.parentElement.parentElement;
        event.target.parentElement.parentElement.remove();
        if (module.children.length == 1) module.remove();
    }



    function addClick() {
        let lectureName = document.querySelector("body > main > section.admin-view.section-view > div > div > form > div:nth-child(1) > input[type=text]");
        let date = document.querySelector("body > main > section.admin-view.section-view > div > div > form > div:nth-child(2) > input[type=datetime-local]");
        let module = document.querySelector("body > main > section.admin-view.section-view > div > div > form > div:nth-child(3) > select");

        if (module.selectedIndex != 0 && date.value != '' && lectureName.value != '') {
            let newNode = document.createElement('ul');

            let li = document.createElement('li');
            li.classList.add('flex');

            let h4 = document.createElement('h4');
            let formatedDate = date.value.split('T');
            formatedDate[0] = formatedDate[0].split('-');
            formatedDate[0] = formatedDate[0].join('/');
            formatedDate = formatedDate.join(' - ');
            h4.textContent = `${lectureName.value} - ${formatedDate}`
            li.appendChild(h4);

            let delButton = document.createElement('button');
            delButton.type = 'button';
            delButton.classList.add('red');
            delButton.textContent = 'Del';
            delButton.addEventListener('click', deleteClick);
            li.appendChild(delButton);

            newNode.appendChild(li);

            let trainings = document.querySelector("body > main > section.user-view.section-view > div");

            let moduleExists = 0;
            for (let child of trainings.children) {
                if (child.children[0].textContent == (module.value.toUpperCase() + '-MODULE')) {
                    moduleExists = child;
                    break;
                }
            }

            if (moduleExists != 0) {
                let lectureList = moduleExists.children;

                let flag = true;

                for (let i = lectureList.length - 1; i > 0; i--) {
                    let childDate = lectureList[i].children[0].children[0].textContent.split(' - ')[1];
                    if (childDate.localeCompare(formatedDate) < 0) {
                        lectureList[i].after(newNode);
                        flag = false;
                        break;
                    }
                }

                if (flag) {
                    moduleExists.children[0].after(newNode);
                }

            } else {
                let div = document.createElement('div');
                div.classList.add('module');

                let h3 = document.createElement('h3');
                h3.textContent = module.value.toUpperCase() + '-MODULE';
                div.appendChild(h3);

                div.appendChild(newNode);

                trainings.appendChild(div);
            }
        }
    }

    addButton.addEventListener('click', addClick)
};

