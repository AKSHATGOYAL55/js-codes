let Arr = [1,2,3,4,5]

// console.log(Arr.length)
// console.log(Arr[1])

// console.log(Arr.join()) // Array string form me aayga 

// console.log(Arr.push(54))
// console.log(Arr)
// console.log(Arr.pop())
// console.log(Arr)
// console.log(Arr)

// console.log(Arr.shift())
// console.log(Arr.unshift(23,4))

// console.log(Arr)

//-------------splice original array me change krta he-------------
console.log(Arr.splice(1,2))//2,3 
console.log(Arr) //1,4,5

//-------------slice copy hoti he original me change nhi krega-----
console.log(Arr.slice(1,4)) //2,3,4 
console.log(Arr) //1,2,3,4,5