type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};

let person: Person = {
    name: "Yusra",
    age: 19,
    isStudent: true
};

console.log(`Person Info: ${person.name} is ${person.age} years old. Is ${person.name} a student? ${person.isStudent ? 'Yes' : 'No'}.`);
