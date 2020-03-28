const express = require('express')
const router = express.Router()
const {Order, Pizza} = require('../models/pizzeriaModel')

// return all orders
router.get('/orders', async (req, res, next) => {
    try {
        let orders = await Order.find({})
        res.json({
            success: 'true',
            message: 'Order added successfully',
            orders: orders
        })
    } catch (error) {
        res.json({
            success: 'false',
            message: 'An error occured',
            error: error
        })
    }
})

// details of an individual order
router.get('/orders/:orderId', async (req, res) => {
    try {
        console.log(req.params.id)
        let order = await Order.findById(req.params.orderId)
        console.log(order)
        res.json({
            success: 'true',
            order: order
        })

    } catch (error) {
        res.json({
            success: 'false',
            message: 'An error occured',
            error: error
        })
    }
})

// create orders
router.post('/orders', async (req, res) => {   
    try {
        let newOrder = new Order(req.body)
        await newOrder.save()
        res.json({
            success: 'true',
            message: 'Order added successfully'
        })
    } catch (error) {
        res.json({
            success: 'false',
            message: 'An error occured',
            error: error
        })
    }

})

// return all pizzas
router.get('/pizzas', async (req, res, next) => {
    try {
        let pizzas = await Pizza.find({})
        res.json({
            success: 'true',
            message: 'All pizzas',
            pizzas: pizzas
        })
    } catch (error) {
        res.json({
            success: 'false',
            message: 'An error occured',
            error: error
        })
    }
})

// create pizzas
router.post('/pizzas', async (req, res) => {
    try {
        let newPizza = new Pizza(req.body)
        await newPizza.save()
        res.json({
            success: 'true',
            message: 'Pizza added successfully'
        })
    } catch (error) {
        res.json({
            success: 'false',
            message: 'An error occured while adding the pizza',
            error: error
        })
    }

})
// expose router
module.exports = router