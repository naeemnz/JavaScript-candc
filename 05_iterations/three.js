// node 05_iterations\three.js
// ye sare array specific loops hen

//for of loop 
//["", "", ""]arrays hen, [{}, {}, {}] yahan arrays men objects hen
const arr = [1, 2, 3, 4, 5]
// for (const element/iterator of object) { // aur yahan hum kuch bhi naam de sakte hen element/ietrator/i/num/value 
// for (const num of arr) { //yahan loop object pe nahin lagta is ka matlb kis chiz pe loop lagraha he, object pe, array, strings pe etc
//     console.log(num);
// }

//for of strings par
const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each caharcter is ${greet}`);   
}

//Maps: map object holds key value pairs and remenbers the original insertion order of the keys ek aam object ye order yaad nahin rakhta, map apne ap men ek object he, maps men duplicate value nahin hoti
const map = new Map()
map.set('NL', "Netherland")
map.set('FR','France')
map.set('USA','United States of America')
map.set('FR','France')//do entries nahin hongi aur jis order men enter kia he use me mile ga result
// console.log(map);

//for op loop map pe
for (const [key, value] of map) { //[key , value se array ki destructuring hojati he yahan ese ]
    // console.log(key);//ese print karne se 3 arrays print honge [ 'NL', 'Netherland' ]agliline [ 'FR', 'France' ] agliline[ 'USA', 'United States of America' ]
    console.log(key, ':-', value);// output: NL :- Netherland FR :- France
}

//agr yahan object hota to men kia loop lagasakti hun: ans: nahin lekin map iterable he
let myObject = {
    'game1': 'Harry potter',
    'game2': 'Spider Man' // game2: 'Spider Manya ese ho dono men loop nahin lagsata kuk ek object iterable hen lekin usk alg tariqe hen ye don jo yahan he ye sahi nahi he is liye yahan iterate nahin hoga
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}