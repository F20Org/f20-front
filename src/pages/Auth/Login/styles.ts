import styled, { css } from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;

  height: 100%;
  width: 100%;
`

export const ImageContainer = styled.div`
  flex: 1;
  background: #f0f0f5;

  @media (max-width: 864px) {
    display: none;
  }
`

export const FormContainer = styled.div`
  flex: 1;

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
