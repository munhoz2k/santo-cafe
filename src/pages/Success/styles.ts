import styled from 'styled-components'

export const SuccessContainer = styled.div`
  background: ${(props) => props.theme.background};

  padding: 0 10rem;
`

export const SuccessHeader = styled.div`
  margin-top: 5rem;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;

    margin-bottom: 0.25rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    font-variation-settings: 'wdth' 100;
  }
`

export const SuccessMainContent = styled.div`
  display: flex;
  align-items: center;
  gap: 102px;

  margin-top: 1.75rem;
`

export const SuccessDeliveryInfo = styled.div`
  background: linear-gradient(to right, #dbac2c, #8047f8);

  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;
  z-index: 1;

  padding: 2.5rem;
  width: 526px;

  border-radius: 6px 36px;

  &::before {
    background: ${(props) => props.theme.background};
    content: '';

    position: absolute;
    z-index: -1;

    border-radius: 5px 35px;

    height: calc(100% - 2px);
    width: calc(100% - 2px);

    top: 1.1px;
    left: 1.1px;
  }
`

interface infoBoxProps {
  variant: 1 | 2 | 3
}

const infoBoxVariants = {
  1: '#8047F8',
  2: '#DBAC2C',
  3: '#C47F17',
}

export const SuccessInfoBox = styled.div<infoBoxProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    display: flex;
    align-items: center;

    background: ${(props) => infoBoxVariants[props.variant]};
    padding: 0.5rem;

    border: none;
    border-radius: 1000px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 700;
  }
`
