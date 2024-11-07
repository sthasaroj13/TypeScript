let Score: number | string = 5
Score = 4154
Score = "saroj"


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
let Saroj: user | Admin = { name: "saroj", id: 2 }
//here saroj variable is match with admin type 
Saroj = { username: "stha", id: 2 }


function DdId1(id: string | number) {
    if (typeof id === "string") {

        id.toLowerCase()
    }
    else {
        id + 1
    }

}
DdId1(4)
DdId1("4")

//union in array 
const Data: number[] = [1, 2, 3, 4, 5]
const Data1: string[] = ["1", "2", "3", "4", "5"]
//if i want to mix number and string in array then actually i can add more data type
const Data2: (string | number)[] = ["1", "2", 3, 4, "5"]

//if  people want to book seat for  film hall which is not available 
let Seat: "front" | "back" | "middle"

Seat = "window"
