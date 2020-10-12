import styled from 'styled-components'

export const CardContainer = styled.div`
    grid-area: col2;
    width: 500px;
    height: 550px;
    background: #0092CA;
    border-radius: 5px;
    margin-top: 70px;
    margin-right: 50px;
    justify-self: flex-end;
    align-self: center;
    @media (max-width: 1200px) {
        width: 350px
    }
    @media screen and (max-width: 768px) {
        margin: 50px 0;
        width: 250px;
        justify-self: center;
    }
`

export const Title = styled.div`
    width: 100%;
    text-align: center;
    margin: 25px 0;
    font-size: 36px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin: auto;
`
export const Input = styled.input.attrs({
    type: "text",
  })`
  height: 50px;
    border-radius: 5px;
    border: none;
    margin-bottom: 30px;
    font-size: 28px;
    font-family: 'Roboto', sans-serif;
    padding-left: 10px;
    &:focus {
        outline: none;
    }
  `
export const Name = styled(Input).attrs({
    type: 'text',
    name: 'name',
    placeholder: 'Név',
})``

export const Email = styled(Input).attrs({
    type: 'email',
    name: 'email',
    placeholder: 'Email',
})``

export const Subject = styled.textarea.attrs({
    name: 'message',
})`
    height: 150px;
    border-radius: 5px;
    border: none;
    margin-bottom: 30px;
    padding: 10px;
    resize: none;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    &:focus {
        outline: none;
    }
`

export const Button = styled.input.attrs({
    type: "submit",
    value: 'Küldés',
  })`
  width: 200px;
  height: 75px;
  background: #393E46;
  border: none;
  font-family: 'Roboto', sans-serif;
  color: #eee;
  font-size: 24px;
  text-align: center;
  border-radius: 5px;
`
