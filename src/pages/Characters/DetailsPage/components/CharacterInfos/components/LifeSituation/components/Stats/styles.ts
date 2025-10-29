import type { themes } from '@themes/'
import styled, { css } from 'styled-components'

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  h2 {
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.XSMALL};
      font-family: ${theme.FONTS.SECONDARY};
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
    `}

    span {
      ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XLARGE};
        font-family: ${theme.FONTS.PRIMARY};
        font-weight: ${theme.FONT_WEIGHT.MEDIUM};
      `}
    }
  }

  gap: 12px;
`

interface StatsInputProps {
  color: keyof typeof themes.COLORS
  percentage: number
}

export const StatsInput = styled.div<StatsInputProps>`
  display: flex;

  width: 100%;
  height: 38px;

  background: linear-gradient(
    to right,
    ${({ theme, color, percentage }) =>
      `${theme.COLORS[color]} ${percentage}%,
     ${theme.COLORS.GRAY_900} ${percentage}%`}
  );

  align-items: center;
  justify-content: space-between;

  p {
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.MEDIUM};
      font-family: ${theme.FONTS.SECONDARY};
      font-weight: ${theme.FONT_WEIGHT.MEDIUM};
      color: ${theme.COLORS.GRAY_0};
    `}
  }

  padding: 0 20%;
`

interface BorderImageProps {
  inverted: boolean
}

export const BorderImage = styled.img<BorderImageProps>`
  position: absolute;

  z-index: 99;
  left: -16px;

  ${({ inverted }) => inverted && 'right: -16px; left: unset;'}
  transform: rotate(${({ inverted }) => (inverted ? '180deg' : '0deg')});

  height: 64px;
`

interface ButtonsProps {
  inverted: boolean
}

export const Buttons = styled.div<ButtonsProps>`
  display: flex;

  gap: 24px;

  ${({ inverted }) =>
    inverted &&
    `
    transform: rotate(180deg);
  `}

  align-items: center;
  justify-content: center;

  img {
    cursor: pointer;
  }
`
