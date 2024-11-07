
// this is tuples if the type  is decleare [number, string, boolean] then the value should be same as respective

let Tuser: [number, string, boolean]
Tuser = [12, "saroj", true]
Tuser = ["saroj", 15, true]




type User = [number, string]

const newUser: User = [2, "saroj"]
//and you can change it also
newUser[0] = 4
//prev version this  will not give error  but now it will
newUser.push(true)
export { }