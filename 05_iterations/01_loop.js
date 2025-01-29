for (let i = 0; i < 5; i++) {
    const element = i;
    // console.log(element)
    
}

// -------------------nested for loop with break keyword-------------------------

// for (let i = 0; i < 5; i++) {
//     const element = [i];
//     console.log(element)
//     for (let j = 0; j < 5; j++) {

//         if (j==4){
//             console.log("j is 4 now")
//             break;                                         //break
//         }
//         const element = j;
//         console.log(element)
        
//     }
    
// }

// ---------------------------------------------------

// let arr = ["Superman" , "Batman" , "Spiderman" , "Hulk" , "krish"]

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]=="Spiderman"){
//         console.log(`my favourite superhero ${arr[i]}`)
//         continue                                                         //continue statement 
//     }
//     const element = arr[i];
//     console.log(element)
    
// }

// -----------------------Example----------------------------------------

let newArr = ["Asus","lenovo","Hp","Dell"]

for (let i=0 ; i < newArr.length ; i++){
    if(newArr[i] == "lenovo"){
        console.log("Lenovo aa gye oye")
        continue;
    }
    console.log(newArr[i])
}

// -------------------------------------------------------------------