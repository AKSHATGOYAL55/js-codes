
// let arr = [{},{},{}] => For in loop

// ---------------------------For of Loop (only array Not in object )-------------------------------

let arr = ["Asus", "Lenovo", "Dell" , "Hp" , "Macbook"]               //Array

for (const value of arr) {
    console.log(value)
}

let newObj = {                                                        //Object
    name : "Asus",
    type : "Lappi"
}

// for (const key of newObj){
//     // console.log(`key is ${key} object is ${newObj[key]}`)
// }

// -----------------------------For in (Both Array and object )--------------------------------------

let Arr = ["sktiman", "Batman" , "Spiderman", "Superman" , "hulk"]

for (const value in Arr){
    console.log(Arr[value])
}


let NewOne = {
    name : "Asus",
    Type : "Lappi"
}

// for (const key in NewOne){
//     // if (NewOne[key]== "Lappi"){
//     //     console.log("Laptop bolo yrr")
//     //     continue;
//     // }
//     if(key == "Type"){
//         console.log("yeh phir aa gya ")
//         continue;
//     }
//     console.log(`key "${key}" value is "${NewOne[key]}"`)
// }

// -------------------------------------------------------

