//for each sirf arrays k liye he kuk ye loop arrays k prototypes men ata he shayad 
let cdLanguages = ['js', 'ruby', 'java', 'python', 'cpp'];
// cdLanguages.forEach( function (element) { //call back function men naam nahin hota isliye hum function name() {} men se name remove kardete hen
//     console.log(element);
// })

//arrow functions men for each loop dekhen
// cdLanguages.forEach((value)=> {
//     console.log(value);
    
// }) // arraow functions men hum istarah likhte the, name/ greet function k name he, name/greet = () => {}, hum call back men naam nahin dete is liye naam hatadenge hum yahan se

// function printMe(item){
//     console.log(item);
//     //hum is function ko pass on karenge/ karsakte hen as parameter
// }
// cdLanguages.forEach(printMe) // yahan hum sirf refrence de rahe hen

//is for each loop k pas aur bhi parameters k access hote hen, sirf ek item ya value nahin hota hum yahan (item, index, array ) bhi de sakte hen
// cdLanguages.forEach( (item, index, arra) => {
//     console.log(item, index, arra);
//     //arra ek array he hum kuch bhi desakte hen
// })

//ye ek array k ander multiple objects hen aur humen is par iterate karna sikhna he kuk db men ye bht kaam atahe, aur data bhi is format men hota he ek array aur us men kai objects
const cdLang = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]
cdLang.forEach((item)=> {
    console.log(item.languageName);//har ek item ek object he yahan aur usk bad us object ki koi ek property de sakte ho jo chahiye apko to ye sirf wohi print karega
})
