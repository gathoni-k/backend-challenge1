const mongoose = require('mongoose')
const { Schema } = mongoose

const orderSchema = new Schema({
    id: Schema.Types.ObjectId,
    pizza: (String),
    quantity: (String)
    
})
const pizzaSchema = new Schema({
    id: Schema.Types.ObjectId,
    name: (String),
    price: (String),
    ingredients: []
})
const Order  = mongoose.model('Order', orderSchema)
const Pizza = mongoose.model('Pizza', pizzaSchema)
module.exports={Order, Pizza}