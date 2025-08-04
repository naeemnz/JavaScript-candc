for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log('5 is the best number');
    }
    // console.log(element);    
}
//agr variable i same hua inner loop k variable k sath to erro ayege kuk block scope he aur j ander he ek loop he mtlb access hoga
// for (let i = 1; i <=10; i++) {
    // console.log(`Outer loop value: ${i}`);
    // for (let j = 0; j <=10; j++) {
        // console.log(i+ ' * ' + j+ ' = ' +  i*j);
        
        // console.log(`Inner loop value: ${j} and inner loop of i: ${i}`);        
    // }//ap yahan par pehle wale loop se ander gaye dosre loop paer, isliye pehle loop ki ek value print hui usk bad dosra loop 10 dafa chala phir bahir 
    //aye pehle loop ki dosri value print hui phir ander gaye 10 values print ki phir bahir ki ek value print hui is tarah ye chalega, haar ek value k sath 10 values 
    //dosre loop ki print hongi
// }

//for loop for array
let myArray = ['flash', 'batman', 'superman']
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) { //agr yahan <= likhe to 4th value undefined ayegi
    const element = myArray[i];
    // console.log(myArray);//3 dafa array ko print karega mtlb input 3 dafa likh dega as it is   
    // console.log(element);// ye sirf ek dafa sare array k elements ko print karega   
}

//keywords break
// for (let index = 1; index < 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     } // break se hum flow tor te hen aur se 4 k bad direct detected 5 print karke bahir chale jate hen line 38 pe
//     console.log(`Value of i is: ${index} `); 
// }

//keyword continue
for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        // continue
    } // sirf pehle loop ki 5 value print nahin hogi, detected 5 k bad hamara for loop continue rahega end tak, is men pehle loop ki 5 value print nahin hogi wo sirf detect hui bas Value of i is: 5 print nahin hoga continue men    console.log(`Value of i is: ${index} `); 
}