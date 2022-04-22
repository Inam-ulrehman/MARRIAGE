import React from 'react'
import styled from 'styled-components'
import sania from '../images/sania.jpeg'
import inam from '../images/inam.jpeg'
import momdad from '../images/Mumdad.jpeg'
import wedding from '../images/wedding.jpg'

const Dashboard = ({ user }) => {
  console.log(user.name, user.email)
  return (
    <Wrapper>
      <div className='hero-image1'>
        <div className='title'>
          <h4>Wedding invitation</h4>
          <div className='title-underline'></div>
        </div>
        <div>
          <div className='couple-pic'>
            <div className='img1'>
              <div>
                <img className='sania' src={sania} alt='' />
              </div>
            </div>
            <div className='img2'>
              <div>
                <img className='inam' src={inam} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='middle'>
          <h3 className='title'>
            Dear,{user.name} {user.email}
          </h3>
          <div className='title-underline'></div>
          <div className='title'>
            <p className='invite'>
              We want to invite you for Our daughter Sania Angra's wedding
            </p>
            <p className='invite'>Tuesday 3rd may 2022</p>
          </div>
        </div>
        {/* mommy dady  */}
        <div className='momdad'>
          <div className='momdad-img'>
            <img src={momdad} alt='' />
          </div>

          <div className='bagwan'>
            <img src={wedding} alt='' />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  color: var(--primary-2);
  .couple-pic {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }
  .invite {
    margin: 0;
  }
  .momdad {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    margin-top: 1rem;
  }
  .momdad-img {
    margin-left: 0.5rem;
    img {
      height: 130px;
      border-radius: var(--borderRadius);
    }
  }
  .bagwan {
    img {
      height: 130px;
      border-radius: var(--borderRadius);
    }
  }
`
export default Dashboard
