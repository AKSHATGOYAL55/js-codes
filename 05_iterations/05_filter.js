
// ------------------------------------- Filter vs For each -------------------

const Arr = [1,2,3,4,5,6,7]

let newArr = Arr.filter((val)=>{                        //filter / map returned value .
    return val
})
// console.log(newArr)



let newOne = Arr.forEach((value)=>{                     //for Each doesn't return value .
    return value
})

console.log(newOne)

// -------------------------------------filter with object------------

const newObj = [{
    name : "Akshat",
    role : "Frontend Developer"
}]

let newTwo = newObj.filter((val)=>{
    return val.name
})

// console.log(newTwo)

// -----------------------------------------------------