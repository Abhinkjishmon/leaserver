const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ecommerce',()=>{
    console.log('MongoDB Connection Successfull !!!!!');
})


//to store allProducts
const Product = mongoose.model('Product',
{
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
      rate: String,
      count: Number
    }
  }
)

//to store wishlist
const Wishlist = mongoose.model('wishlist',
{
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
      rate: String,
      count: Number
    }
  }
)

module.exports = {
    Product,
    Wishlist 
}
