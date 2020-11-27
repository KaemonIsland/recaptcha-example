import React from 'react'
import styled from 'styled-components'
import { Form } from './FormStart'

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(white, lightgreen);
  height: 100vh;

  & h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`

const FormContainer = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0.3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`

function App() {
  return (
    <AppContainer>
      <h1>User Registration</h1>
      <FormContainer>
        <Form />
      </FormContainer>
    </AppContainer>
  )
}

export default App
