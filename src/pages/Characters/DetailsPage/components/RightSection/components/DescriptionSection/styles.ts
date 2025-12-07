import styled from 'styled-components'

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const InfoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const InfoLabel = styled.label`
  ${({ theme }) => `
    font-family: ${theme.FONTS.SECONDARY};
    font-size: ${theme.FONT_SIZE.MEDIUM};
    color: ${theme.COLORS.GRAY_950};
    font-weight: ${theme.FONT_WEIGHT.BOLD};
  `}
`

export const InfoTextarea = styled.textarea`
  border: none;
  outline: none;

  width: 100%;
  height: 120px;

  padding: 12px;

  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  resize: none;

  ${({ theme }) => `
    font-family: ${theme.FONTS.SECONDARY};
    font-size: ${theme.FONT_SIZE.SMALL};
    color: ${theme.COLORS.GRAY_950};
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
  `}
`
