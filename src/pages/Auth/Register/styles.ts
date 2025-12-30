import styled, { css } from 'styled-components'

import Banner from 'assets/images/banner.jpg'

export const LoginContainer = styled.div`
  display: flex;

  height: 100%;
  width: 100%;
`

export const ImageContainer = styled.div`
  flex: 1;
  background: url(${Banner}) no-repeat center center;

  @media (max-width: 864px) {
    display: none;
  }
`

export const FormContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;

    width: 64%;

    gap: 24px;
  }

  p {
    margin-top: 16px;

    ${({ theme }) => css`
      font-family: ${theme.FONTS.SECONDARY};
      font-size: ${theme.FONT_SIZE.SMALL};
      color: ${theme.COLORS.GRAY_700};
      text-align: center;
    `}

    a {
      ${({ theme }) => css`
        font-family: ${theme.FONTS.SECONDARY};
        font-size: ${theme.FONT_SIZE.SMALL};
        color: ${theme.COLORS.RED_PRIMARY_COLOR};
        font-weight: ${theme.FONT_WEIGHT.BOLD};
        cursor: pointer;
      `}
    }
  }

  h1 {
    ${({ theme }) => css`
      font-family: ${theme.FONTS.PRIMARY};
      font-size: ${theme.FONT_SIZE.XXXLARGE};
      color: ${theme.COLORS.GRAY_1000};

      text-align: center;
    `}
  }

  @media (max-width: 864px) {
    form {
      width: 86%;
    }
  }
`
