import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <div className='hero-image2'>
        <div class='content'>
          <h1>Angra family</h1>
          <p>
            We are very happy to announce this news with every one our daughter
            is getting married.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .content {
    position: fixed;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    padding: 2px;
  }
`
export default About
