import { Container, Image, InfoContainer } from './styles'
import type { CharacterItemProps } from './types'

export const CharacterItem = (props: CharacterItemProps) => {
  const { name, classType, race } = props

  return (
    <Container>
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
