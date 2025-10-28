import type { themes } from '@themes/'
import styled from 'styled-components'

interface ContainerProps {
  backgroundColor: keyof typeof themes.COLORS
}

export const Container = styled.button<ContainerProps>`
  padding: 12px 28px;

  background-color: ${({ theme, backgroundColor }) =>
    theme.COLORS[backgroundColor]};
  color: #fff;

  border: none;

  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY};

  cursor: pointer;

  transition: 0.5s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
