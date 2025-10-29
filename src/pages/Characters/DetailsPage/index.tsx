import { RightSection } from './components/RightSection'
import { CharacterInfos } from './components/CharacterInfos'

import { DetailsPageContainer, LeftBar, RightBar } from './styles'

export const DetailsPage = () => {
  return (
    <DetailsPageContainer>
      <main>
        <LeftBar>
          <CharacterInfos />
        </LeftBar>
        <RightBar>
          <RightSection />
        </RightBar>
      </main>
    </DetailsPageContainer>
  )
}
