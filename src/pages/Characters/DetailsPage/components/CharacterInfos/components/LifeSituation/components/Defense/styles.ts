import styled, { css } from 'styled-components'

export const DefenseContainer = styled.div`
  width: 100%;
  height: 58px;
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 8px;
  margin-top: 16px;

  background-color: ${({ theme }) => theme.COLORS.BROWN_PRIMARY_COLOR};
  border: 3px solid black;

  span {
    ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_0};
      font-size: ${theme.FONT_SIZE.MEDIUM};
      font-family: ${theme.FONTS.SECONDARY};
      font-weight: ${theme.FONT_WEIGHT.MEDIUM};
    `}
  }

  padding-left: 64px;
  padding-right: 16px;
`

export const DefenseImage = styled.div`
  position: absolute;
  display: flex;

  align-items: center;
  justify-content: center;

  min-width: 84px;
  min-height: 84px;

  z-index: 99;
  left: -24px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  h3 {
    ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_0};
      font-size: ${theme.FONT_SIZE.XLARGE};
      font-family: ${theme.FONTS.SECONDARY};
      font-weight: ${theme.FONT_WEIGHT.MEDIUM};
    `}
  }
`

export const DefensePiece = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;

  width: 100%;

  align-items: center;
  justify-content: center;

  border-bottom: 1px solid white;

  p {
    ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_0};
      font-size: ${theme.FONT_SIZE.SMALL};
      font-family: ${theme.FONTS.SECONDARY};
      font-weight: ${theme.FONT_WEIGHT.MEDIUM};
    `}
  }

  input {
    background: none;
    color: ${({ theme }) => theme.COLORS.GRAY_0};
    border: 0;

    width: 100%;

    text-align: center;

    -moz-appearance: textfield;

    &:focus {
      outline: none;
    }
  }
`
