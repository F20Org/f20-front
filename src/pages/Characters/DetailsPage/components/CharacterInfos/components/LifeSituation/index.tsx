import RedArrowImage from 'assets/icons/redArrow.svg'
import LifeBorder from 'assets/icons/lifeBorder.svg'
import RedArrowPlusImage from 'assets/icons/redPlusArrow.svg'

import BlueArrowImage from 'assets/icons/blueArrow.svg'
import ManaBorder from 'assets/icons/manaBorder.svg'
import BlueArrowPlusImage from 'assets/icons/bluePlusArrow.svg'

import { Stats } from './components/Stats'

import { LifeSituationContainer } from './styles'
import { useState } from 'react'

export const LifeSituation = () => {
  const [life, setLife] = useState<number>(999)
  const [lifeMax, setLifeMax] = useState<number>(999)

  const [mana, setMana] = useState<number>(999)
  const [manaMax, setManaMax] = useState<number>(999)

  return (
    <LifeSituationContainer>
      <Stats
        label='Pontos de'
        setPoints={setLife}
        maxPoints={lifeMax}
        currentPoints={life}
        focusLabel='Vida (PV)'
        arrowImage={RedArrowImage}
        borderImage={LifeBorder}
        color='RED_PRIMARY_COLOR'
        arrowPlusImage={RedArrowPlusImage}
      />

      <Stats
        label='Pontos de'
        setPoints={setMana}
        maxPoints={manaMax}
        currentPoints={mana}
        focusLabel='Mana (PM)'
        arrowImage={BlueArrowImage}
        borderImage={ManaBorder}
        color='BLUE_PRIMARY_COLOR'
        arrowPlusImage={BlueArrowPlusImage}
      />
    </LifeSituationContainer>
  )
}
