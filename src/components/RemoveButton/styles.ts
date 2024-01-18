import styled from 'styled-components'

export const RemoveButtonContainer = styled.button`
  background: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;

  gap: 4px;
  padding: 0 8px;

  border: none;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
  }

  p {
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
  }

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme['base-hover']};
  }
`
