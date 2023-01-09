import React,{ useState,useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Col,Row } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/Services'
import ProductsList from '../components/Ui/ProductsList'
import Clock from '../components/Ui/Clock'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'

const Home = () => {
  const year = new Date().getFullYear()
  const [trending,setTrending] = useState([])
  const [best,setBest] = useState([])
  const [mobile,setMobile] = useState([])
  const [wireless,setWireless] = useState([])
  const [popular,setPopular] = useState([])

  useEffect(() =>{
    const getProducts = () =>{
      let filterChairs = products.filter((item) => item.category === "chair")
      setTrending(filterChairs)

      let filterSofa = products.filter((item) => item.category === "sofa")
      setBest(filterSofa)

      let filterMobile = products.filter((item) => item.category === "mobile")
      setMobile(filterMobile)

      let filterWireless = products.filter((item) => item.category === "wireless")
      setWireless(filterWireless)

      let filterPopular = products.filter((item) => item.category === "watch")
      setPopular(filterPopular)
    }
    getProducts()
  },[])
  window.scroll(0,0)

  return (
  <>
    <Helmet title={''}>
      <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Trending Products In {year}</p>
              <h2>Make your interior modern and minimalistic</h2>
              <p>
                lorem ipsum Make your interior modern and minimalistic
                lorem ipsum Make your interior modern and minimalistic
                lorem ipsum Make your interior modern and minimalistic
              </p>
              <motion.button whileTap={{ scale:1.2 }} className="shop__btn">
                <Link to="shop">SHOP NOW</Link>  
              </motion.button>  
            </div>  
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="heroImg"/>   
            </div>  
          </Col> 
        </Row>  
      </Container>    
      </section>
      <Services/>
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trending}/>
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductsList data={best}/>
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality ArmChair</h3>
              </div>
              <Clock/>
              <motion.button whileTap={{ scale:1.2 }} className="shop__btn store__btn">
                <Link to="/shop" >visit store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="counter"/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductsList data={mobile}/>
            <ProductsList data={wireless}/>
          </Row>
        </Container>
      </section>
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Popular Products</h2>
            </Col>
            <ProductsList data={popular}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  </>
  )
}

export default Home