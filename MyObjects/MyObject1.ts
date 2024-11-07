//so here i am learning about readonly and optional in ts
type User = {
    readonly _id: String  // this id is assign as readonly
    name: string
    email: string
    isActive: boolean
    creditCard?: number // this is assign as optional so in ts ?: is optional
}
// i assign as variable 
let myUser: User = {
    _id: "4546",
    name: "saroj",
    email: "saroj@gmail.com",
    isActive: false,
    creditCard: 4541161

}

// if i try to change the id again it will complain
myUser._id = "221"
myUser.name = "saroj stha"

type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: string
}
//so here i intersection (&) to combine the two types cardNumber and cardDate and here i add new property
type cardDetails = cardNumber & cardDate & {
    cvv: number
}
