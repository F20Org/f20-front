import Icon from 'assets/icons/mainIcon.png'

import { HeaderContainer, IconImage, Options, UserProfileIcon } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <IconImage src={Icon} />
      <Options>
        <li>Fichas</li>
        <li>Campanhas</li>
        <li>Homebrew</li>
      </Options>
      <UserProfileIcon />
    </HeaderContainer>
  )
}
