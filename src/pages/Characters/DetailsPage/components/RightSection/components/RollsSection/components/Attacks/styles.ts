import { AccordionSummary } from '@mui/material'
import styled from 'styled-components'
import { css } from 'styled-components'

export const StyledAccordionSummary = styled(AccordionSummary)`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.PRIMARY};
    font-size: ${theme.FONT_SIZE.LARGE};
  `}
`

export const StyledInnerAccordionSummary = styled(AccordionSummary)`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.PRIMARY};
    font-size: ${theme.FONT_SIZE.LARGE};
  `}

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      width: 100%;
      text-align: center;
    }
  }
`

export const AttacksAccordionDetails = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 8px 16px;

    p {
      ${({ theme }) => css`
        font-family: ${theme.FONTS.SECONDARY};
        font-size: ${theme.FONT_SIZE.SMALL};
        color: ${theme.COLORS.GRAY_600};
      `};

      width: 100%;
      text-align: center;
    }

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  }

  gap: 14px;

  width: 100%;
`
