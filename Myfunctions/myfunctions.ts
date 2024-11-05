function addnum(num: number) {
    //return  num +2;
    return "hello"

}
addnum(5);

function getUpper(val: string) {
    return val.toLocaleUpperCase()

}
getUpper('saroj')


function signUp(name: string, email: string, isPaid: false) {


}

signUp('saroj', 'saroj@gmail.com', false)

// this return string only
const getvalue = (value: string): string => {
    return ""

}
const heros = ['superman', 'thor', 'hulk']


heros.map((hero): string => {
    return `your hero is ${hero}`
    // return 1
    // console.log(`' this is yours heros',${hero}`);

})

//two type of functions

// here this function doesnot return any function
function consoleError(errmsg: string): void {
    console.log(errmsg);

}

// this function using never will never finish or return any value. In this case, the function throws an error, which stops the function and prevents it from reaching any endpoint.
function handleError(errmsg: string): never {
    throw new Error(errmsg)

}
export { }