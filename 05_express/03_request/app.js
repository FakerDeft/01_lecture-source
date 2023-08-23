const express = require("express");

const app = express();

app.listen(8888, () => console.log("Server is running on port 8888"));

app.use((request, response) => {
  const headers = request.headers;
  console.log(headers);

  //   const accept = request.headers.accept;
  const accept = request.headers(`accept`);
  console.log(accept);

  const query = request.query;
  console.log(query);
});
