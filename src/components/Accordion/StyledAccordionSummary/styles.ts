import { AccordionSummary } from '@mui/material'
import styled, { css } from 'styled-components'

export const StyledAccordionSummary = styled(AccordionSummary)`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.PRIMARY};
    font-size: ${theme.FONT_SIZE.LARGE};
  `}
`
