import { Header } from 'components/Header'
import { ListPageContainer, MainHeader } from './styles'
import { Button } from 'components/Button'

export const ListPage = () => {
  return (
    <ListPageContainer>
      <Header />
      <main>
        <MainHeader>
          <p> Fichas </p>
          <Button label='Adicionar' onClick={() => {}} />
        </MainHeader>
      </main>
    </ListPageContainer>
  )
}
