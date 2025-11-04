import { useState } from 'react'

import { Race } from './components/Race'
import { Class } from './components/Class'
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
      <Race />
      <Class />
    </SkillsSectionContainer>
  )
}
