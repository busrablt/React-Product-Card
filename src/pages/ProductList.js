import React, { useState, useEffect } from 'react'
import { Icon, Image, Grid, Form, Input } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { addToFavorite } from "../store/actions/favoriteActions";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import './product.css';

function ProductList() {
	const dispatch = useDispatch();
	const[products, setProducts] = useState([])
    const [filteredData, setFilteredData] = useState(products);
	
	useEffect(()=>{
		let productService = new ProductService()
		productService.getProducts().then((result)=>{
			setProducts(result.data);
			setFilteredData(result.data);
		})
	},[])

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
		toast.dark(`${product.model} sepete  eklendi!`)
		
	  };
	  const handleAddToFavorite = (product) => {
		dispatch(addToFavorite(product));
		toast.dark(`${ product.model} favoriye  eklendi!`)
		
	  };

	  const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = products.filter((data) => {
            return (
                data.brand.toLowerCase().search(value) !== -1 ||
				data.category.toLowerCase().search(value) !== -1
            );
        });
        setFilteredData(result);
    };
	function getProductImage(thumbnailName) {
		if (thumbnailName == null || thumbnailName == undefined) {
			return "./default-image.PNG"
		} else {
			return `https://i-return-294414.appspot.com/images/${thumbnailName}`
		}
	
	}

	
	  
    return (
        <div className="container">
			<ToastContainer position="bottom-right"/>

			<Form style={{ marginLeft: "820px", marginBottom: "30px" }}>
				<Form.Field inline>
				<Input className="input"
					style={{ marginBottom: "20px" }}
					type="text"
					placeholder="Search..."
					icon="search"
                    iconPosition="left"
					onChange={(event) => handleSearch(event)}
				/>
				</Form.Field>
      		</Form>
			  
			<Grid>
				{filteredData.map((product => (
				<Grid.Column width={5} className="product-card ">
					<div className="badge">Yeni</div>
					<div className="product-tumb">
					<Image src={getProductImage(product.thumbnail_names)} />
					</div>
					<div className="product-details">
						<span className="product-category">{product.category}</span>
						<h5>{product.brand + " " + product.model}</h5>
						<h4>{product.info}</h4>
						<div className="product-bottom-details">
							<div className="product-price">{product.full_price} TL </div>
							<div className="product-links">
								<a href="/#">
									<Icon  onClick={()=>handleAddToFavorite(product)} name="like" />
                                </a>
                                <a href="/#">
                                    <Icon onClick={()=>handleAddToCart(product)} name="shop" />
                                </a>
							</div>
						</div>
							</div>
				</Grid.Column>
				)))}
				
			</Grid>
		</div>
    )
}

export default ProductList
