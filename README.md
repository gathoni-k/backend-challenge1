Project description
-------------------

**Pizzeria**

This application serves the purpose of exposing a JSON API to be consumed by a frontend client for ordering pizza.

The following entities should be created (including proper relations):

* *pizza* - has a name and price (e.g. Margherita $5, Pepperoni $6, ...)
* *order* - has items
* *order item* - has a pizza and quantity

The following endpoints should return a JSON response:
* `/api/orders` (list of orders)
* `/api/orders/:id` (details of an individual order)
* `/api/pizzas` (list of pizzas; see './backend/example-pizzas.json')

Solution
-------------------

### Pizzeria
Returns order and pizza json data

To run this repo, fork it and add a dbConfig file with your mongodb dbURI like so:
```JavaScript
module.exports ={
    dbURI: 'mongodb+srv://<username>:<password>@cluster0-apgna.mongodb.net/test?retryWrites=true&w=majority'
}
```

|  endpoint                 |  method       | response
| --------------------------| ------------- |--------------------
| /api/pizzeria/orders      | GET           | all orders
| /api/pizzeria/orders/:id  | GET           | details of an individual order
| /api/pizzeria/orders      | POST          | create order
| /api/pizzeria/pizzas      | GET           | all pizzas
| /api/pizzeria/pizzas      | POST          | create pizzas