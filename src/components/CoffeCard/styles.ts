import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 19.375rem;
  width: 16rem;
  border-radius: 6px 36px;

  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
  }
`

export const CoffeLabel = styled.label`
  display: flex;
  gap: 4px;
  margin-top: 12px;

  p {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    font-size: 0.625rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const CoffeDescription = styled.div`
  width: 13.5rem;

  h2 {
    margin-top: 16px;
    margin-bottom: 8px;

    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    line-height: 1.625rem;
    text-align: center;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.1375rem;
    text-align: center;
  }
`

export const CoffeCardSeparator = styled.div`
  display: flex;
  flex-grow: 1;
`

export const AddCoffeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 13rem;
  height: 2.375rem;

  margin-bottom: 20px;
`

export const CoffePriceSpan = styled.span`
  color: ${(props) => props.theme['base-text']};

  display: flex;
  align-items: center;
  gap: 0.125rem;

  .moeda {
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  .valor {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }
`

export const CoffeQuantitySelectionContainer = styled.div`
  display: flex;
  gap: 8px;

  > a {
    background: ${(props) => props.theme['purple-dark']};

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    padding: 0.5rem;

    border-radius: 10px;
    border: none;
  }

  > a:hover {
    background: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`
