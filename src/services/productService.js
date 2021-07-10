import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("http://i-return-294414.appspot.com/products")
    }
 
}