//let + const + no hoisting + no semicolons
const var1 = 10
let var2 = 20
console.log(var1)
console.log(var2)

//Arrow Functions
const sum = (a,b) => {return a + b}
console.log(sum(var1,var2))

//Classes
class animal {
    constructor(type, age) {
        this.species = type
        this.age = age
    }
    getInfo() {
        console.log(`This animal is a ${this.species}, and it is ${this.age} years old`)
    }
}

const dog = new animal("dog", 5)
dog.getInfo()

//Class Inheritance + Extends + ` operator
class animalWithName extends animal {
    constructor(type, age, name){
        super(type, age)
        this.name = name;
    }
    sayName(){
        console.log(`Also, my name is ${this.name}`)
    }
}

const dog2 = new animalWithName("cat", 3, "Spot")
dog2.getInfo()
dog2.sayName()