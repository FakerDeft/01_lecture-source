const express = require("express");
const app = express();

app.listen(8888, () => console.log("listening on port 8888"));

app.use((request, response, next) => {
  //   response.send("<h1>Hello World</h1>");
  //   response.send("hello world2");
  //   response.send({ name: "gildong", age: 20 });
  //   response.send([
  //     { id: 1, name: "홍길동", age: 20 },
  //     { id: 2, name: "이순신", age: 40 },
  //     { id: 3, name: "유관순", age: 16 },
  //   ]);
  //   response.json([
  //     { id: 1, name: "홍길동", age: 20 },
  //     { id: 2, name: "이순신", age: 40 },
  //     { id: 3, name: "유관순", age: 16 },
  //   ]);
  // jsonp : cors가 활성화되기 이전에 데이터를 요청하던 방식이다.
  //         보안상의 이슈로 현재는 거의 사용하지 않는다.

  response.status(404).send("<h1>404 Not Found</h1>");
});
