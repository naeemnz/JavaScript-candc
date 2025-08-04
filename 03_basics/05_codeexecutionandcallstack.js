//Execution Context
//Calls ye Call Stack:  ap k pas ek memory hen is men hum dekhenge k kese function is men jainge aur execute honge aur kese usse bahir ayenge 

//Javascript Execution Context : apne koi bhi file bnayi he to ap dekhenge k JS use kese run karti he, Js use hamesha do hisson/phase men simultanouesly run karta he 

// {} - Global Execution Context (EC) ye hamesha banga hi banega,isko refer kia jata he this se, us this variable men us GEC ko rakh dia jata he, bun, deno ya node sab ka EC alag alag hota he, aur hum ziada ter windows ki baat karenge to is case men ye Window hoga ya gi

//JS single threaded he

// 1. Global Execution Context
// 2. Function ya Functional Execution Context
// 3. Eval Execution Context: ye apni ap men ek property he Global Object ki, ye ek tarah se global hi hota he, Mongoose waghaira ki documentation men aye ga padhenge

// {}- apka code run karne k liye pehle ata he 
// Memory Creation Phase ya Creation Phase : is men sirf apk vriables jo bhi apne declare karahe us k liye jghen allocate hoti he execution nahin hoti is phase men jese + -etc
// Execution Phase 

let val1 = 20
let val2 = 60
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

/* 
Steps
1. Global Execution/ Global Environmentaur ise this men allocate kia jata he 
2. Memory Phase /MCP is phase men sare variables ko ikhata kia jata he aur un sabko bas rakha jata he apne pas men, example
val1-> undefined 
val2->undefined rakha jata he
addNum-> definition k ander jati he function defintion execution nahin hoti yahan
result1->undefined
result2->undefined
3. Execution Phase 
val1-> 10 
val2-> 5
20 se 23 line tak ka koi kam nahin he kuk ye already holded he 
addNum-> ye apna ek alag execution context banayega mtlb alag se
*/

// node 03_basics\05_codeexecutionandcallstack.js