import { AccordionSummary } from '@mui/material'
import styled from 'styled-components'
import { css } from 'styled-components'

export const StyledAccordionSummary = styled(AccordionSummary)`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.PRIMARY};
    font-size: ${theme.FONT_SIZE.LARGE};
  `}
`

export const RollsAccordionDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  gap: 14px;

  width: 100%;
`

export const RollItem = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;

  width: 100%;
  min-width: 240px;

  h3 {
    ${({ theme }) => css`
      font-family: ${theme.FONTS.PRIMARY};
      font-size: ${theme.FONT_SIZE.LARGE};
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      color: ${theme.COLORS.GRAY_1000};
    `}
  }

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    span {
      ${({ theme }) => css`
        font-family: ${theme.FONTS.SECONDARY};
        font-size: ${theme.FONT_SIZE.XXLARGE};
        font-weight: ${theme.FONT_WEIGHT.BOLD};
        color: ${theme.COLORS.GRAY_1000};
      `}
    }

    p {
      ${({ theme }) => css`
        font-family: ${theme.FONTS.SECONDARY};
        font-size: ${theme.FONT_SIZE.SMALL};
        font-weight: ${theme.FONT_WEIGHT.REGULAR};
        color: ${theme.COLORS.GRAY_900};
      `}
    }
  }
`
