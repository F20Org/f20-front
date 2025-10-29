import styled, { css } from 'styled-components'

export const DefenseContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 24px;
`

export const DefenseMain = styled.div`
  width: 100%;
  height: 64px;

  display: flex;
  flex-direction: row !important;

  align-items: center;
  justify-content: center;

  padding-left: 64px;
  padding-right: 16px;

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
`

export const DefenseTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XLARGE};
    font-family: ${theme.FONTS.PRIMARY};
    font-weight: ${theme.FONT_WEIGHT.MEDIUM};
  `}
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
