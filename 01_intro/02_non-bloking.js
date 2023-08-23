// Node.js는 API 대부분을 비동기 방식으로 제공한다.

// fs ->  file system이라는 기본 모듈
// 작성된 모듈을 불러올 때 require -> 자바의 import라고 생각하면 쉬움
const fs = require("fs");

// // 동기 방식
// const text = fs.readFileSync('text.txt');

// console.log(text.toString());
// console.log('end!!!')식식

// 비동기 방식 : end가 출력된 후 text.txt의 내용이 출력된다.

fs.readFile("text.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }

  console.log(data.toString());
});

console.log("end!!");
