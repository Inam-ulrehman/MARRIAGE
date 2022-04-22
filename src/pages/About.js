import React from 'react'
import styled from 'styled-components'
import video from '../images/video.mp4'

const About = () => {
  return (
    <Wrapper>
      <div>
        <video className='videoTag' autoPlay loop>
          <source src={video} type='video/mp4' />
        </video>
        <div class='content'>
          <h1>Sania my Love</h1>
          <p>
            I always wanted to see you happy and healthy and i'm very happy to
            see you in a bride suite lol
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
