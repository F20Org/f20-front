import { useState } from 'react'

import { SearchInput } from '../SearchInput'

import BookIcon from 'assets/icons/magicBook.svg'

import { SkillsSectionContainer } from './styles'

export const SkillsSection = () => {
  const [searchInput, setSearchInput] = useState('')

  return (
    <SkillsSectionContainer>
      <SearchInput
        buttonText='Pesquisar'
        handleClick={() => {}}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        buttonColor='YELLOW_PRIMARY_COLOR'
        placeholder='Pesquisar Habilidades'
        icon={BookIcon}
      />
    </SkillsSectionContainer>
  )
}
