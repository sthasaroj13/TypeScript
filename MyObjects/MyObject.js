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
