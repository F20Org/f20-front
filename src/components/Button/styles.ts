import styled from 'styled-components'

export const Container = styled.button`
  padding: 12px 28px;

  background-color: ${(props) => props.theme.COLORS.PRIMARY_COLOR};
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
