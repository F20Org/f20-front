import { RightSection } from './components/RightSection'
import { CharacterInfos } from './components/CharacterInfos'
import { ExpertiseSection } from './components/ExpertiseSection'

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
      <ExpertiseSection />
    </DetailsPageContainer>
  )
}
