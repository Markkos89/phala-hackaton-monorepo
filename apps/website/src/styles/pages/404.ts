import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.primary};
    color: ${theme.colors.primaryText};
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      display: flex;
      align-items: center;
      font-size: 5rem;
      gap: 1rem;
      border: 1px solid ${theme.colors.primaryText};
      padding: 1rem 2rem;
      border-radius: 2rem;
    }
    span {
      font-size: 3rem;
    }
  `}
`
