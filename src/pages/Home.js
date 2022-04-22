import React from 'react'
import { useGlobalContext } from '../contex/contextapi'
import styled from 'styled-components'

const Home = () => {
  const data = useGlobalContext()
  console.log(data)

  return (
    <Wrapper>
      <div className='hero-image'>
        <div className='hero-text'>
          <h1>Wedding Ceromany</h1>
          <p>Sania Angra &#38; Inam Ul Rehman</p>
        </div>
      </div>

      <div className='featured'>
        <div className='time'>
          <h2>Time</h2>
          <p>Tuesday 3rd May 2022 </p>
        </div>
        <div className='address'>
          <h2 className='address'>Address</h2>
          <p className='address'>Sai Bhakti Dham</p>
          <p className='address'>
            52 Mclntyre pl Unit A, Kitchener, On, N2R1G3
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-top: 0px;
  .home-page {
    min-height: calc(85vh);
    img {
      width: 100%;

      object-fit: cover;
      height: 85vh;
    }
  }
  text {
    position: absolute;
  }
  .featured {
    background-color: var(--primary-2);
    height: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }
  .time {
    color: white;
    background-color: rgba(0, 0, 0, 0.3);

    color: var(--primary-8);
  }
  .address {
    color: var(--primary-8);
  }
`
export default Home
