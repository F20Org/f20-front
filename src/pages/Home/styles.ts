import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 48px;

  height: 100%;
  width: 100%;

  overflow-y: scroll;
`

export const Title = styled.div`
  width: 100%;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.SECONDARY};
    font-size: ${theme.FONT_SIZE.XLARGE};
    color: ${theme.COLORS.GRAY_1000};

    text-align: center;
  `}

  span {
    ${({ theme }) => css`
      font-family: ${theme.FONTS.PRIMARY};
      font-size: ${theme.FONT_SIZE.XXXXLARGE};
    `}
  }

  @media (max-width: 772px) {
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.LARGE};
    `}

    span {
      ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XXXLARGE};
      `}
    }
  }
`

export const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: 24px;
  padding: 24px 36px;

  width: 100%;

  align-items: center;
  justify-content: center;
`
