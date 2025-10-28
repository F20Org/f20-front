import RedArrowImage from 'assets/icons/redArrow.svg'
import LifeBorder from 'assets/icons/lifeBorder.svg'
import RedArrowPlusImage from 'assets/icons/redPlusArrow.svg'

import BlueArrowImage from 'assets/icons/blueArrow.svg'
import ManaBorder from 'assets/icons/manaBorder.svg'
import BlueArrowPlusImage from 'assets/icons/bluePlusArrow.svg'

import { Stats } from './components/Stats'

import { LifeSituationContainer } from './styles'

export const LifeSituation = () => {
  return (
    <LifeSituationContainer>
      <Stats
        maxPoints={999}
        label='Pontos de'
        currentPoints={999}
        focusLabel='Vida (PV)'
        arrowImage={RedArrowImage}
        borderImage={LifeBorder}
        color='RED_PRIMARY_COLOR'
        arrowPlusImage={RedArrowPlusImage}
      />

      <Stats
        maxPoints={999}
        label='Pontos de'
        currentPoints={999}
        focusLabel='Mana (PM)'
        arrowImage={BlueArrowImage}
        borderImage={ManaBorder}
        color='BLUE_PRIMARY_COLOR'
        arrowPlusImage={BlueArrowPlusImage}
      />
    </LifeSituationContainer>
  )
}
