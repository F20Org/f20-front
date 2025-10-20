import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 42px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Options = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;

  li {
    font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};

    cursor: pointer;

    transition: 0.5s;

    &:hover {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  @media (max-width: 720px) {
    display: none;
  }
`

export const IconImage = styled.img`
  width: 90px;
  cursor: pointer;
`

export const UserProfileIcon = styled.div`
  width: 48px;
  height: 48px;

  background-color: #ccc;

  border-radius: 100%;

  cursor: pointer;

  @media (max-width: 720px) {
    display: none;
  }
`

export const MenuMobileButton = styled.button`
  display: none;

  background-color: none;
  border: none;
  background: none;

  @media (max-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    cursor: pointer;
  }
`
