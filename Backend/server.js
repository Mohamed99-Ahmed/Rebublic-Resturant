const  app = require("./app.js");
const dotenv = require('dotenv');
dotenv.config({path:"./config.js"})
console.log("ljjaslkdjfkjasdf")
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('heoo from port 5000');
});
