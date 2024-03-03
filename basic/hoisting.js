// var 호이스팅
console.log(greeting); // 선언 호이스팅 시 초기값을 undefined 로 해준다.
var greeting = "hello";

func();

function func() {
    console.log("hoisting test");
}

// let, const 호이스팅
console.log(hello); // 선언 호이스팅 시 초기값을 할당해주지 않는다.
const hello = "hello";
