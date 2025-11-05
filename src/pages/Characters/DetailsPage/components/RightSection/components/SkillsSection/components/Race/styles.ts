import styled, { css } from 'styled-components'

export const RaceTypeContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  margin-bottom: 16px;
`

export const RaceTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1000};
    font-family: ${theme.FONTS.PRIMARY};
    font-size: ${theme.FONT_SIZE.XXLARGE};
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
  `};
`

export const RaceListContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
`

export const RaceItem = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_950};
      font-family: ${theme.FONTS.PRIMARY};
      font-size: ${theme.FONT_SIZE.LARGE};
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
    `};
  }

  p {
    ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_600};
      font-family: ${theme.FONTS.SECONDARY};
      font-size: ${theme.FONT_SIZE.SMALL};
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
    `};
  }
`
