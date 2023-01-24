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


let article: [number, string , boolean ] ; // read only make the article mute and unchangeable
article = [100, "my string ", false ];
article.push("new Item "); // I can add new item to the article even if I did not include it in article definition if I DID NOT DEFINE article as READONLY 
//article[0]. article[1]. in this way I can modify each type in the article

const [id, title, published] = article; //destructuring the article 
console.log(id, title, published)

console.log(article)

function loging(msg){ // this function gonna print msg in console and return undefined because there is no return statement.
    console.log(msg)
}

console.log(loging("hi there"))

function login(msg) : void {
    console.log(msg)
   // return 'hi there';  Type 'string' is not assignable to type 'void'. IN THIS CASE the function not returning any value 
}

function fail(msg: string ) : never {
    throw new Error(msg)
    //return 10; Type 'number' is not assignable to type 'never'. // in type never Unreachable code detected
}

function printName(name : string) :never {
    while(true){ console.log(name) }
}
//printName("sultan")
//console.log("test") // Unreachable code detected. because the printName function is always running and the compiler will never reach to this point

/* IN COMPILE TIME; typescript doesn't check { validate } to make sure the type assertions we insert wether it is valid or not.  */

let meyImg = document.getElementById("my-img") as HTMLImageElement;
console.log(meyImg.src);

let myInputElement = document.getElementById("input") as HTMLInputElement;
console.log(myInputElement.focus);

let myImageElement = <HTMLImageElement> document.getElementById("image");
console.log(myImageElement.style)
