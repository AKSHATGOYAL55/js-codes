// ---------------function inside the function ------------------------

function one(){                                      //function
    let name = "Akshat"
    console.log("hey buddy")

    function Two(){                                   //function
        let nameTwo = "Ayush"
        console.log(name)

    }
    // console.log(nameTwo)
    Two()
}

// console.log(one())

// -----------------------------Example before and after initialize ---------------------

// notDeclare()                                         //smoothly run

function notDeclare(){                              //function ko khi bhi call kr skte he
    console.log("Not declare here")
}

// notDeclare()

// Declarehere()                                  //cannot access Declare before initialization

let Declarehere = function(){                      //variable function
    console.log("Declare here")
}

Declarehere()                                     // right way to access variable function


// -----------------------------------------------------------------------------------------------