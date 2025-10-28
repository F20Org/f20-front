import { Attributes } from './components/Attributes'
import { InfosHeader } from './components/InfosHeader'
import { LifeSituation } from './components/LifeSituation'
import { InfosContainer } from './styles'

export const CharacterInfos = () => {
  return (
    <InfosContainer>
      <InfosHeader />
      <Attributes />
      <LifeSituation />
    </InfosContainer>
  )
}
