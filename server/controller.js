module.exports = {

    getInvetory: (req, res, next) => {
        const db = req.app.get('db')

        db.get_inventory().then(inventory => {
            res.status(200).send(inventory)
        }).catch(err => console.log(err))
    }, 

    createProduct: (req, res, next) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body

        db.create_product([name, price, img]).then(product => {
            res.status(200).send(product)
        }).catch(err => console.log(err))

    },

    deleteProduct: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product([id]).then(product => {
            res.status(200).send(product)
        }).catch(err => console.log(err))
    }, 

    updateProduct: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.update_product([id]).then(product => {
            res.status(200).send(product)
        }).catxh(err => console.log(err))
    }
}