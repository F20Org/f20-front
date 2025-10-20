import { Button } from 'components/Button'
import { charactersListMocked } from './consts'
import { CharacterItem } from 'components/CharacterItem'

import { ListPageContainer, MainHeader, MainList } from './styles'

export const ListPage = () => {
  return (
    <ListPageContainer>
      <main>
        <MainHeader>
          <p> Fichas </p>
          <Button label='Adicionar' onClick={() => {}} />
        </MainHeader>
        <MainList>
          {charactersListMocked.map((character) => (
            <CharacterItem
              key={character.name}
              name={character.name}
              classType={character.classType}
              race={character.race}
            />
          ))}
        </MainList>
      </main>
    </ListPageContainer>
  )
}
