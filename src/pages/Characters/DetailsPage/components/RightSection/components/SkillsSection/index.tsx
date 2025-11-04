import { useState } from 'react'

import { SearchInput } from '../SearchInput'

import BookIcon from 'assets/icons/magicBook.svg'

import { RollsSectionContainer } from './styles'

export const SkillsSection = () => {
  const [searchInput, setSearchInput] = useState('')

  return (
    <RollsSectionContainer>
      <SearchInput
        buttonText='Pesquisar'
        handleClick={() => {}}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        buttonColor='YELLOW_PRIMARY_COLOR'
        placeholder='Pesquisar Habilidades'
        icon={BookIcon}
      />
    </RollsSectionContainer>
  )
}
