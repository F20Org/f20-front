import { Button } from 'components/Button'
import { charactersListMocked } from './consts'
import { CharacterItem } from 'components/CharacterItem'

import { ListPageContainer, MainHeader, MainList } from './styles'
import { useNavigate } from 'react-router-dom'

export const ListPage = () => {
  const navigate = useNavigate()

  return (
    <ListPageContainer>
      <main>
        <MainHeader>
          <p> Fichas </p>
          <Button
            backgroundColor='RED_PRIMARY_COLOR'
            label='Adicionar'
            onClick={() => {}}
          />
        </MainHeader>
        <MainList>
          {charactersListMocked.map((character) => (
            <CharacterItem
              onClick={() => navigate(`/characters/1`)}
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
