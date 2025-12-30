import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  label {
    margin-bottom: 14px;
    font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  }

  span {
    color: ${({ theme }) => theme.COLORS.RED_PRIMARY_COLOR};
    margin-top: 8px;
    font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  }
`

interface InputContainerProps {
  hasError?: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;

  height: 42px;

  img {
    position: absolute;

    left: -16px;
    height: 76px;

    z-index: 1;
  }

  input {
    border: none;
    outline: none;
    flex: 1;

    height: 100%;

    padding-left: 48px;

    box-shadow: ${({ hasError, theme }) =>
      hasError
        ? `2px 2px 2px ${theme.COLORS.RED_PRIMARY_COLOR}`
        : '2px 2px 5px rgba(0, 0, 0, 0.1)'};
  }
`
