import { Header } from 'components/Header'
import { ListPageContainer, MainHeader, MainList } from './styles'
import { Button } from 'components/Button'
import { charactersListMocked } from './consts'
import { CharacterItem } from 'components/CharacterItem'

export const ListPage = () => {
  return (
    <ListPageContainer>
      <Header />
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
