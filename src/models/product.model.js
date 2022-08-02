const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description:{type:String,required:false},
    inventorycount:{type:Number,required:false},
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("product", productSchema);
