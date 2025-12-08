import styled, { css, keyframes } from 'styled-components'

interface ExpertiseSectionContainerProps {
  expanded: boolean
}

const expandWidth = keyframes`
  from {
    right: -320px;
  }
  to {
    right: 0px;
  }
`

const collapseWidth = keyframes`
  from {
    right: 0px;
  }
  to {
    right: -320px;
    }
`

export const ExpertiseSectionContainer = styled.div<ExpertiseSectionContainerProps>`
  position: absolute;
  top: 0px;
  right: 0px;

  display: flex;
  flex-direction: column;

  gap: 16px;

  width: 320px;
  height: 100%;

  border: 2px solid ${({ theme }) => theme.COLORS.RED_PRIMARY_COLOR};
  background-color: white;

  animation: ${({ expanded }) => (expanded ? expandWidth : collapseWidth)};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 16px;

  overflow: hidden;

  h2 {
    ${({ theme }) => css`
      font-family: ${theme.FONTS.PRIMARY};
      color: ${theme.COLORS.GRAY_1000};
      font-size: ${theme.FONT_SIZE.XXLARGE};
      font-weight: ${theme.FONT_WEIGHT.MEDIUM};
    `}
  }
`

export const ExpertiseImage = styled.img`
  position: absolute;

  left: -32px;
  top: 50%;
  transform: translateY(-50%);

  height: 150px;
  width: fit-content;

  cursor: pointer;
`
