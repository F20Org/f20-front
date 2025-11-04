import { useState } from 'react'

import { SearchInput } from '../SearchInput'

import MagicBall from 'assets/icons/magicBall.svg'

import { SpellsSectionContainer } from './styles'

export const SpellsSection = () => {
  const [searchInput, setSearchInput] = useState('')

  return (
    <SpellsSectionContainer>
      <SearchInput
        buttonText='Pesquisar'
        handleClick={() => {}}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        buttonColor='DARK_BLUE_PRIMARY_COLOR'
        placeholder='Pesquisar Magias'
        icon={MagicBall}
      />
    </SpellsSectionContainer>
  )
}
