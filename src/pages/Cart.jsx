import React from 'react'
import CommonSection from '../components/Ui/CommonSection';
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import '../styles/cart.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import chair from '../assets/images/arm-chair-01.jpg'
import watch from '../assets/images/watch-01.jpg'
import phone from '../assets/images/phone-06.jpg'
import sofa from '../assets/images/single-sofa-04.png'
import table from '../assets/images/double-sofa-01.png'

const Cart = () => {
  return (
    <Helmet title={'Cart'}>
      <CommonSection title={'Shopping Cart'}/>
        <section>
          <Container>
            <Row>
              <Col lg='9'>
                <table className='table bordered'>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody className="align-items-center">
                    <tr>
                      <td><img src={chair} alt='cart'/></td>
                      <td>Modern Arm Chair</td>
                      <td>$256</td>
                      <td>2</td>
                      <td>
                        <motion.i whileTap={{ scale:1.2 }} className='ri-delete-bin-line'></motion.i>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={watch} alt='cart'/></td>
                      <td>Watch</td>
                      <td>$256</td>
                      <td>2</td>
                      <td>
                        <motion.i whileTap={{ scale:1.2 }} className='ri-delete-bin-line'></motion.i>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={phone} alt='cart'/></td>
                      <td>Phone</td>
                      <td>$256</td>
                      <td>2</td>
                      <td>
                        <motion.i whileTap={{ scale:1.2 }} className='ri-delete-bin-line'></motion.i>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={sofa} alt='cart'/></td>
                      <td>Sofa</td>
                      <td>$256</td>
                      <td>2</td>
                      <td>
                        <motion.i whileTap={{ scale:1.2 }} className='ri-delete-bin-line'></motion.i>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={table} alt='cart'/></td>
                      <td>Sofa double</td>
                      <td>$256</td>
                      <td>2</td>
                      <td>
                        <motion.i whileTap={{ scale:1.2 }} className='ri-delete-bin-line'></motion.i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>
              <Col lg='3' md='6'>
                <div className="totals gap-3">
                  <h6 className="d-flex align-items-center justify-content-between">
                    SubTotal
                    <span className="fs-4 fw-bold">$1200</span>
                  </h6>
                </div>
                <p className="fs-6 mt-2">Taxes and shipping will calculated at checkout.</p>
                <div className="buttons">
                  <motion.button whileTap={{ scale:1.2 }} className="shop__btn w-100">
                    <Link to="/checkout">CheckOut</Link>
                  </motion.button>
                  <motion.button whileTap={{ scale:1.2 }} className="shop__btn w-100">
                    <Link to="/shop">Continue shopping</Link>
                  </motion.button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default Cart