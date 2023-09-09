// // enum Color {Red, Green, Blue};//starts with 0
// // var c: Color = Color.Green;

// // enum Color1 {Red = 1, Green, Blue};
// // var colorName: string = Color1[2];
// // console.log(colorName);


// // enum Color2 {Red = 'red', Green = 'green', Blue = 'blue'};//can assign values to all
// // var colorIndex = Color2['Blue'];
// // console.log(colorIndex);
// // function f1(p:string){
// //     return p
// // }
// // console.log(f1(Color2.Blue));
// // enum Color2 {Red = 1, Green = 2, Blue = 4 };//can assign values to all
// // var colorIndex = Color2["Blue"];
// // // console.log(colorIndex);
// // const av:Record<Color2,string>={
// // [Color2.Blue]:'billo',
// // [Color2.Green]:'waheed',
// // [Color2.Red]:'sultan'
// // }



// // console.log(av[4]);
// // let array1 : number[] = [5, 6, 7];//correct syntax
// // console.log(array1[1]);//correct syntax
// // let array2:Array<number> = [1, 2, 3];//alternative correct syntax
// // let array3 : number[] = [];//correct syntax to define an empty array

// // let array5: number[] = [];
// // array5.push(1234);//dynamically adding


// //Note: All parameters are required

// //Named function
// function add(x: number, y: number): number {
//     return x+y;
// }

// //Anonymous function
// let myAdd1 = function(x: number, y: number): number { 
// 				return x+y; 
// };



// //Anonymous function with explict type
// let myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { 
// 												return x+y; 
// 											};
                                           

// //type names dont matter
// let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
// 																return x+y; 
// 															};
                                                           
// //Lambda functions															
// let myAdd4 = (a : number, b : number) => a + b;
// //output will be: var myAdd4 = function(a : number, b : number) {return a + b};

// type GreetFunction = (a: string) => void;
// function greeter(a: GreetFunction) {
// 	return a
// }
// greeter("abc");


											
function sum(a:number,b:number):number
function sum(a:string,b:string):string
function sum(a :any, b:any){
    return a+b
}


// function sum(a:string|number,b:string|number):string|number{
// if(typeof a=== "number" && typeof b=== "number"){
// return a+b
// }else {
//     return `${a},${b}`
// }
// }
let c=sum(1,6)
console.log(c);

let d = sum('arsal','sultan')



console.log(d);
let b=2;
let a=2