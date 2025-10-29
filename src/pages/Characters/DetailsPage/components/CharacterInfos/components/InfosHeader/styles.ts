import styled, { css } from 'styled-components'

export const InfosHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
`

export const PrimaryInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  gap: 16px;
`

export const SecondaryInfos = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  width: 100%;

  gap: 24px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
  }

  p {
    ${({ theme }) => css`
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.LARGE};
      color: ${theme.COLORS.GRAY_1000};
      font-family: ${theme.FONTS.PRIMARY};

      width: 100%;
      text-align: center;
    `};
  }
`

export const LevelInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  p {
    ${({ theme }) => css`
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.LARGE};
      color: ${theme.COLORS.GRAY_1000};
    `}
  }

  span {
    ${({ theme }) => css`
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.MEDIUM};
      color: ${theme.COLORS.GRAY_1000};
    `}
  }
`

export const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: gray;
`

export const Infos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  h4 {
    ${({ theme }) => css`
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.MEDIUM};
      color: ${theme.COLORS.GRAY_1000};

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  }

  h2 {
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.XXLARGE};
      color: ${theme.COLORS.GRAY_1000};
      font-family: ${theme.FONTS.PRIMARY};

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  }

  p {
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.SMALL};
      color: ${theme.COLORS.GRAY_1000};

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  }
`
