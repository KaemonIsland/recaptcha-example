import React from 'react'
import styled from 'styled-components'
import ReCaptchaV2 from 'react-google-recaptcha'

const Input = styled.input`
  border: 1px solid black;
  border-radius: 0.3rem;
  padding: 0.3rem;
  font-size: 1rem;
  width: 20rem;
  display: block;
  margin: 0.5rem 0 1rem 0;
  transition: all 200ms ease-in;
  &:focus,
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const Label = styled.label`
  font-weight: 600;
  font-size: 1.1rem;
`

const ReCaptchaContainer = styled.div`
  margin: 1rem 0;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  border: 1px solid black;
  font-size: 0.9rem;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: white;
  transition: all 200ms ease-in;
  &:not([disabled]):hover {
    background-color: lightgrey;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

const ActionButton = styled(Button)`
  background-color: #caf7ca;

  &:not([disabled]):hover {
    background-color: lightgreen;
  }
`

const defaultForm = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  token: '',
}

/**
 * Form for demonstrating ReCaptcha verification on submission
 *
 * @returns {function} - React component
 */
export const Form = () => {
  const [form, setForm] = React.useState(defaultForm)
  const isDisabled = !Object.values(form).every((val) => val !== '')

  /**
   * Updates the form values for each input
   *
   * @param {object} event - Input event object
   */
  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  /**
   * Clears all from values
   */
  const clearForm = () => {
    setForm(defaultForm)
  }

  /**
   * Adds the token to the form object
   *
   * @param {string} token - response from ReCaptcha
   */
  const handleToken = (token) => {
    setForm((currentForm) => {
      return { ...currentForm, token }
    })
  }

  /**
   * Removes the token from the from object
   */
  const handleExpire = () => {
    setForm((currentForm) => {
      return { ...currentForm, token: null }
    })
  }

  /**
   * Handles form submission
   *
   * @param {object} event - Form submit event object
   */
  const handleSubmit = (event) => {
    event.preventDefault()

    console.log({ form })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Name:
          <Input
            onChange={handleChange}
            id="name"
            placeholder="Billiam"
            type="text"
            name="name"
            value={form.name}
            required
          />
        </Label>
        <Label htmlFor="email">
          Email:
          <Input
            onChange={handleChange}
            id="email"
            placeholder="example@email.com"
            type="email"
            name="email"
            value={form.email}
            required
          />
        </Label>
        <Label htmlFor="password">
          Password:
          <Input
            onChange={handleChange}
            id="password"
            type="password"
            name="password"
            value={form.password}
            required
          />
        </Label>
        <Label htmlFor="passwordConfirmation">
          Confirm Password:
          <Input
            onChange={handleChange}
            id="passwordConfirmation"
            type="password"
            name="passwordConfirmation"
            value={form.passwordConfirmation}
            required
          />
        </Label>
        <ReCaptchaContainer>
          <ReCaptchaV2
            sitekey={process.env.REACT_APP_SITE_KEY}
            onChange={handleToken}
            onExpire={handleExpire}
          />
        </ReCaptchaContainer>
        <ButtonContainer>
          <Button type="button" onClick={clearForm}>
            Clear
          </Button>
          <ActionButton type="submit" disabled={isDisabled}>
            Submit
          </ActionButton>
        </ButtonContainer>
      </form>
    </div>
  )
}
