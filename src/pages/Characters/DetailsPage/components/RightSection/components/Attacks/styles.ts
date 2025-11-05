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
    justify-content: center;

    gap: 4px;

    p {
      width: 100%;
      text-align: center;

      span {
        ${({ theme }) => css`
          font-family: ${theme.FONTS.SECONDARY};
          font-size: ${theme.FONT_SIZE.SMALL};
          color: ${theme.COLORS.GRAY_600};
        `};
        width: 100%;
        text-align: center;
      }
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
      display: flex;
      flex-direction: column;

      ${({ theme }) => css`
        font-family: ${theme.FONTS.SECONDARY};
        font-size: ${theme.FONT_SIZE.SMALL};
        color: ${theme.COLORS.GRAY_600};
      `};

      gap: 4px;

      width: 100%;
      text-align: center;

      span {
        ${({ theme }) => css`
          font-family: ${theme.FONTS.SECONDARY};
          font-size: ${theme.FONT_SIZE.SMALL};
          color: ${theme.COLORS.GRAY_600};

          width: 100%;
          text-align: center;
        `};
      }
    }

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  }

  gap: 14px;

  width: 100%;
`

export const AttacksInnerAccordionDetails = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({ theme }) => css`
      font-family: ${theme.FONTS.SECONDARY};
      font-size: ${theme.FONT_SIZE.SMALL};
    `}

    p {
      display: flex;
      flex-direction: column;

      width: 100%;
      text-align: center;

      justify-content: center;
      align-items: center;

      gap: 4px;

      ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_950};
      `};

      span {
        ${({ theme }) => css`
          color: ${theme.COLORS.GRAY_600};
        `};
        width: 100%;
        text-align: center;
      }

      img {
        cursor: pointer;
      }
    }
  }

  gap: 14px;

  width: 100%;
`
