import React ,{useState } from 'react'
import CommonSection from '../components/Ui/CommonSection';
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products' 
import ProductsList from '../components/Ui/ProductsList'

const Shop = () => {
  const [productData,setProductData] = useState(products)

  const handleFilter = (e) =>{
      const filterValue = e.target.value;

      if(filterValue === "all"){
        setProductData(products)
      }

      if(filterValue === "sofa"){
        let filterProducts = products.filter(( item ) => item.category ==="sofa") 
        setProductData(filterProducts)
      }

      if(filterValue === "mobile"){
        let filterProducts = products.filter(( item ) => item.category ==="mobile") 
        setProductData(filterProducts)
      }

      if(filterValue === "chair"){
        let filterProducts = products.filter(( item ) => item.category ==="chair") 
        setProductData(filterProducts)
      }

      if(filterValue === "watch"){
        let filterProducts = products.filter(( item ) => item.category ==="watch") 
        setProductData(filterProducts)
      }

      if(filterValue === "wireless"){
        let filterProducts = products.filter(( item ) => item.category ==="wireless") 
        setProductData(filterProducts)
      }
  }

  const handleSearch = (e) =>{
    const searchValue = e.target.value;

    const filterProducts = products.filter((item) => item.productName.toLowerCase().includes(searchValue.toLowerCase()));
    setProductData(filterProducts)
  }

  window.scroll(0,0)

  return (
    <Helmet title={'shop'}>
        <CommonSection title={'Products'}/>
        <section>
          <Container>
            <Row>
              <Col lg='3' md='6'>
                <div className="filter__widget">
                  <select onChange={handleFilter}>
                    <option>Filter By Category</option>
                    <option value="all">All products</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="chair">Chair</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </div>
              </Col>
              <Col lg='3' md='6' className="text-end">
                <div className="filter__widget">
                  <select>
                    <option>Sort By</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </Col>
              <Col lg='6' md='12'>
                <div className="search__box">
                  <input type="text" placeholder="search product ..." onChange={handleSearch}/>
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="pt-0">
        <Container>
          <Row>
            {
              productData.length > 0 ? <ProductsList data={productData}/> 
                : 
              <>
              <span>
                <i className="ri-file-damage-line ri-10x text-muted"></i>
              </span>
              <h1 className="text-muted">No Products Were Found</h1>
              </>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop