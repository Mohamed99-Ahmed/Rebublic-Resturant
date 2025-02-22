const mongoose = require("mongoose");
// add a docucment to collection in database after make schema
const beefSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "A beef must have a name"],
      unique: true
    },
    price : {
      type: Number,
      required: [true, "A beef must have a price"],
    }
  })
  const Beef = mongoose.model("Beef", beefSchema);
  
  const newBeef = new Beef({
    name: "worldware 2",
    price: 130  
  });

//   exprorts module
  exports.module = Beef