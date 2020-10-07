import styled from 'styled-components'

export const AboutContainer = styled.div`
    background: #393e46;
    color: #fff;
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    max-width: 80%;
    margin: 0 auto;
    justify-content: center;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    height: 90vh;
    margin-top: 10vh;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-row: 1/2;
    grid-column: 2/3;
    @media (max-width: 768px) {
        grid-row: 2/3;
        grid-column: 1/2;
    }
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-row: 1/2;
    grid-column: 1/2;
    @media (max-width: 768px) {
        grid-row: 1/2;
        grid-column: 1/2;
    }
`

export const TextWrapper = styled.div`
    width: 100%;
`

export const Header = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #f7f8fa;

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }
`

export const Description = styled.p`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #010606;
`
export const ImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    
`

export const Img = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 50%;
    margin: 25px 0;
    @media screen amd (max-width: 1200px) {
        width: 300px;
        height: 300px;
    }
    @media screen and (max-width: 500px) {
        width: 250px;
        height: 250px;
    }
`


