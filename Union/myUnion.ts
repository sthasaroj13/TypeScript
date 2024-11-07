let score: number | string = 5
score = 4154
score = "saroj"


type user = {
    name: string
    id: number

}
type Admin = {
    username: string
    id: number
}
/*The saroj variable is declared with a union type user | Admin,
 which means saroj can be an object that matches either the user type or the Admin type.*/
let saroj: user | Admin = { name: "saroj", id: 2 }
//here saroj variable is match with admin type 
saroj = { username: "stha", id: 2 }


function DdId(id: string | number) {
    if (typeof id === "string") {

        id.toLowerCase()
    }
    else {
        id + 1
    }

}
DdId(4)
DdId("4")

//union in array 
const data: number[] = [1, 2, 3, 4, 5]
const data1: string[] = ["1", "2", "3", "4", "5"]
//if i want to mix number and string in array then actually i can add more data type
const data2: (string | number)[] = ["1", "2", 3, 4, "5"]

//if  people want to book seat for  film hall which is not available 
let seat: "front" | "back" | "middle"

seat = "window"