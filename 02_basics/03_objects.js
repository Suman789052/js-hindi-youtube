// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Suman",
    "full name": "Suman Chowdhury",
    [mySym]: "myKey1",
    age: 18,
    location: "Kolkata",
    email: "suman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "suman@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "suman@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
