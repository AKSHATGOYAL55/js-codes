function Akshat(num1 , num2){

    console.log("Hello everyone")
    // console.log(num1 + num2)
}

// Akshat(5,4)

// -----------------------------------------------------------------

function Akshat1(num1 , num2){

    return num1 + num2
} 

// let newOne =  Akshat1(5,4)           //both type are same 
// console.log(newOne)

// console.log(Akshat1(4,7))            //but use this type 

// ----------------------------------------------------------------------------------

// function userActive(Akshat ){

//     if(!Akshat){
//         return `${Akshat} is not Active now`
//     }
//     return `${Akshat} is active `
// }

// console.log(userActive("Aayush"))

// -----------------------------Example function ---------------------------------------------------

function Dhoni_isplaying(fn ){
    if(!fn){
        return `Please call ${fn}`
    }else{
        return `yeah ${fn} is back in the field`
    }
}

// console.log(Dhoni_isplaying("Ms Dhoni"))

// ----------------------------------------------------------------------------------


function userCart(...Cart){     //spread operator
    return(Cart)
}

// console.log(userCart(200,300,400))                 //Access Array data

// ---------------------------------------

let user = {                                 //Accessing object
    name : "Akshat Goyal",
    Role : "frontend",
    Salary : 5000000
}

function userEmp(unk){
    // return `user name is ${unk.name} he's role is ${unk.Role}`   
}

console.log(userEmp({                 //first type
    name : "Ayush Jain",
    Role : "Bussinessman"
}))

// console.log(userEmp(user))            //second type 


// ---------------------------------------------------------

function useEmployee(getArr){                //access Array
    return getArr[1]
}

let Arrays = [20,40,60]
// console.log(useEmployee(Arrays))

// ---------------------Exercise Function Array Accessing ----------------------------------------


let CustomArray = [1,5,9]

function AccessArray(ji){
    return ji[2]
}

console.log(AccessArray(CustomArray))

// ------------------------------------------------