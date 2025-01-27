
// --------------------------Truthy and false value.----------------------------------------

// let emp = ""

// if (emp) {
//     console.log("logged In")
// } else {
//     console.log("logged out")
// }


// false value - "" , null , undefined , 0 

//True value - [], {} , " " , function ,"0"

// -------------------- Note - "" , " "  both string work differently.

// -----------------------------------------------------------------------------------------

// Nullish coalescing Assignment 



function config(options) {
    options.duration ??= 100;
    options.speed ??= 25;
    return options;
  }
  
  config({ duration: 125 }); // { duration: 125, speed: 25 }
  console.log(config({})); // { duration: 100, speed: 25 }


  let user = "loggedIn"

  console.log(user ? "logged in hai bhai " : "logged out ")