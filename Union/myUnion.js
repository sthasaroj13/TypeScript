var score = 5;
score = 4154;
score = "saroj";
/*The saroj variable is declared with a union type user | Admin,
 which means saroj can be an object that matches either the user type or the Admin type.*/
var saroj = { name: "saroj", id: 2 };
//here saroj variable is match with admin type 
saroj = { username: "stha", id: 2 };
function DdId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 1;
    }
}
DdId(4);
DdId("4");
//union in array 
var data = [1, 2, 3, 4, 5];
var data1 = ["1", "2", "3", "4", "5"];
//if i want to mix number and string in array then actually i can add more data type
var data2 = ["1", "2", 3, 4, "5"];
//if  people want to book seat for  film hall which is not available 
var seat;
seat = "window";
