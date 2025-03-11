const JsUser={
    name: "Abhishek",
    age: 23,
    loacation: "Patna",
    email: "abhishek@gmail.com"
}


console.log(JsUser.age);
console.log(JsUser["loacation"]);

JsUser.loacation="Jehanabad";
console.log(JsUser['loacation']);
Object.freeze(JsUser);

JsUser.age=24;

console.log(JsUser['age']);