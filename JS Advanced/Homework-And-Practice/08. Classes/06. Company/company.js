class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (name == '' || name == null || name == undefined || salary == '' || salary == null || salary == undefined || position == '' || position == null || position == undefined || department == '' || department == null || department == undefined || salary < 0) {
            throw new Error('Invalid input!');
        } else {
            if (this.departments[department] == undefined) {
                this.departments[department] = {};
            }
            this.departments[department][name] = {};
            this.departments[department][name].salary = salary;
            this.departments[department][name].position = position;
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    }
    bestDepartment() {
        let check = ['', 0]
        for (let key of Object.keys(this.departments)) {
            let average = 0;
            let br = 0;
            for (let employee in this.departments[key]) {
                average += this.departments[key][employee].salary;
                br++;
            }
            average = average / br;
            if (average > check[1]) {
                check[1] = average;
                check[0] = key;
            }
        }
        let answer = `Best Department is: ${check[0]}\nAverage salary: ${check[1].toFixed(2)}`;
        //     for (let employee in this.departments[check[0]]) {
        //         answer += `${employee} ${this.departments[check[0]][employee].salary} ${this.departments[check[0]][employee].position}\n`;
        // }
        let sorted = [];
        for (let key of Object.keys(this.departments[check[0]])) {
            sorted.push([key, this.departments[check[0]][key].salary, this.departments[check[0]][key].position]);
        }
        sorted.sort((a, b) => {
            if (a[1] > b[1]) return -1;
            else if (a[1] < b[1]) return 1;
            else return a[0].localeCompare(b[0]);
        })
        for (let employee of sorted) {
            answer += `\n${employee[0]} ${employee[1]} ${employee[2]}`;
        }
        return answer;
    }
}



let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
