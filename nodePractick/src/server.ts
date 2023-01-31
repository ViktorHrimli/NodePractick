const app = require("./index");
const db = require("./db/db");

db.connect(
  "mongodb+srv://viktor_hrimli:haobanjia@cluster0.kcc9uch.mongodb.net/?retryWrites=true&w=majority"
)
  .then((res: any) => {
    app.listen(3000, async () => {
      console.log("Server listen on 3000 port.");
    });
  })
  .catch(() => process.exit(1));
