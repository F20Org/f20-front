import { useContext, useState } from 'react'

import DiceIcon from 'assets/icons/dice.svg'

import { RollsContext } from 'contexts/Rolls'

import { Button } from 'components/Button'
import { Rolls } from './components/Rolls'

import { RollContainer, RollInput, RollsSectionContainer } from './styles'

export const RollsSection = () => {
  const { addRoll } = useContext(RollsContext)

  const [rollInput, setRollInput] = useState<string>('')

  const handleRollClick = () => {
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

    addRoll('Rolagem Manual', finalResult, rollInput)
  }

  return (
    <RollsSectionContainer>
      <RollContainer>
        <RollInput
          placeholder='Rodar dado (1d10+10)'
          type='text'
          value={rollInput}
          onChange={(e) => setRollInput(e.target.value)}
        />
        <Button
          backgroundColor='RED_PRIMARY_COLOR'
          label='Rolar'
          onClick={handleRollClick}
          icon={DiceIcon}
        />
      </RollContainer>
      <Rolls />
    </RollsSectionContainer>
  )
}
