import styled from 'styled-components'

export const ListPageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  position: relative;

  font-size: 90px;

  main {
    width: 100%;
    height: 100%;

    padding: 16px 42px;

    margin-top: 48px;
  }
`

export const MainHeader = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXLARGE};
    font-family: ${({ theme }) => theme.FONTS.PRIMARY};
  }
`
