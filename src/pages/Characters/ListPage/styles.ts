import styled from 'styled-components'

export const ListPageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  position: relative;

  font-size: 90px;

  overflow-y: scroll;

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

export const MainList = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: auto auto auto;

  gap: 24px;

  margin-top: 32px;

  @media (max-width: 1060px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 720px) {
    grid-template-columns: auto;
  }
`
