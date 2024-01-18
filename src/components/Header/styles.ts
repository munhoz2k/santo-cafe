import styled from 'styled-components'

export const LayoutHeader = styled.div`
  display: flex;
  flex: 1;

  padding: 2rem 10rem;
  height: 6.5rem;
  width: 100%;
`

export const InvisibleSeparatorBox = styled.div`
  min-width: 1.5rem;
  width: 100%;
`

export const LayoutNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 38px;
  gap: 0.75rem;
`

const BaseButton = styled.button`
  display: flex;
  align-items: center;

  padding: 0.5rem;

  border: none;
  border-radius: 6px;
`

export const LocationButton = styled(BaseButton)`
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};

  gap: 0.25rem;

  font-size: 0.875rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  white-space: nowrap;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CartButton = styled(BaseButton)`
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};

  &:hover {
    background: ${(props) => props.theme.yellow};
    cursor: pointer;
  }
`
