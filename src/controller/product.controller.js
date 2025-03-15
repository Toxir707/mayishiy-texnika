const query = require("../database/pg")

exports.getAllProducts = async function (req, res) {
    try {
        const products = await query("SELECT * FROM products")
        res.send(products)
    } catch (error) {
        
    }
}