import { useContext, useState } from 'react'

import { RollsContext } from 'contexts/Rolls'

import { Rolls } from '../Rolls'
import { Attacks } from '../Attacks'
import { SearchInput } from '../SearchInput'
import { attackMocks } from '../RollsSection/consts'

import MagicBall from 'assets/icons/magicBall.svg'

import { SpellsSectionContainer } from './styles'

export const SpellsSection = () => {
  const { spellRollsHistory } = useContext(RollsContext)

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

      <Rolls rollsHistory={spellRollsHistory} />

      <Attacks attacks={attackMocks} />
    </SpellsSectionContainer>
  )
}
