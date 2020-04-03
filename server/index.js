require("dotenv").config(); 
const express = require("express"); 
const app = express(); 
const massive = require("massive"); 
const {SERVER_PORT, CONNECTION_STRING} = process.env; 
const ctrl = require("./controller"); 

app.use(express.json()); 

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected to db')
})

// GET ALL PRODUCTS = GET
app.get("/api/inventory", ctrl.getInvetory); 

// CREATE PRODUCT  = POST
app.post("/api/product", ctrl.createProduct); 

//UPDATE PRODUCT = PUT
app.put('api/product/:id', ctrl.updateProduct)

//DELETE 
app.delete("/api/product/:id", ctrl.deleteProduct)

app.listen(SERVER_PORT, console.log(`listening on port ${SERVER_PORT}`))

