import { useContext, useState } from 'react'

import DiceIcon from 'assets/icons/dice.svg'

import { RollsContext } from 'contexts/Rolls'

import { Rolls } from '../Rolls'
import { Attacks } from '../Attacks'
import { SearchInput } from '../SearchInput'

import { attackMocks } from './consts'

import { RollsSectionContainer } from './styles'

export const RollsSection = () => {
  const { addAttackRoll, attackRollsHistory } = useContext(RollsContext)

  const [rollInput, setRollInput] = useState<string>('')

  const handleRollClick = () => {
    if (rollInput.trim() === '') return

    let finalResult = 0
    const rollList = rollInput.split('+').map((roll) => roll.trim())

    rollList.forEach((roll) => {
      if (roll.includes('d') === false) {
        const flatBonus = parseInt(roll)
        finalResult += isNaN(flatBonus) ? 0 : flatBonus
      } else {
        const [quantity, dieType] = roll
          .toLowerCase()
          .split('d')
          .map((part) => part.trim())

        const numRolls = parseInt(quantity) || 1
        const dieSides = parseInt(dieType)

        if (
          isNaN(dieSides) ||
          dieSides <= 0 ||
          isNaN(numRolls) ||
          numRolls <= 0
        ) {
          console.error(`Invalid die type: ${dieType}`)
          return
        }

        for (let i = 0; i < numRolls; i++) {
          finalResult += Math.floor(Math.random() * dieSides) + 1
        }
      }
    })

    addAttackRoll('Rolagem Manual', finalResult, rollInput)
    setRollInput('')
  }

  return (
    <RollsSectionContainer>
      <SearchInput
        buttonText='Rolar'
        handleClick={handleRollClick}
        searchInput={rollInput}
        setSearchInput={setRollInput}
        buttonColor='RED_PRIMARY_COLOR'
        placeholder='Rodar dado (1d10+10)'
        icon={DiceIcon}
      />
      <Rolls rollsHistory={attackRollsHistory} />
      <Attacks label='Ataques' attacks={attackMocks} />
    </RollsSectionContainer>
  )
}
