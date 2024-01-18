import styled from 'styled-components'

import background from '../../assets/background.png'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const IntroContainer = styled.div`
  background-image: url(${background});
  background-size: 100% 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5.75rem 10rem;
  min-height: 34rem;
  height: auto;
  width: 100%;
`

export const IntroContentContainer = styled.div`
  max-width: 36.25rem;
  min-height: 22.5rem;

  display: flex;
  flex-direction: column;
`

export const IntroTitleContainer = styled.div`
  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;

    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};

    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;

    line-height: 130%;
  }
`

export const IntroSeparatorBox = styled.div`
  flex: 1;
  min-height: 4.125rem;
`

export const IntroItemsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`

export const ItemsBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    button {
      border-radius: 16px;
      border: 0;

      height: 2rem;
      width: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    #item1 {
      background: ${(props) => props.theme['yellow-dark']};
    }

    #item2 {
      background: ${(props) => props.theme.yellow};
    }

    #item3 {
      background: ${(props) => props.theme['base-text']};
    }

    #item4 {
      background: ${(props) => props.theme.purple};
    }

    p {
      color: ${(props) => props.theme['base-text']};

      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      line-height: 130%;

      white-space: nowrap;
    }
  }
`

export const CoffeContainer = styled.div`
  padding: 2rem 10rem;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 130%;

    margin-bottom: 54px;
  }
`

export const CoffesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 40px 36px;
`
