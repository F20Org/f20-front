import styled, { css } from 'styled-components'

export const AttributesContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 24px;

  width: 100%;

  h2 {
    ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_1000};
      font-size: ${theme.FONT_SIZE.LARGE};
      font-weight: ${theme.FONT_WEIGHT.BOLD};
    `}
  }
`
