import mongoose from "mongoose";

const Schema = mongoose.Schema;
const inventoryItemSchema = new Schema({
  name: { type: String, required: true, trim: true},
  cost: { type: Number, required: false, },
  price: { type: Number, required: false, },
  stock: { type: Number, required: true },
  recipe: { type: {}, required: false}
});

const InventoryItem = mongoose.model("InventoryItem", inventoryItemSchema);
module.exports = InventoryItem;