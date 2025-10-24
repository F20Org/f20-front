import styled, { css } from 'styled-components'

export const OptionCardContainer = styled.div`
  height: 240px;
  width: 100%;
  min-width: 320px;

  border: 1px solid #e6e6f0;
  border-radius: 8px;

  padding: 0px 12px;

  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: 0.5s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: scale(105%);
  }

  @media (max-width: 772px) {
    height: fit-content;
    padding: 16px 12px;
  }
`

export const OptionIcon = styled.img`
  width: 160px;

  @media (max-width: 772px) {
    width: 90px;
  }
`

export const OptionTitle = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.PRIMARY};
    font-size: ${theme.FONT_SIZE.XXXLARGE};
    color: ${theme.COLORS.GRAY_1000};

    text-align: center;
  `}

  @media (max-width: 772px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.XXLARGE};
  }
`

export const OptionDescription = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.SECONDARY};
    font-size: ${theme.FONT_SIZE.MEDIUM};
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    color: ${theme.COLORS.GRAY_1000};

    text-align: center;
  `}

  @media (max-width: 772px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  }
`
