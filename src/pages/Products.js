import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'
import styled from 'styled-components'

const Products = () => {
  return (
    <>
      <Wrapper>
        <div className='header '>
          <h2>Family Members</h2>
        </div>
        <div className='products section'>
          {data.map((item) => {
            const { id, name } = item
            return (
              <div key={id} className='product-header '>
                <div className='product-footer'>
                  <p className='title'>{name}</p>
                  <Link className='btn' to={`/products/${id}`}>
                    More info
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.article`
  .product-header {
    text-align: center;
  }
  .header {
    text-align: center;
    display: grid;
  }
  .product-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
    margin: 0 auto;
  }
`
export default Products
