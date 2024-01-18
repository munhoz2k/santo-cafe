import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 32px;

  padding: 2.5rem 10rem;
`

export const CheckoutContainerMainTitle = styled.h1`
  margin-bottom: 15px;

  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
`

export const CheckoutAddressesContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 2.5rem;

  border-radius: 6px;
`

export const CheckoutAddressesHeader = styled.header`
  display: flex;
  gap: 8px;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddressesHeaderTitle = styled.div`
  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;

    margin-bottom: 2px;
  }

  p {
    color: ${(porps) => porps.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
`

export const CheckoutAddressesForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  height: 100%;

  div {
    display: flex;
    gap: 12px;
  }
`

export const CheckoutPaymentMethodContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  width: 40rem;
  padding: 2.5rem;
  margin-top: 12px;
`

export const PaymentMethodHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const PaymentMethodOptions = styled.div`
  display: flex;
  gap: 0.75rem;

  .active {
    background: ${(props) => props.theme['base-hover']};

    outline: 2px solid ${(props) => props.theme['base-subtitle']};
  }
`

export const PaymentMethodButtons = styled.button`
  background: ${(props) => props.theme['base-button']};

  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;
  width: 100%;

  border: none;
  border-radius: 6px;

  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }
`

export const CheckoutSelectedCoffesContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  width: 28rem;
  padding: 2.5rem;

  border-radius: 6px 44px;
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 1.5rem;
`

export const StandardPriceRow = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${(props) => props.theme['base-text']};

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`

export const TotalPriceRow = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${(props) => props.theme['base-subtitle']};

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
  }
`

export const ConfirmSelectedCoffeButton = styled.button`
  background: ${(props) => props.theme.yellow};
  color: white;

  width: 100%;
  padding: 0.75rem 0;

  border: none;
  border-radius: 6px;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
  }
`

export const MainPageButton = styled.button`
  background: ${(props) => props.theme.yellow};

  width: 100%;
  padding: 0.75rem 0;

  border: none;
  border-radius: 6px;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    text-decoration: none;
    color: white;
  }

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
  }
`
