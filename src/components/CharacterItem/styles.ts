import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 124px;

  padding: 12px;

  background-color: #fff;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_1000};
  box-shadow: 6px 6px 2px rgba(0, 0, 0, 0.25);

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`

export const Image = styled.div`
  width: 100px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const InfoContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;

  padding: 12px;
  gap: 6px;

  h2 {
    font-size: ${({ theme }) => theme.FONT_SIZE.XLARGE};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.MEDIUM};
  }

  p {
    font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }
`
