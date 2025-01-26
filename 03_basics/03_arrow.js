// --------------------function inside object then access data to this keyword 

let newObj = {
    name : "akshat",
    work : "frontend developer",

    neTwo : function(){                 //function

        console.log(`the name of user is ${this.name} work is ${this.work}`)           //this.keyword
    }                                                 // access data because scope inside scope .
    
}

// newObj.neTwo()

// --------------------------------------------------------------------

let obj = {                                  //outside data 
    name : "ayush jain",
    work : "Bussinessman",                //this method means - only access when data in current scope .
}

function userDetails(){

    name ="Lucky Lamboo"                         //data inside scope (current data)
    work = "Frontend"
    return `the name of user is ${this.name} and work is ${this.work}`
}

// console.log(userDetails())


// --------------------------------------------------------------------------------------

let funn = function () {                 //Normal function

}

let funNames = () =>{               //Arrow Function

}


// also implicite and explicite function  => implicite (one line code no use of curly bracels and return ) , explicite (use curly bracels and return).

let arrow = ()=>{name : "akshat"}
console.log(arrow())                         //undefined


let arrow2 = ()=>({name : "akshat"})          //(wrap in parathesis ) smoothly run access object in implicite arrow function.
console.log(arrow2())                         
