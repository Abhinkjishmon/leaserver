
const db = require('./db')


//all-products
const allProducts = ()=>{
   return db.Product.find().then(
    (result)=>{
        if(result){
            return{
                statusCode: 200,
                products:result
            }
        }
        else{
            return{
                statusCode: 404,
                message: "No data is present"
            }
        }
    }
   )
}
//view-product
const viewProduct = (id)=>{
    return db.Product.findOne({
        id
    })
    .then(
        (result)=>{
            if(result){
                return{
                    statusCode: 200,
                    products:result
                }
            }
            else{
                return{
                    statusCode: 404,
                    message: "Product is unavailable"
                }
            }
        }
       )
}

//

module.exports = {
    allProducts,
    viewProduct
}