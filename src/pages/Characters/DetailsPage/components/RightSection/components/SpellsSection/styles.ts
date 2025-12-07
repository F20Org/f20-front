import styled, { css } from 'styled-components'
import { StyledAccordionSummary } from '../Rolls/styles'

export const SpellsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SpellsStyledAccordionSummary = styled(StyledAccordionSummary)`
  display: flex;
  flex-direction: row;

  div {
    ${({ theme }) => css`
      font-family: ${theme.FONTS.SECONDARY};
      font-size: ${theme.FONT_SIZE.SMALL};
      font-weight: ${theme.FONT_WEIGHT.MEDIUM};
    `}

    span {
      ${({ theme }) => css`
        font-family: ${theme.FONTS.PRIMARY};
        font-size: ${theme.FONT_SIZE.LARGE};
        font-weight: ${theme.FONT_WEIGHT.MEDIUM};
      `}
    }

    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const InnerAdjust = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`

export const SpellInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 180px;

  gap: 4px;

  div {
    ${({ theme }) => css`
      font-family: ${theme.FONTS.SECONDARY};
      font-size: ${theme.FONT_SIZE.SMALL};
    `}

    ${({ theme }) => css`
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
    `}

    span {
      ${({ theme }) => css`
        font-weight: ${theme.FONT_WEIGHT.BOLD};
      `}
    }
  }
`

export const SpellDescription = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.SECONDARY};
    font-size: ${theme.FONT_SIZE.SMALL};
  `}

  width: 100%;
`
