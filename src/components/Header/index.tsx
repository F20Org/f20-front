import IconLogo from 'assets/icons/mainIcon.png'

import {
  HeaderContainer,
  IconImage,
  MenuMobileButton,
  MobileOptions,
  Options,
  UserProfileIcon,
} from './styles'
import { Icon } from 'components/Icon'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <IconImage onClick={() => navigate('/home')} src={IconLogo} />
      <Options>
        <li onClick={() => navigate('/characters')}>Fichas</li>
        <li>Campanhas</li>
        <li>Regras da Casa</li>
      </Options>
      <UserProfileIcon />
      <MenuMobileButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <Icon name='IoMenu' size='32px' color='GRAY_1000' />
      </MenuMobileButton>

      <MobileOptions isMobileMenuOpen={isMobileMenuOpen}>
        <li>Fichas</li>
        <li>Campanhas</li>
        <li>Homebrew</li>
      </MobileOptions>
    </HeaderContainer>
  )
}
