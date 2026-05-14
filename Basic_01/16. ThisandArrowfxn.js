// const user = {
//     username: "aditya",
//     price: 99,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
        
//     }
// }

// user.welcomeMessage()

// user.username = "adi"

// user.welcomeMessage()

// console.log(this);


//  function chai(){ 
//     let username = "aditya"
//     console.log(this.username);
    
//  }

//  chai()

// const chai = function (){
//     let username = "aditya"
//     console.log(this.username);
    
// }

// chai()

// const chai =  () => {
//     let username = "aditya"
//     console.log(this.username);
    
// }

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "aditya"})

console.log(addTwo(3, 4));
