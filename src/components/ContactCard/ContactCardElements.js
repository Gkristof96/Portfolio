import styled from 'styled-components'

export const CardContainer = styled.div`
    grid-area: col2;
    width: 500px;
    height: 650px;
    background: #0092CA;
    border-radius: 5px;
    margin-right: 50px;
    justify-self: flex-end;
    align-self: center;
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

export const Name = styled.input`
    height: 75px;
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

export const Email = styled.input`
    height: 75px;
    border-radius: 5px;
    border: none;
    margin-bottom: 30px;
`
export const Subject = styled.textarea`
    height: 150px;
    border-radius: 5px;
    border: none;
    margin-bottom: 30px;
    padding: 10px;
    resize: none;
`

export const Button = styled.input.attrs({
    type: "submit",
    value: 'Send',
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
