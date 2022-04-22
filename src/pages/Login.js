import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = { name, email }
    console.log(newPerson)
    setName('')
    setEmail('')
    navigate('/dashboard')
    setUser(newPerson)
  }
  return (
    <Wrapper>
      <div className='login'>
        <div className='title'>
          <p>Please provide your details</p>
          <p>So, i can print your card</p>
        </div>
        <form className='form' onSubmit={handleSubmit}>
          <div>
            <label className='form-label' htmlFor='name'>
              First Name
            </label>
            <input
              className='form-input'
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className='form-label' htmlFor='email'>
              Last Name
            </label>
            <input
              className='form-input'
              type='text'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='btn-container'>
            <button className='btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .btn-container {
    text-align: center;
    margin-top: 1rem;
  }
`

export default Login
