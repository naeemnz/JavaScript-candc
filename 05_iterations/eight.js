const myNums = [1, 2, 3] //accumulator, current value
// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0) //ye zero accumulator ki initial value define karne k liye zero he he matlb start kahan se karna he accumulator ko.
// console.log(myTotal);

//hum yahan isi same chiz ko arrow function men likhenge
// const myTotal = myNums.reduce( (acc, currval)=> acc + currval, 0) // 0 yahan accumulator k liye diya gaya he
// console.log(myTotal);

const shoppingCart = [
    {
        productName: 'bread',
        price: 5
    },
    {
        productName: 'milk',
        price: 5
    },
    {
        productName: 'yoghurt',
        price: 5
    },
    {
        productName: 'honey',
        price: 5
    }
]
const priceToPay = shoppingCart.reduce( (accumulator, articlePrice)=> articlePrice.price + accumulator, 0) // 0 ki jagah discount bhi asakta he ya wo amount jo apko pay nahin karni he, aur object ka naam yahan kuch bhi he pata nahin esa ku he 
console.log(priceToPay);// object men property ko access karne k liye humne yahan .price istemal kia he