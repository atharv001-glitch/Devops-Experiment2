const projectName: string = "DevOps Experiment 2";
const language: string = "TypeScript";
const numbers: number[] = [10, 20, 30, 40, 50];

const sum: number = numbers.reduce(
    (total, number) => total + number,
    0
);

console.log(projectName);
console.log(`Language: ${language}`);
console.log("Topic: Git and GitHub Version Control");
console.log("Numbers:", numbers);
console.log("Sum:", sum);
