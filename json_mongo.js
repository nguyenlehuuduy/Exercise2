const mongo = require("mongodb");
const url = "mongodb://localhost:27017/";
mongo.connect(url, { useNewUrlParser: true }, (err, db) => {
if (err) {
console.log(err);
process.exit(0);
}
let data = { id: 100, name: "Shahid" };
var dbo = db.db("test");
console.log("database connected!");
dbo.collection("user").insert(data, (err, result) => {
if (err) {
console.log(err);
process.exit(0);
}
console.log("records added.");
console.log(result);
db.close();
});
});