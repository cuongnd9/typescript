// boolean, number, string
let isDone: boolean = true;

let decimal: number = 2;

let color: string = 'blue';

// array
let list: number[] = [1, 2, 7];
let animal: Array<string> = ['cat', 'dog', 'mouse'];

// tuple
let age: [string, number] = ['ten', 10]; 
console.log(age[1]) // ten

// enum
enum Color { Red = 4, Violet = 'violet', Green = 'green'}
console.log(Color.Red); // 4
console.log(Color.Green); // green
console.log(Color[4]); // Red *only for number enum*

// any
let notSure: any = 5;
notSure = 'nine';
notSure = [1, 1, 1, 1, 1];
console.log(notSure); // [ 1, 1, 1, 1, 1 ]
let numbers: any[] = [1, 'three', 'four', 100, 2];
console.log(numbers[2]); // four

// void
function warnUser(): void {
	console.log('Warning....');
}
warnUser();

// never
function error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
    }
}

// type assertions
let someValue: any = 'Hello, I\'m Nguyen Duy Cuong';
let str = <string>someValue;
let str2 = someValue as string;
console.log(str, str2);