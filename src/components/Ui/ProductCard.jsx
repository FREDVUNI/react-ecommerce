import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/productCard.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({ item }) => {
    return (
        <Col lg="3" md="4">
        <div className="product__item">
            <Link to={`/product/${item.id}`}>
                <motion.div whileHover={{ scale:1.1 }} className="product__img">
                    <img src={item.imgUrl} alt="product"/>
                </motion.div>
            </Link> 
            <div className="p-2 product__info">
                <h3 className="product">
                    <Link to={`/product/${item.id}`}>{item.productName}</Link> 
                </h3>
                <span className="text-center d-inline-block">{item.category}</span>
            </div>
            <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                <span className="price">$ {item.price}</span>
                <motion.span whileTap={{ scale:1.2 }}>
                    <i className="ri-add-line"></i>
                </motion.span>
            </div>
        </div>
        </Col>
    )
}

export default ProductCard
