//hamara for of loop object pe kaam nahin karraha is liye hum for in use karenge ge
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple' 
}
//for in loop sirf object k liye nahin he hum aur bhi chizon k liye ise istemal karte hen 
for (const key in myObject) {
    //    console.log(key);//sirf keys aingi
    // console.log(myObject[key]);//isse values print hongi keys ki sirf, yahan hum ne kaha k is object ki is key ki values print klardo
    //    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//kia for in loop array par istemal karsakte hen± han
let programming = ['js', 'rb', 'py', 'java', 'cpp'];
for (const key in programming) {
    // console.log(key); // sirf keys print karega matlb sirf  index 0 se 4 tak
    // console.log(programming[key]);//is men values print hongi
}

const map = new Map()
map.set('NL', "Netherland")
map.set('FR','France')
map.set('USA','United States of America')
map.set('FR','France')
for (const key in map) {
   console.log(key);//Error: map jo he wo iteratable nahin he, aur agr koi chiz iteratable nahin he use istareqe se loop men nahin likha jata he aur tariqe bhi ye karne k
}