import styled from 'styled-components'

const BaseInputContainer = styled.div`
  position: relative;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: left;
`
export const DefaultInputContainer = styled(BaseInputContainer)``

export const OptionalInputContainer = styled(BaseInputContainer)`
  &::after {
    position: absolute;
    display: flex;
    align-items: center;

    content: 'Opcional';

    right: 0.75rem;
    height: 100%;

    color: ${(props) => props.theme['base-label']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
  }
`
export const DefaultBaseInput = styled.input`
  position: relative;

  background: ${(props) => props.theme['base-input']};

  width: ${(props) => props.width}px;
  height: 2.625rem;
  padding: 0.75rem;

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
