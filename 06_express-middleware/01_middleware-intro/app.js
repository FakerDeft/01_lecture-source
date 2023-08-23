const express = require("express");

const app = express();

app.listen(8888, () => console.log("Server is running on port 8888"));

// express middleware
app.use((request, response, next) => {
  console.log("1번 미들웨어");
  next();
});
app.use((request, response, next) => {
  console.log("2번 미들웨어");
  next();
});
app.use((request, response, next) => {
  console.log("3번 미들웨어");
  response.status(200).send("hello middleware");
});
