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


//type of aliases in ts
type User = {
    name: string;
    email: string
    isActive: boolean

}
// i use void here because there is nothing to return
function myUser1(user: User): void {
    console.log(`your name is ${user.name} and your email is ${user.email}  `);

}
myUser1({ name: "Saroj shrestha", email: "s@s.com", isActive: true })

// this is also aliases
type Point = {
    x: number;
    y: number
};
function myPoint(pt: Point) {
    console.log("the coordinate is " + pt.x);
    console.log("the coordinate is " + pt.y);

}
myPoint({ x: 200, y: 100 })


export { }