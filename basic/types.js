// 원시 타입
const name = "youngrae";
const age = 35;
const hasJob = true;
const car = null;
let anything; // undefined
const sym = Symbol();

// 참조 타입
const hobbies = ["walking", "books"];
const address = {
    province: "경기도",
    city: "성남시",
}

console.log(typeof hobbies);
console.log(Array.isArray(hobbies)); // 배열 여부를 판단할 때는 해당 메소드를 이용한다.
