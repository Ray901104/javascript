// 중복 선언 및 재할당 가능, 가급적 사용하지 않는다.
var greeting = 'hello';
console.log(greeting);

var greeting = 'hi';
console.log(greeting);

var greeting = 'how are you?';
console.log(greeting);
console.log('====================');

// let : 중복 선언 불가, 재할당 가능
let greeting2 = 'hello';
console.log(greeting2);

// let greeting2 = 'hi';
// console.log(greeting2);

greeting2 = 'hi';
console.log(greeting2);
console.log('====================');

// const : 중복 선언 및 재할당 불가
const greeting3 = 'hello';
console.log(greeting3);

// const greeting3 = 'hi';
// console.log(greeting3);

// greeting3 = 'hi';
// console.log(greeting3);

console.log('====================');

// var : 함수 단위 스코프
function func1() {
    if (true) {
        var a = 'a';
        console.log(a);
    }
    console.log(a);
}

func1();

// let, const : 블록 단위 스코프
function func2() {
    if (true) {
        let a = 'a';
        console.log(a);
    }
    console.log(a);
}

func2();
