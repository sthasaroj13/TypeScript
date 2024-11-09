interface userName {
    readonly dbid: number
    name: string
    email: string
    userId: number
    googleId?: number
    // can add method in interface and  we can write in two diff ways
    // StartTrail:()=>string
    StartTrail(): string

    getCoupon: (couponName: string, value: number) => number
}
//in interface we can rewite same interface again and  have to add vlaue in same  object
//also known as reopening of interface
interface userName {
    gitToken: number
}
//so we can in-heritance it also
interface Admin extends userName {
    role: "admin" | "user" | "agent"
}

const Saroj: userName = {
    dbid: 5,
    name: "saroj",
    email: "s@hmail.com",
    userId: 2,
    gitToken: 3,
    StartTrail: () => {
        return "trail start"
    },
    getCoupon: (couponName: string, of: number) => {
        return 55
    }

}
const sarojAdmin: Admin = {
    dbid: 5,
    name: "sarojAdmin",
    email: "s@gmail.com",
    userId: 2,
    gitToken: 3,
    StartTrail: () => {
        return "trail start"
    },
    getCoupon: (couponName: string, of: number) => {
        return 55
    },
    role: "admin"


}
export { }