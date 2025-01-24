let Emp = {
    name : "Akshat",
    age : 24,
    isActive : true,
    email : "ak1151goyal@gmail.com",
    "emp address" : "Janta colony",
    Salary : "4 Crore"
}

// console.log(Emp.emp address) ----------wrong method 
// console.log(Emp["emp address"]) //----------right method


// {Interview} => if access symbol you have to rigth code this type

let name = Symbol("")                 //first declare

let Emp2 = {
    [name] :"akshat",               //wrape key in [""]
}

// console.log(Emp2[name])                 // then log name in squarebracket followed by ""
// console.log(typeof (Emp2["name"]))
// console.log(Emp2)


let email = Symbol("email")

let user = {
    name : "akshat goyal",
    [email] : "akshat@google.com"
}
let user2 = {
    name : "akshat goyal",
    email : "akshat@google.com"
}

// console.log(user[email])
// console.log(user["name"])

// Object.freeze(user)

user.email = "akshat@microsoft.com"
// console.log(user[email])

user.greeting = function(){
    console.log("Hello js")
}

user2.greeting = function(){
    console.log(`user name is ${this.name}`) //kisi object ko access krna ho function meh
}

console.log(user.greeting())
console.log(user2.greeting())

