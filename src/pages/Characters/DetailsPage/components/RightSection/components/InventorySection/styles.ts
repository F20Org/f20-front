import { StyledAccordionSummary } from 'components/Accordion/StyledAccordionSummary/styles'
import styled, { css } from 'styled-components'

export const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InventoryHeader = styled.div`
  display: flex;

  width: 100%;
  justify-content: space-between;

  div {
    ${({ theme }) => css`
      font-family: ${theme.FONTS.SECONDARY};
      font-size: ${theme.FONT_SIZE.MEDIUM};
      color: ${theme.COLORS.GRAY_950};
      font-weight: ${theme.FONT_WEIGHT.BOLD};
    `}

    span {
      ${({ theme }) => css`
        font-family: ${theme.FONTS.SECONDARY};
        font-size: ${theme.FONT_SIZE.MEDIUM};
        color: ${theme.COLORS.GRAY_950};
        font-weight: ${theme.FONT_WEIGHT.REGULAR};
      `}
    }
  }

  margin-bottom: 8px;
`

export const InventoryStyledAccordionSummary = styled(StyledAccordionSummary)`
  display: flex;
  flex-direction: row;

  div {
    ${({ theme }) => css`
      font-family: ${theme.FONTS.SECONDARY};
      font-size: ${theme.FONT_SIZE.SMALL};
    `}

    span {
      ${({ theme }) => css`
        font-family: ${theme.FONTS.PRIMARY};
        font-size: ${theme.FONT_SIZE.LARGE};
      `}

      display: flex;
      align-items: center;
      gap: 14px;
    }

    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ItemDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SMALL};
    color: ${theme.COLORS.GRAY_600};
  `};
`
