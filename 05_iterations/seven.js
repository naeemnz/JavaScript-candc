const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//ab ki bar men koi dosra method istemal karungi aur ye for each se thoda behter personally lagta he, map bhi call back function he
// let newNums = myNumbers.map( (num)=> num + 10 ) //ya {return num + 10}

//chaining map map aur isk bad filter laga sakte hen mutlab ap multiple methods laga sakte hen
// const newNums = myNumbers.map().map().filter
const newNums = myNumbers
    .map((num) => num*10)
    .map((num) => { return num +1 } )
    .filter( (num) => num >= 40 ) // filter men hamesha true aur false wala game he
console.log(newNums);