import IconLogo from 'assets/icons/mainIcon.png'

import {
  HeaderContainer,
  IconImage,
  MenuMobileButton,
  Options,
  UserProfileIcon,
} from './styles'
import { Icon } from 'components/Icon'

export const Header = () => {
  return (
    <HeaderContainer>
      <IconImage src={IconLogo} />
      <Options>
        <li>Fichas</li>
        <li>Campanhas</li>
        <li>Homebrew</li>
      </Options>
      <UserProfileIcon />
      <MenuMobileButton>
        <Icon name='IoMenu' size='32px' color='GRAY_1000' />
      </MenuMobileButton>
    </HeaderContainer>
  )
}
