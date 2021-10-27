class student{
    public id: number = 0;
    public firstName: string = 'Muhadjir';
}
const hello: string = 'Hello World';

const anyMessage: string | number = 134

const anyMessage1: (string | number)[] = [134, '']

const any: student[] = [
    new student()
]
console.log(hello)

// let address: string = 'Kebayoran'
// address = '105'

function getProfileTS(name:string, age?: number){ //optional property age
    console.log(`Hello, ${name}!, your age is ${age}`);
}
getProfileTS('Muhadjir', 23)

let arrayItem: (string|boolean|number)[] = [
    "String", true, 1234
]

let arrayItemAny: any[] = [
    "String1", true, 1234
]

let arrayItemNested: (string|number|boolean)[][] = [
    ["Saya", true, 1273]
]

let object : studentObject = {
    name: 'Muhadjir',
    age: 23,
    score: 100
}

interface studentObject{
    name: string,
    age: number|string,
    score?: number   
}

class siswa implements studentObject{
    private id:number;
    public name:string = 'Muhadjir';
    public age:number = 23;
    public score:number = 80;
}

class Customer {
    name:string 
    age:number
    money:number
    items: string[] = ['laptop']

    constructor(name:string, age:number, money:number){
        this.name = name
        this.age = age
        this.money = money
    }
    updateData(money:number){
        this.money = money
    }
    addItem(item:any){
        this.items.push(item)
    }
}

const raihan = new Customer('muhadjir', 23, 750000)
