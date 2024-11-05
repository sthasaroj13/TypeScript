//normal object
const user = {
    name: "saroj",
    email: "saroj@gmail.com",
    isActive: true,
}

// this is the object inside the function
function myUser({ name: string, isPaid: boolen }) {

}
myUser({ name: "saroj", isPaid: true })

// this is function where object return object

function myCourse(): {
    name: string,
    price: number,

} {
    return { name: "react.js", price: 2500 }
}
myCourse()
export { }