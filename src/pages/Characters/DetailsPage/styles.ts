import styled from 'styled-components'

export const DetailsPageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  position: relative;

  font-size: 90px;

  overflow-y: scroll;

  main {
    display: flex;

    width: 100%;
    height: 100%;

    padding: 16px 42px;
    gap: 24px;

    margin-top: 48px;
  }
`

export const LeftBar = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const RightBar = styled(LeftBar)`
  background-color: rgba(114, 114, 114, 1);
`
