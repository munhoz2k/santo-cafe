import styled from 'styled-components'

export const CoffeCardSmallContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 24px;
  margin-bottom: 24px;

  border-bottom: 1.5px solid ${(props) => props.theme['base-button']};

  img {
    width: 64px;
  }
`

export const CoffeCardSmallMain = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const CoffeCardSmallTitle = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
`

export const CoffeCardSmallButtons = styled.div`
  display: flex;
  gap: 8px;

  margin-top: 8px;
`

export const CoffeCardSmallPrice = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 700;
`
