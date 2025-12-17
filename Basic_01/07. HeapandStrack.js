// stack(Primitive), Heap(Non-Primitive)

let name = "aditya"
let othername = name
othername = "yadav"

console.log(name)
console.log(othername)

let userOne = {
    email : "something@google.com"
}

let userTwo = userOne

userTwo.email = "adi@google.com"

console.log(userOne)
console.log(userTwo.email)