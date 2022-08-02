const app = require("./index");
const connect = require("./configs/db");
const PORT = process.env.PORT || 8080;

app.listen(PORT, async function () {
  await connect();
  console.log(`listening on port ${PORT}`);
});
