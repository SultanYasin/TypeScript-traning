let hire: boolean = true
console.log(typeof hire)

let showMsg = true;

function showDetails(name: string, age: number, salary: number) : string { 
    // similar to java public string returnName(name){} but here the type of the returning value from the function has to be written 
    if(showMsg){
        return `name:${name} age:${age} salary:${salary} `
    }
    return 'fuck off'
}
console.log(showDetails("sultan", 29, 4000))

function showDetailsWithDefaultValueIfUserDidNotInsertAValue ( name: string = "sultan", age?: number, salary?: number) : any { 
    //name: string ="sultan" give default value to the variable if user did not insert a value to it
    // age?: number make this variable optional and there is no need to write it in by the user.
    return `${name} ${age} ${salary}`
}
console.log(showDetailsWithDefaultValueIfUserDidNotInsertAValue( )); // output here gonna be sultan -undef  - undef

const addNumbers = (...numbers : number[])  => {
    let result = 0;
  //  numbers.forEach(element => result += element );
    for(let i = 0 ; i < numbers.length ; i++ ) result += numbers[i]
    console.log("result is :" + result)
}

addNumbers(1,2,3,4,10, +true )

const addTwoNumbers = (num1 : number , num2 : number) :number => num1 + num2;
console.log("from arrow function the result is : " + addTwoNumbers(10,20) )