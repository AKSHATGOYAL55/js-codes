// let user = new Object()  //Constructor or Singleton

// let user2 = {            //Non sngleton

// }

// console.log(user)
// console.log(user2)

// --------------------------------//--------------------------------------------------------------------

// let Employee = {

// }

// Employee.id = "234"
// Employee.Name = "Akshat"

// console.log(Employee)
// console.log(Employee.hasOwnProperty("id"))            //hasOwnProperty Method

// ----------------------------------------------------------------------


let Obj1 = {
    name : "akshat",
}


let Obj2 = {
    name2 : "Ayush",
}

let newObj = {...Obj1,...Obj2}   //spread operator 
// console.log(newObj)

// --------------------------------------------------------------------------------------


let Cars = {
    name : "ferrari"
}

let otherCar = {
    name2 : "lemborgini"
}

let x = Object.assign({},Cars,otherCar)     //{ } must write curly bracket because all data store in empty object
console.log(x)

console.log(Cars === x)  //false . beacuse of curly brackets in line no 48

// --------------------------------------------------------------------------------------

let Player = {
    name : "Dhoni",
}

console.log(Object.values(Player))    //output is form in Array
console.log(Player)                   //output is form in object

// -----------------------------------------------------------------------------------