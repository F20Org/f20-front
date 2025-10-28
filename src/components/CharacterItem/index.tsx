import { Container, Image, InfoContainer } from './styles'
import type { CharacterItemProps } from './types'

export const CharacterItem = (props: CharacterItemProps) => {
  const { name, classType, race, onClick } = props

  return (
    <Container onClick={onClick}>
      <Image />
      <InfoContainer>
        <h2>{name}</h2>
        <p>
          {classType} - {race}
        </p>
      </InfoContainer>
    </Container>
  )
}
