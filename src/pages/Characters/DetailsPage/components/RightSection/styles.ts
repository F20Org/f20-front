import type { themes } from '@themes/'
import styled, { css } from 'styled-components'

export const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 16px;
`

export const RightNavBar = styled.nav`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;

    align-items: center;
    justify-content: space-between;

    list-style: none;
  }
`

interface NavBarOptionProps {
  isSelected: boolean
  selectedColor: keyof typeof themes.COLORS
}

export const NavBarOption = styled.li<NavBarOptionProps>`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 8px;
  padding: 12px 0;

  flex: 1;
  cursor: pointer;

  ${({ theme, isSelected, selectedColor }) => css`
    color: ${isSelected ? theme.COLORS[selectedColor] : theme.COLORS.GRAY_1000};
    font-size: ${theme.FONT_SIZE.SMALL};
    font-weight: ${theme.FONT_WEIGHT.MEDIUM};

    border-bottom: 2px solid
      ${isSelected ? theme.COLORS[selectedColor] : 'black'};
  `}

  img {
    width: 18px;
    height: 18px;
  }
`
