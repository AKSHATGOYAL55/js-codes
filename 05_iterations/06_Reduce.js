

let cartProduct2 = [1,2,3,4]

let Total_Value = cartProduct2.reduce((pre,cur)=>{
    return pre + cur
},0)
// console.log(Total_Value)

// -----------------------------------------------------------------

let cartProduct =[
    {
    product : "Shop",
    Price : 20
},
    {
    product : "Vegetables",
    Price : 100
},
    {
    product : "Detergent",
    Price : 10
},
    {
    product : "Dry-Fruits",
    Price : 700
},
]


// let Total_Value2 = cartProduct.reduce((pre ,item )=> { return pre + item.Price},0)

// console.log(Total_Value2)


let Total_Money = cartProduct.reduce((pre , item)=>{
    return pre + item.Price
},0)

console.log(Total_Money)
