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
    gap: 14px;

    margin-top: 48px;

    @media (max-width: 1100px) {
      flex-direction: column;
    }
  }
`

export const LeftBar = styled.div`
  width: 36%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 24px;
  padding: 0 54px;

  @media (max-width: 1290px) {
    width: 48%;
  }

  @media (max-width: 1100px) {
    width: 100%;
    padding: 0 0;
  }
`

export const RightBar = styled(LeftBar)`
  background-color: rgba(114, 114, 114, 1);

  flex: 1;
`
