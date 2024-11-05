"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//normal object
var user = {
    name: "saroj",
    email: "saroj@gmail.com",
    isActive: true,
};
// this is the object inside the function
function myUser(_a) {
    var string = _a.name, boolen = _a.isPaid;
}
myUser({ name: "saroj", isPaid: true });
// this is function where object return object
function myCourse() {
    return { name: "react.js", price: 2500 };
}
myCourse();
function myUser1(user) {
    console.log("your name is ".concat(user.name, " and your email is ").concat(user.email, "  "));
}
myUser1({ name: "Saroj shrestha", email: "s@s.com", isActive: true });
function myPoint(pt) {
    console.log("the coordinate is " + pt.x);
    console.log("the coordinate is " + pt.y);
}
myPoint({ x: 200, y: 100 });
