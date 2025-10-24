import CharactersIcon from 'assets/images/buttons/characters.svg'
import RulersIcon from 'assets/images/buttons/rulers.svg'
import StoriesIcon from 'assets/images/buttons/stories.svg'

import { OptionCard } from './components/OptionCard'
import { Container, OptionsContainer, Title } from './styles'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Title>
        Bem-vinde,
        <br /> <span>Fulano!</span>
      </Title>
      <OptionsContainer>
        <OptionCard
          onClick={() => navigate('/characters')}
          icon={CharactersIcon}
          title='Fichas'
          description='Crie e gerencie as fichas de seus personagem dentro do F20!'
        />

        <OptionCard
          onClick={() => navigate('/stories')}
          icon={StoriesIcon}
          title='Campanhas'
          description='Crie campanhas para os jogadores ou entre em uma campanha com seus Personagens, Combates e Anotações!'
        />

        <OptionCard
          onClick={() => navigate('/rulers')}
          icon={RulersIcon}
          title='Regras da Casa'
          description='Crie regras personalizadas para utilizar onde quiser, sejam Habilidades, Magias, Itens e até inimigos!'
        />
      </OptionsContainer>
    </Container>
  )
}
