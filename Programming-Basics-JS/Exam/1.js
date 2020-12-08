function solve(input, arg) {
    let students = Number(input);
    let problems = Number(arg);
    let submissions = students * Math.ceil(problems * 2.8) + students * Math.floor(problems / 3);
    console.log(`${Math.ceil(submissions/10)*5} KB needed`);
    console.log(submissions + " submissions");
}
solve(11, 7)