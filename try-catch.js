// function checkAge(){
//     const ageField = document.getElementById('age');
//     const ageText = ageField.value;
//     const errorTag = document.getElementById('error')
    

//     try{
//         const age = parseInt(ageText);

//         if(isNaN(age)){
//             // console.log('age not found', age, ageText)
//             throw "Please enter a number"
//         }
//         else if(age < 18){
//             throw "baccha kaccha not allow"
//         }
//         else if(age > 30){
//             throw "murobbira aisen na eta annego jaga na"
//         }
//         errorTag.innerHTML = ''
//     }
//     catch(err){
//         console.log('ERROR:', err)
//         errorTag.innerHTML = 'ERROR: ' + err;
//     }
//     finally{
//         console.log('all done inside try catch')
//     }
//     console.log(11111)
// }

async function f() {
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
     setTimeout(() => resolve('done!'), 1000);
    });
    result = await promise;
    console.log(result);
   }
   f()