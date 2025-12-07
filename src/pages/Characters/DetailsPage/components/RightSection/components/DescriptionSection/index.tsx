import {
  InfoLabel,
  InfoTextarea,
  DescriptionContainer,
  InfoInputContainer,
} from './styles'

export const DescriptionSection = () => {
  return (
    <DescriptionContainer>
      <InfoInputContainer>
        <InfoLabel>Proficiências</InfoLabel>
        <InfoTextarea placeholder='Escreva as proficiências do personagem aqui...' />
      </InfoInputContainer>

      <InfoInputContainer>
        <InfoLabel>Aparência</InfoLabel>
        <InfoTextarea placeholder='Escreva a aparência do personagem aqui...' />
      </InfoInputContainer>

      <InfoInputContainer>
        <InfoLabel>Personalidade</InfoLabel>
        <InfoTextarea placeholder='Escreva a personalidade do personagem aqui...' />
      </InfoInputContainer>

      <InfoInputContainer>
        <InfoLabel>Anotações</InfoLabel>
        <InfoTextarea placeholder='Escreva as anotações do personagem aqui...' />
      </InfoInputContainer>
    </DescriptionContainer>
  )
}
