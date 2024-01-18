import styled from 'styled-components'

export const InputStepperContainer = styled.div`
  background: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: none;
  border-radius: 6px;
  box-shadow: 0;

  width: 4.5rem;
  padding: 0.5rem;
`

export const InputStepperButton = styled.button`
  display: flex;

  border: none;
  background: none;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover svg {
    cursor: pointer;
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const InputStepperQuantity = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
`
