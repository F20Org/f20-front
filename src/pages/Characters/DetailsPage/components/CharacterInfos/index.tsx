import { Attributes } from './components/Attributes'
import { InfosHeader } from './components/InfosHeader'
import { InfosContainer } from './styles'

export const CharacterInfos = () => {
  return (
    <InfosContainer>
      <InfosHeader />
      <Attributes />
    </InfosContainer>
  )
}
