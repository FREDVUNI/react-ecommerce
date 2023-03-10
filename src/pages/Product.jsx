import React,{ useState,useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../assets/data/products'
import ProductsList from '../components/Ui/ProductsList'
import '../styles/product.css'

const Product = () => {
    const {id} = useParams()
    const product = products.find((item) => item.id === id)
    const { imgUrl,productName,price,avgRating,reviews,description,shortDesc,category } = product

    const [tab,setTab] = useState('desc')
    const related = products.filter((item) => item.category === category)

    useEffect(() =>{
        window.scroll(0,0)
    },[product])

    return (
    <>
    <Helmet title={`${productName}`}>
    <CommonSection title={`${productName}`}/>
    <section>
    <Container>
        <Row>
            <Col lg='6'>
                <img src={imgUrl} alt="product"/>
            </Col>
            <Col lg='6'>
                <div className="product__details">
                    <h2>{productName}</h2>
                    <div className="product__rating d-flex align-items-center gap-3 mb-3">
                        <div>
                            <span>
                                <i className="ri-star-s-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-s-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-s-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-s-fill"></i>
                            </span>
                            <span>
                                <i className="ri-star-half-s-fill"></i>
                            </span>
                        </div>
                        <p>({avgRating} ratings)</p>
                    </div>
                    <div className="d-flex align-items-center gap-5">
                        <span className="product__price">${price}</span>
                        <span>Category: {category.toUpperCase()}</span>
                    </div>
                    <p className="mt-3">{shortDesc}</p>
                    <motion.button whileTap={{ scale:1.2 }} className="shop__btn">Add to cart</motion.button>
                </div>
            </Col>
        </Row>
    </Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg="12">
                    <div className="tab__wrapper d-flex align-items-center gap-5">
                        <h6 className={ `${tab === 'desc' ? 'active__tab' : ''}` } onClick={() => setTab('desc')}>Description</h6>
                        <h6 className={ `${tab === 'rev' ? 'active__tab' : ''}` } onClick={()=> setTab('rev')}>Reviews ({ reviews.length })</h6>
                    </div>
                    {
                        tab === "desc" ?
                        <div className="tab__content mt-5">
                            <p>{description}</p>
                        </div>
                        :
                        <div className="product__review mt-5">
                            <div className="review__wrapper">
                                <ul>
                                    {
                                        reviews.map((item,index) =>(
                                           <li key={index} className="mb-4">
                                                <h6>Jane Doe</h6>
                                                <span>{item.rating} ( rating)</span>
                                                <p>{item.text}</p>
                                            </li> 
                                        ))
                                    }
                                </ul>
                                <div className="review__form">
                                    <h4>Leave your experience here ...</h4>
                                    <form>
                                        <div className="form__group">
                                            <input type="text" placeholder="Enter name"/>
                                        </div>
                                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                                            <motion.span whileTap={{ scale:1.2 }}>1 <i className="ri-star-s-fill"></i></motion.span>
                                            <motion.span whileTap={{ scale:1.2 }}>2 <i className="ri-star-s-fill"></i></motion.span>
                                            <motion.span whileTap={{ scale:1.2 }}>3 <i className="ri-star-s-fill"></i></motion.span>
                                            <motion.span whileTap={{ scale:1.2 }}>4 <i className="ri-star-s-fill"></i></motion.span>
                                            <motion.span whileTap={{ scale:1.2 }}>5 <i className="ri-star-s-fill"></i></motion.span>
                                        </div>
                                        <div className="form__group">
                                            <textarea rows={4} placeholder="Review message"/>
                                        </div>
                                        <motion.button whileTap={{ scale:1.2 }} className="shop__btn">Submit</motion.button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }
                </Col>
            </Row>
        </Container>
    </section>
    <section className="related__products">
        <Container>
            <Row>
                <Col lg="12" className="text-center">
                    <h2 className="section__title">Related Products</h2>
                </Col>
                <ProductsList data={related}/>
            </Row>
        </Container>
    </section>
    </Helmet>
    </>
    )
}

export default Product
